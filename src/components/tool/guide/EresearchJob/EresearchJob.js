import { Heading } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import QUTLogo from "../../../../../static/img/qut.png";
import TextWithLink from "../../../navigation/TextWithLink";
import {
  Config,
  configComplete,
  DEFAULT_CONFIG,
  getCpus,
  getCpuModel,
  getCpuVendor,
  getGpuModel,
  getGpuModules,
  getGpuVendor,
  getJobProfile,
  getRam,
  isLyra,
  isValidChoice,
} from "../Config";
import ConfigMultipleNumbers from "../Config/ConfigMultipleNumbers";
import ConfigPicker from "../Config/ConfigPicker";
import ConfigSlider from "../Config/ConfigSlider";
import { Guide, GuideHeader } from "../Guide";
import { EresearchInstructions } from "./EresearchInstructions";

const summarizeIndexes = (start, upper, step, max = 6) => {
  const indexes = [];
  const count = Math.floor((upper - start + step) / step);
  const half = Math.floor(max / 2);

  if (count <= max) {
    for (let i = 0; i < count; i++) {
      indexes.push(start + i * step);
    }
  } else {
    for (let i = 0; i < half; i++) {
      indexes.push(start + i * step);
    }
    indexes.push("...");
    const lastStart = start + (count - half) * step;
    for (let i = 0; i < half; i++) {
      indexes.push(lastStart + i * step);
    }
  }

  return indexes;
};

