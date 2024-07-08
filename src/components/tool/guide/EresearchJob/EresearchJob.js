import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Link, Text } from "@chakra-ui/react";

import { useState } from "react";

import QUTLogo from "../../../../../static/img/qut.png";
import {
  Config,
  configComplete,
  ConfigGroup,
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
import ConfigDuration from "../Config/ConfigDuration";
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
          <ConfigGroup
            key={key}
            title="Service"
            description="The service to use for running the job."
            type="picker"
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
          <ConfigGroup
            key={key}
            title="Job Type"
            description="The type of PBS job to run."
            type="picker"
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
          <ConfigGroup
            key={key}
            title="Nodes"
            description="The number of nodes to use for the job."
            type="slider"
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
            alertMsg="Only use more than 1 node if you are using MPI-type software."
          />
        ),
        show: (config) =>
          config?.service === "Lyra" && config?.jobType === "Batch",
        selected: (config) => config?.nodes > 0,
      };
    },
    wallTime: () => {
      return {
        element: (key, selected) => (
          <ConfigDuration
            key={key}
            title="Walltime"
            description="The estimated total time for the job."
            selected={selected}
            onChange={onChange("wallTime")}
            value={config?.wallTime}
            inputPropsHour={{
              min: 0,
              step: 1,
            }}
            inputPropsMinute={{
              min: config?.wallTime?.hour < 1 ? 1 : 0,
              max: 59,
              step: 1,
            }}
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
      const customAlertMsg = () => {
        return (
          <Text mb={0}>
            IPUs are currently unavailable. Please
            <Link
              color="teal.500"
              href="https://eresearchqut.atlassian.net/servicedesk/customer/portals"
              isExternal
            >
              {" "}
              contact eResearch if interested
              <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </Text>
        );
      };
      return {
        element: (key, selected) => (
          <ConfigGroup
            key={key}
            title="Hardware"
            description="The hardware to use for running the job."
            type="picker"
            selected={selected}
            inputProps={{
              choices: hardware,
              value: config?.hardware,
              onChange: onChange("hardware"),
            }}
            showAlert={config?.hardware === "IPU"}
            alertType="warning"
            alertMsg={customAlertMsg}
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

export default function EresearchJob({ showHeader = true }) {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

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
