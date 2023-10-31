import React, {useState} from 'react';
import {
    Button,
    Divider,
    Flex,
    Link,
    Select,
    Table,
    TableCaption,
    TableContainer,
    Tag,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useData from "../hooks/useData";
import {
    AutoComplete,
    AutoCompleteCreatable,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList
} from "@choc-ui/chakra-autocomplete";

const formatNumber = (n) => Intl.NumberFormat(navigator.language, {
    notation: "compact",
    maximumFractionDigits: 1
}).format(n);

function ModelSizeCheck({model}) {
    const [result, setResult] = useState(null);

    return (
        <>
            <Button>Estimate model size</Button>
            {
                result && <TableContainer>
                    <Table variant="simple" size="sm">
                        <TableCaption>Memory requirements estimation</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Model Precision</Th>
                                <Th>Largest Layer or Residual Group</Th>
                                <Th>Total Size</Th>
                                <Th>Training using Adam</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {result.map(({precision, largest_layer, total_size, training_time}) =>
                                <Tr key={precision}>
                                    <Td>{precision}</Td>
                                    <Td>{largest_layer}</Td>
                                    <Td>{total_size}</Td>
                                    <Td>{training_time}</Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            }
        </>
    )
}


export default function GradioPipeline({title, link, task}) {
    const {data, error, loading} = useData("https://huggingface.co/api/models", {
        pipeline_tag: task,
        sort: "likes",
        limit: 200,
        direction: -1
    });
    const models = data ?? [];
    const [selectedModel, setSelectedModel] = useState(null);

    if (models[0] && !selectedModel) setSelectedModel(models[0]);

    return (
        <div className="card">
            <div className="card__header"><Link href={link} isExternal><h3>{title} <ExternalLinkIcon marginLeft={1}/>
            </h3></Link></div>
            <div className="card__body">
                <div>
                    <b>Model: </b>
                    <Select onChange={(e) => setSelectedModel(models.find(model => model.id === e.target.value))}>
                        {models.map(model => <option value={model.id} key={model.id}>{model.id}</option>)}
                    </Select>
                    <AutoComplete openOnFocus creatable
                                  onChange={(value) => setSelectedModel(models.find(model => model.id === value))}>
                        <AutoCompleteInput variant="filled"/>

                        <AutoCompleteList>
                            {models.map((model) => (
                                <AutoCompleteItem
                                    key={model.id}
                                    value={model.id}
                                >
                                    {model.id}
                                </AutoCompleteItem>
                            ))}
                            <AutoCompleteCreatable>
                                {({value}) => <span>Use custom '{value}' model</span>}
                            </AutoCompleteCreatable>
                        </AutoCompleteList>
                    </AutoComplete>
                </div>

                {
                    selectedModel &&
                    <>
                        <br></br>
                        <TableContainer>
                            <Table variant="simple" size="sm">
                                <Tbody>
                                    <Tr>
                                        <Th>Link</Th>
                                        <Td>
                                            <Link href={`https://hf.co/${selectedModel.id}`} isExternal>
                                                {`hf.co/${selectedModel.id}`}
                                                <ExternalLinkIcon marginLeft={1}/>
                                            </Link>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Th>Likes</Th>
                                        <Td>{formatNumber(selectedModel.likes)}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>Downloads</Th>
                                        <Td>{formatNumber(selectedModel.downloads)}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>Tags</Th>
                                        <Td>
                                            <Flex gap={2} flexWrap={"wrap"}>
                                                {selectedModel.tags.map(tag => <Tag size="md" key={tag}>{tag}</Tag>)}
                                            </Flex>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </>
                }

                <Divider/>

                <Tabs groupId="gradio-deployment">
                    <TabItem value="lyra" label="Lyra">
                        <CodeBlock language="bash">ls</CodeBlock>
                    </TabItem>
                    <TabItem value="rvdi" label="rVDI">
                        <CodeBlock language="bash">ls</CodeBlock>
                    </TabItem>
                    <TabItem value="jupyter" label="JupyterHub">
                        <CodeBlock language="bash">ls</CodeBlock>
                    </TabItem>
                    <TabItem value="local" label="Local">
                        <CodeBlock language="bash">ls</CodeBlock>
                    </TabItem>
                </Tabs>

                <button className="button button--primary">Launch</button>
            </div>
        </div>
    )
}
