import { CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  Link,
  Progress,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteCreatable,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

import useData from "../../../hooks/useData";
import AlertHelper from "../Config/AlertHelper";

function ModelAutoComplete({ model, onModelChange, models }) {
  return (
    <AutoComplete
      openOnFocus
      creatable
      onChange={onModelChange}
      suggestWhenEmpty
    >
      <InputGroup>
        <AutoCompleteInput
          placeholder="Search for a model"
          variant="filled"
          value={model}
          onChange={(e) => onModelChange(e.target.value)}
        />
        {model && (
          <InputRightElement>
            <Button size="xs" onClick={() => onModelChange("")}>
              <CloseIcon />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <AutoCompleteList>
        {models.map((model) => (
          <AutoCompleteItem key={model.id} value={model.id}>
            {model.id}
          </AutoCompleteItem>
        ))}
        <AutoCompleteCreatable>
          {({ value }) => <span>Use custom &apos;{value}&apos; model</span>}
        </AutoCompleteCreatable>
      </AutoCompleteList>
    </AutoComplete>
  );
}

const formatNumber = (n) =>
  Intl.NumberFormat(navigator.language, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);

const MODEL_FORMATS = {
  F32: ["Single Precision Floating Point", 32],
  F16: ["Half Precision Floating Point", 16],
  BF16: ["Brain Floating Point", 16],
  I8: ["Integer", 8],
  I4: ["Integer", 4],
};
const formatModelParameters = (modelParameters) =>
  Object.entries(modelParameters)
    .map(([precision, value]) => {
      const [name, bits] = MODEL_FORMATS[precision];
      return `${formatNumber(value)} ${name} (${bits} bits)`;
    })
    .join(", ");
const formatModelMinSize = (modelParameters) =>
  `${formatNumber(
    Object.entries(modelParameters).reduce((acc, [precision, value]) => {
      const [, bits] = MODEL_FORMATS[precision];
      return acc + value * bits;
    }, 0) / 8589934592,
  )} GB`;

function ModelDetails({ model, knownModelData, modelData, modelLoading }) {
  if (modelLoading) {
    return <Progress colorScheme="yellow" isIndeterminate />;
  } else if (model && (knownModelData?.id || modelData?.id)) {
    const tags = modelData?.tags ?? knownModelData?.tags;
    return (
      <TableContainer>
        <Table variant="simple" size="sm">
          <Tbody>
            <Tr>
              <Th>Link</Th>
              <Td>
                <Link href={`https://hf.co/${model}`} isExternal>
                  {`hf.co/${model}`}
                  <ExternalLinkIcon marginLeft={1} />
                </Link>
              </Td>
            </Tr>
            {modelData?.lastModified && (
              <Tr>
                <Th>Last Modified</Th>
                <Td>{new Date(modelData.lastModified).toLocaleString()}</Td>
              </Tr>
            )}
            <Tr>
              <Th>Likes</Th>
              <Td>{formatNumber(modelData?.likes ?? knownModelData?.likes)}</Td>
            </Tr>
            <Tr>
              <Th>Downloads</Th>
              <Td>
                {formatNumber(
                  modelData?.downloads ?? knownModelData?.downloads,
                )}
              </Td>
            </Tr>
            {modelData?.cardData?.license && (
              <Tr>
                <Th>License</Th>
                <Td>{modelData.cardData.license}</Td>
              </Tr>
            )}
            {modelData?.safetensors?.parameters && (
              <>
                <Tr>
                  <Th>Parameters</Th>
                  <Td>
                    {formatModelParameters(modelData.safetensors.parameters)}
                  </Td>
                </Tr>
                <Tr>
                  <Th>
                    <Tooltip label="Minimum size of the model in memory according to an approximate calculation. Does not include memory required for inference.">
                      <span>Minimum Size</span>
                    </Tooltip>
                  </Th>
                  <Td>
                    {formatModelMinSize(modelData.safetensors.parameters)}
                  </Td>
                </Tr>
              </>
            )}
            {tags && (
              <Tr>
                <Th>Tags</Th>
                <Td>
                  <Flex gap={2} flexWrap={"wrap"}>
                    {tags.map((tag) => (
                      <Tag size="md" key={tag}>
                        <Link
                          href={`https://huggingface.co/models?other=${tag}`}
                          isExternal
                        >
                          {tag}
                        </Link>
                      </Tag>
                    ))}
                  </Flex>
                </Td>
              </Tr>
            )}
            {modelData?.config?.architectures && (
              <Tr>
                <Th>Architectures</Th>
                <Td>
                  <Flex gap={2} flexWrap={"wrap"}>
                    {modelData.config.architectures.map((architecture) => (
                      <Tag size="md" key={architecture}>
                        {architecture}
                      </Tag>
                    ))}
                  </Flex>
                </Td>
              </Tr>
            )}
            {modelData?.library_name && (
              <Tr>
                <Th>Library</Th>
                <Td>{modelData.library_name}</Td>
              </Tr>
            )}
            {modelData?.cardData?.co2_eq_emissions && (
              <Tr>
                <Th>CO2 Emissions</Th>
                <Td>
                  {formatNumber(
                    modelData.cardData.co2_eq_emissions.emissions / 1000,
                  )}{" "}
                  kg
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    );
  } else {
    return <></>;
  }
}

export function Model({ model, onModelChange, task }) {
  const {
    data: modelsData,
    error: modelsError,
    loading: modelsLoading,
  } = useData({
    url: "https://huggingface.co/api/models",
    params: {
      pipeline_tag: task,
      sort: "likes",
      limit: 1000,
      direction: -1,
    },
  });
  const { data: modelData, loading: modelLoading } = useData({
    url: `https://huggingface.co/api/models/${model}`,
    condition: model !== "",
    debounceTime: 500,
  });

  const models = modelsData ?? [];
  const knownModel = models.find((model) => model.id === model);

  if (modelsError) {
    return (
      <AlertHelper
        alertType={"error"}
        alertMsg={`Error retrieving models: ${modelsError.message}`}
        alertDismissible={false}
      />
    );
  } else if (modelsLoading) {
    return <Progress colorScheme="yellow" isIndeterminate />;
  }

  return (
    <Box>
      <ModelAutoComplete
        model={model}
        onModelChange={onModelChange}
        models={models}
      />
      <ModelDetails
        model={model}
        knownModelData={knownModel}
        modelData={modelData}
        modelLoading={modelLoading}
      />
    </Box>
  );
}
