import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";

import HFLogo from "../../../../../static/img/hf-logo.png";
import ChoiceScreen from "../../../layout/ChoiceScreen";
import {
  Config,
  configComplete,
  DEFAULT_CONFIG,
  getCpus,
  getCpuModel,
  getCpuVendor,
  getEnvironment,
  getGpuModel,
  getGpuModules,
  getGpuVendor,
  getJobProfile,
  getOs,
  getRam,
  getTool,
  isLyra,
  isValidChoice,
} from "../Config";
import ConfigPicker from "../Config/ConfigPicker";
import { Guide, GuideHeader } from "../Guide";
import { HuggingFaceInstructions } from "./HuggingFaceInstructions";
import { Model } from "./Model";
import { PresetSection } from "./PresetSection";

function BoxHeading({ children, ...props }) {
  return (
    <Heading as="h2" size="md" marginBottom={0} {...props}>
      {children}
    </Heading>
  );
}

function AccordionHeading({ children }) {
  return (
    <AccordionButton py={3}>
      <BoxHeading display="inline-block" flex="1" textAlign="left">
        {children}
      </BoxHeading>
      <AccordionIcon />
    </AccordionButton>
  );
}

function PresetsChoice({ presets, onPresetChange }) {
  return (
    <Box>
      <BoxHeading>Preset configurations</BoxHeading>
      <PresetSection presets={presets} onPresetChange={onPresetChange} />
    </Box>
  );
}

function CustomChoice({ onSelected }) {
  return (
    <Box>
      <BoxHeading>Custom configuration</BoxHeading>
      <Text my={2}>Choose the model, service, and settings.</Text>
      <Button size="md" onClick={onSelected} rightIcon={<ArrowForwardIcon />}>
        Start
      </Button>
    </Box>
  );
}

const getConfigGroups = (config, onConfigChange = () => {}) => {
  const onChange = (key) => (value) =>
    onConfigChange({ ...config, [key]: value });

  return {
    service: () => {
      const services = [
        ["Lyra", "QUT's HPC cluster"],
        ["JupyterHub", "Jupyter notebooks on QUT's HPC cluster"],
        ["rVDI", "QUT's Research Virtual Desktop Infrastructure"],
        ["Local", "Your own workstation"],
      ];
      return {
        element: (key, selected) => (
          <ConfigPicker
            key={key}
            title="Service"
            description="The service to use for running the model."
            selected={selected}
            inputProps={{
              choices: services,
              value: config?.service,
              onChange: onChange("service"),
            }}
          />
        ),
        show: () => true,
        selected: (config) => isValidChoice(services, config?.service),
      };
    },
    os: getOs(config, onChange),
    hardware: () => {
      let hardware;
      if (isLyra(config)) {
        hardware = [
          ["CPU", "Un-accelerated. Quick to queue, slow to run."],
          ["GPU", "Accelerated GPU (recommended)"],
          ["IPU", "Accelerated IPU from Graphcore"],
        ];
      } else {
        hardware = [
          ["CPU", "Un-accelerated. Quick to queue, slow to run."],
          ["GPU", "Accelerated GPU (recommended)"],
        ];
      }
      return {
        element: (key, selected) => (
          <ConfigPicker
            key={key}
            title="Hardware"
            description="The hardware to use for running the model."
            selected={selected}
            inputProps={{
              choices: hardware,
              value: config?.hardware,
              onChange: onChange("hardware"),
            }}
          />
        ),
        show: (config) => config?.service,
        selected: (config) => isValidChoice(hardware, config?.hardware),
      };
    },
    cpuVendor: getCpuVendor(config, onChange),
    cpuModel: getCpuModel(config, onChange),
    cpus: getCpus(config, onChange),
    ram: getRam(config, onChange),
    jobProfile: getJobProfile(config, onChange),
    gpuVendor: getGpuVendor(config, onChange),
    gpuModel: getGpuModel(config, onChange),
    gpuModules: getGpuModules(config, onChange),
    environment: getEnvironment(config, onChange),
    tool: getTool(config, onChange),
  };
};

export default function HuggingFacePipeline({ title, task, presets = [] }) {
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
  };

  const isModelComplete = model !== "";
  const isConfigComplete = configComplete(config, getConfigGroups);

  return (
    <Guide
      colorScheme="yellow"
      header={
        <GuideHeader
          title={title}
          logo={HFLogo}
          alt="HuggingFace logo"
          link={`https://huggingface.co/tasks/${task}`}
        />
      }
      body={
        <>
          <Text mb={6}>
            Step-by-step instructions to interact through your web browser with
            a HuggingFace model, running on Lyra, JupyterHub, rVDI, or your own
            machine.
          </Text>
          <ChoiceScreen
            choices={[
              <PresetsChoice
                key={0}
                presets={presets}
                onPresetChange={onPresetChange}
              />,
              <CustomChoice key={1} onSelected={onCustomSelected} />,
            ]}
            page={
              <Accordion
                allowMultiple
                defaultIndex={accordionIndices}
                allowToggle
              >
                <AccordionItem>
                  <AccordionHeading>Model</AccordionHeading>
                  <AccordionPanel>
                    <Model model={model} onModelChange={setModel} task={task} />
                  </AccordionPanel>
                </AccordionItem>

                {isModelComplete && (
                  <AccordionItem>
                    <AccordionHeading>Configuration</AccordionHeading>
                    <AccordionPanel>
                      <Config
                        config={config}
                        onConfigChange={setConfig}
                        getConfigGroups={getConfigGroups}
                      />
                    </AccordionPanel>
                  </AccordionItem>
                )}

                {isModelComplete && isConfigComplete && (
                  <AccordionItem>
                    <AccordionHeading>Instructions</AccordionHeading>
                    <AccordionPanel>
                      <HuggingFaceInstructions
                        task={task}
                        model={model}
                        config={config}
                        port={port}
                      />
                    </AccordionPanel>
                  </AccordionItem>
                )}
              </Accordion>
            }
            showPage={showPage}
            onPageChange={(show) => setShowPage(show)}
          />
        </>
      }
    />
  );
}
