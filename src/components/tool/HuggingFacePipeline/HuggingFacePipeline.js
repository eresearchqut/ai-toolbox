import React, {useState} from 'react';
import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Image,
    Link,
    Text
} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'

import HFLogo from "../../../../static/img/hf-logo.png";
import {Model} from "./Model";
import {Instructions} from "./Instructions/Instructions";
import {Config, getConfigGroups} from "./Config";
import {PresetSection} from "./PresetSection";
import ChoiceScreen from "../../layout/ChoiceScreen";

function BoxHeading({children, ...props}) {
    return (
        <Heading as='h2' size='md' marginBottom={0} {...props}>{children}</Heading>
    )
}

function AccordionHeading({children}) {
    return (
        <AccordionButton py={3}>
            <BoxHeading display="inline-block" flex='1' textAlign='left'>
                {children}
            </BoxHeading>
            <AccordionIcon/>
        </AccordionButton>
    )
}

function PresetsChoice({presets, onPresetChange}) {
    return (
        <Box>
            <BoxHeading>Preset configurations</BoxHeading>
            <PresetSection presets={presets} onPresetChange={onPresetChange}/>
        </Box>
    )
}

function CustomChoice({onSelected}) {
    return (
        <Box>
            <BoxHeading>Custom configuration</BoxHeading>
            <Text my={2}>Choose the model, service, and settings.</Text>
            <Button size="md" onClick={onSelected} rightIcon={<ArrowForwardIcon/>}>Start</Button>
        </Box>
    )
}

const configComplete = (config) => Object.values(getConfigGroups(config)).map(g => g()).filter(g => g.show(config)).every(g => g.selected(config));

const DEFAULT_CONFIG = {cpuCores: 4, ram: 16, gpuModules: 1};

export default function HuggingFacePipeline({title, task, presets = []}) {
    const [model, setModel] = useState("");
    const [port] = useState(Math.floor(Math.random() * 7000) + 3000);
    const [config, setConfig] = useState(DEFAULT_CONFIG);

    const [showPage, setShowPage] = useState(false);
    const [accordionIndices, setAccordionIndices] = useState([0, 1, 2]);

    const onPresetChange = (preset) => {
        setModel(preset.model);
        setConfig(preset.config);
        setShowPage(true);
        setAccordionIndices([2]);
    };

    const onCustomSelected = () => {
        setModel("");
        setConfig(DEFAULT_CONFIG);
        setShowPage(true);
        setAccordionIndices([0, 1, 2]);
    }

    const isModelComplete = model !== "";
    const isConfigComplete = configComplete(config);

    return (
        <Card>
            <CardHeader>
                <Link href={`https://huggingface.co/tasks/${task}`} isExternal>
                    <Image float="left" verticalAlign="middle" src={HFLogo} alt="HuggingFace logo" display="inline"
                           height="30px"/>
                    <Heading as='h1' size='lg' display="inline" position="relative" marginLeft="2">
                        {title}
                    </Heading>
                </Link>
            </CardHeader>
            <CardBody>
                <Text mb={6}>Step-by-step instructions to interact through your web browser with a HuggingFace model,
                    running on Lyra, JupyterHub, rVDI, or your own machine.</Text>
                <ChoiceScreen
                    choices={[
                        <PresetsChoice presets={presets} onPresetChange={onPresetChange}/>,
                        <CustomChoice onSelected={onCustomSelected}/>,
                    ]}
                    page={
                        <Accordion allowMultiple defaultIndex={accordionIndices} allowToggle>
                            <AccordionItem>
                                <AccordionHeading>
                                    Model
                                </AccordionHeading>
                                <AccordionPanel><Model model={model} onModelChange={setModel}
                                                       task={task}/></AccordionPanel>
                            </AccordionItem>

                            {isModelComplete && <AccordionItem>
                                <AccordionHeading>
                                    Config
                                </AccordionHeading>
                                <AccordionPanel><Config config={config} onConfigChange={setConfig}/></AccordionPanel>
                            </AccordionItem>}

                            {isModelComplete && isConfigComplete && <AccordionItem>
                                <AccordionHeading>
                                    Instructions
                                </AccordionHeading>
                                <AccordionPanel><Instructions task={task} model={model} config={config}
                                                              port={port}/></AccordionPanel>
                            </AccordionItem>}
                        </Accordion>
                    }
                    showPage={showPage}
                    onPageChange={(show) => setShowPage(show)}
                />
            </CardBody>
        </Card>
    )
}