const getConfigGroups = (config, onConfigChange = () => {}) => {
  const onChange = (key) => (value) =>
    onConfigChange((prev) => ({ ...prev, [key]: value }));

  return {
    service: () => {
      const services = [
        ["Lyra", "QUT's HPC cluster"],
        ["JupyterHub", "Jupyter notebooks on QUT's HPC cluster"],
        ["rVDI", "QUT's Research Virtual Desktop Infrastructure"],
      ];
      return {
        element: (key, selected) => (
          <ConfigPicker
            key={key}
            title="Service"
            description="The service to use for running the job."
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
    jobType: () => {
      const jobTypes = [
        ["Batch", "Submit the job to the queue to run in the background"],
        ["Interactive", "Run the job in an interactive shell"],
      ];
      return {
        element: (key, selected) => (
          <ConfigPicker
            key={key}
            title="Job type"
            description="The type of PBS job to run."
            selected={selected}
            inputProps={{
              choices: jobTypes,
              value: config?.jobType,
              onChange: onChange("jobType"),
            }}
          />
        ),
        show: (config) => config?.service === "Lyra",
        selected: (config) => isValidChoice(jobTypes, config?.jobType),
      };
    },
    resources: () => {
      return {
        element: (key, selected) => (
          <ConfigPicker
            key={key}
            title="Resources"
            description="The hardware resources available on the nodes used by the job."
            selected={selected}
            inputProps={{
              choices: [
                [
                  "Automatic",
                  "Run the job without specifying hardware resources",
                ],
                [
                  "Custom",
                  "Specify the hardware resources used by the nodes running the job",
                ],
              ],
              value: config?.resources,
              onChange: onChange("resources"),
            }}
            showAlert={config?.resources === "Custom"}
            alertType="warning"
            alertMsg={
              "Jobs with custom resources may not run, and are not recommended for general use."
            }
          />
        ),
        show: (config) => config?.service === "Lyra",
        selected: (config) =>
          isValidChoice(["Automatic", "Custom"], config?.resources),
      };
    },
    nodes: () => {
      return {
        element: (key, selected) => (
          <ConfigSlider
            key={key}
            title="Nodes"
            description="The number of nodes to use for the job."
            selected={selected}
            inputProps={{
              label: config?.nodes > 1 ? "nodes" : "node",
              value: config?.nodes,
              min: 1,
              max: 100,
              step: 1,
              onChange: onChange("nodes"),
            }}
            showAlert={config?.nodes > 1}
            alertType="warning"
            alertMsg={
              <TextWithLink
                textBeforeLink={"Only use more than 1 node if you are using "}
                link={{
                  href: "https://hpc-wiki.info/hpc/MPI",
                  text: "MPI",
                  isExternal: true,
                }}
                hasExternalIcon={true}
                textAfterLink={"-type software."}
              />
            }
          />
        ),
        show: (config) =>
          config?.service === "Lyra" &&
          config?.resources === "Custom" &&
          config?.jobType === "Batch",
        selected: (config) => config?.nodes > 0,
      };
    },
    jobInstanceType: () => {
      const arrayConfig = [
        ["Standalone", "Run a single instance of the job"],
        ["Array", "Run many instances of the job"],
      ];
      return {
        element: (key, selected) => (
          <ConfigPicker
            key={key}
            title="Job instances"
            description="Run a single instance, or many instances of the job."
            selected={selected}
            inputProps={{
              choices: arrayConfig,
              value: config?.jobInstanceType,
              onChange: onChange("jobInstanceType"),
            }}
          />
        ),
        show: (config) =>
          config?.service === "Lyra" && config?.jobType === "Batch",
        selected: (config) =>
          isValidChoice(arrayConfig, config?.jobInstanceType),
      };
    },
    arrayConfig: () => {
      const indexes = summarizeIndexes(
        config?.arrayConfig?.firstIndex,
        config?.arrayConfig?.upperBound,
        config?.arrayConfig?.step,
      );
      return {
        element: (key, selected) => (
          <ConfigMultipleNumbers
            key={key}
            title="Array range"
            description="Array sub-job range indexes. The first index is the starting index, the upper bound is the last index, and the step is the increment between indexes."
            selected={selected}
            value={config?.arrayConfig}
            onChange={onChange("arrayConfig")}
            inputProps={{
              min: 0,
            }}
            showAlert={selected}
            alertType="info"
            alertMsg={`Indexes: ${indexes.join(", ")}`}
          />
        ),
        show: (config) =>
          config?.service === "Lyra" &&
          config?.jobType === "Batch" &&
          config?.jobInstanceType === "Array",
        selected: (config) =>
          config?.arrayConfig.step >= 1 &&
          config?.arrayConfig.upperBound >= config?.arrayConfig.firstIndex &&
          config?.arrayConfig.upperBound > config?.arrayConfig.step &&
          config?.arrayConfig.upperBound >=
            config?.arrayConfig.firstIndex + config?.arrayConfig.step,
      };
    },
    wallTime: () => {
      return {
        element: (key, selected) => (
          <ConfigMultipleNumbers
            key={key}
            title="Walltime"
            description="The estimated total time for the job."
            selected={selected}
            onChange={onChange("wallTime")}
            value={config?.wallTime}
            inputProps={[
              {
                min: 0,
                step: 1,
              },
              {
                min: config?.wallTime?.hours < 1 ? 1 : 0,
                max: 59,
                step: 1,
              },
            ]}
          />
        ),
        show: (config) =>
          config?.service === "Lyra" && config?.jobType === "Batch",
        selected: (config) =>
          config?.wallTime.hours > 0 || config?.wallTime.minutes > 0,
      };
    },
    hardware: () => {
      let hardware;
      if (isLyra(config)) {
        hardware = [
          ["CPU", "Un-accelerated. Quick to queue, slow to run."],
          ["GPU", "Accelerated GPU"],
          ["IPU", "Accelerated IPU from Graphcore"],
        ];
      } else {
        hardware = [
          ["CPU", "Un-accelerated. Quick to queue, slow to run."],
          ["GPU", "Accelerated GPU"],
        ];
      }
      return {
        element: (key, selected) => (
          <ConfigPicker
            key={key}
            title="Hardware"
            description="The hardware to use for running the job."
            selected={selected}
            inputProps={{
              choices: hardware,
              value: config?.hardware,
              onChange: onChange("hardware"),
            }}
            showAlert={config?.hardware === "IPU"}
            alertType="warning"
            alertMsg={
              <TextWithLink
                textBeforeLink={"IPUs are currently unavailable. Please "}
                link={{
                  href: "https://eresearchqut.atlassian.net/servicedesk/customer/portals",
                  text: "contact eResearch",
                  isExternal: true,
                }}
                hasExternalIcon={true}
                textAfterLink={" if interested."}
              />
            }
          />
        ),
        show: (config) =>
          config?.service === "Lyra"
            ? config?.resources === "Custom"
            : config?.service,
        selected: (config) => isValidChoice(["CPU", "GPU"], config?.hardware),
      };
    },
    cpuVendor: getCpuVendor(config, onChange),
    cpuModel: getCpuModel(config, onChange),
    cpus: getCpus(config, onChange),
    ram: getRam(config, onChange),
    gpuVendor: getGpuVendor(config, onChange),
    gpuModel: getGpuModel(config, onChange),
    gpuModules: getGpuModules(config, onChange),
    jobProfile: getJobProfile(config, onChange),
  };
};

export default function EresearchJob({
  initialConfig = DEFAULT_CONFIG,
  showHeader = true,
}) {
  const [config, setConfig] = useState(initialConfig);

  useEffect(() => {
    setConfig(initialConfig);
  }, [initialConfig]);

  const isConfigComplete = configComplete(config, getConfigGroups);

  const header = showHeader ? (
    <GuideHeader
      title="eResearch Job"
      subtitle="Use the form below to configure a workload that runs on the eResearch infrastructure at QUT."
      logo={QUTLogo}
      alt="QUT logo"
      link="https://www.qut.edu.au/research/eresearch"
    />
  ) : null;

  const body = (
    <>
      <Heading as="h2" size="md" my={2}>
        Configuration
      </Heading>
      <Config
        config={config}
        onConfigChange={setConfig}
        getConfigGroups={getConfigGroups}
      />
      {isConfigComplete && (
        <>
          <Heading as="h2" size="md" my={2}>
            Instructions
          </Heading>
          <EresearchInstructions config={config} />
        </>
      )}
    </>
  );

  return <Guide colorScheme="qut" header={header} body={body} />;
}
