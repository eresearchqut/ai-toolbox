import { Heading } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import QUTLogo from "../../../../../static/img/qut.png";
import TextWithLink from "../../../navigation/TextWithLink";
import {
  Config,
  configComplete,
  DEFAULT_CONFIG,
  getCpuCores,
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

const getConfigGroups = (config, onConfigChange = () => {}) => {
  const onChange = (key) => (value) =>
    onConfigChange({ ...config, [key]: value });

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
        ["Interactive", "Run the job in an interactive shell"],
        ["Batch", "Submit the job to the queue to run in the background"],
      ];
      return {
        element: (key, selected) => (
          <ConfigPicker
            key={key}
            title="Job Type"
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
          config?.service === "Lyra" && config?.jobType === "Batch",
        selected: (config) => config?.nodes > 0,
      };
    },
    isArrayJob: () => {
      const jobInstances = [
        ["Standalone", "Run a single instance of the job"],
        ["Array", "Run many instances of the job in parallel"],
      ];
      return {
        element: (key, selected) => (
          <ConfigPicker
            key={key}
            title="Job Instances"
            description="Run a single instance, or many instances of the job."
            selected={selected}
            inputProps={{
              choices: jobInstances,
              value: config?.isArrayJob,
              onChange: onChange("isArrayJob"),
            }}
          />
        ),
        show: (config) =>
          config?.service === "Lyra" && config?.jobType === "Batch",
        selected: (config) => isValidChoice(jobInstances, config?.isArrayJob),
      };
    },
    jobInstances: () => {
      return {
        element: (key, selected) => (
          <ConfigMultipleNumbers
            key={key}
            title="Instances Config"
            description="Array job settings"
            selected={selected}
            value={config?.jobInstances}
            onChange={onChange("jobInstances")}
            inputProps={{
              min: 0,
            }}
          />
        ),
        show: (config) =>
          config?.service === "Lyra" &&
          config?.jobType === "Batch" &&
          config?.isArrayJob === "Array",
        selected: (config) =>
          config?.jobInstances.step >= 1 &&
          config?.jobInstances.upperBound >= config?.jobInstances.firstIndex &&
          config?.jobInstances.upperBound > config?.jobInstances.step &&
          config?.jobInstances.upperBound >=
            config?.jobInstances.firstIndex + config?.jobInstances.step,
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
                min: config?.wallTime?.hour < 1 ? 1 : 0,
                max: 59,
                step: 1,
              },
            ]}
          />
        ),
        show: (config) =>
          config?.service === "Lyra" && config?.jobType === "Batch",
        selected: (config) =>
          config?.wallTime.hour > 0 || config?.wallTime.minute > 0,
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
                  text: "contact eResearch if interested",
                  isExternal: true,
                }}
                hasExternalIcon={true}
                textAfterLink={"."}
              />
            }
          />
        ),
        show: (config) => config?.service,
        selected: (config) => isValidChoice(hardware, config?.hardware),
      };
    },
    cpuVendor: getCpuVendor(config, onChange),
    cpuModel: getCpuModel(config, onChange),
    cpuCores: getCpuCores(config, onChange),
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
