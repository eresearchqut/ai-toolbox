import { Grid } from "@chakra-ui/react";

import TextWithLink from "../../navigation/TextWithLink";
import ConfigPicker from "./Config/ConfigPicker";
import ConfigSlider from "./Config/ConfigSlider";

export const DEFAULT_CONFIG = {
  nodes: 1,
  cpus: 4,
  ram: 32,
  gpuModules: 1,
  wallTime: { hours: 1, minutes: 0 },
  resources: "Automatic",
  jobType: "Batch",
  jobInstanceType: "Standalone",
  arrayConfig: { firstIndex: 1, upperBound: 10, step: 1 },
};

export const isValidChoice = (choices, value) => {
  if (choices.length === 0) return false;
  if (Array.isArray(choices[0])) {
    return choices.map((c) => c[0]).includes(value);
  } else {
    return choices.includes(value);
  }
};

export const isLyra = (config) => config?.service === "Lyra";
export const isCustom = (config) => config?.resources === "Custom";
export const isWorkstation = (config) =>
  ["rVDI", "Local"].includes(config?.service);
export const isGPU = (config) => config?.hardware === "GPU";
export const getOs = (config, onChange) => () => {
  let operatingSystems;
  if (config?.service === "rVDI") {
    operatingSystems = ["Linux", "Windows"];
  } else if (config?.service === "Local") {
    operatingSystems = ["Linux", "macOS", "Windows"];
  } else {
    operatingSystems = ["Linux"];
  }

  return {
    element: (key, selected) => (
      <ConfigPicker
        key={key}
        title="OS"
        description="The operating system to use for running the model."
        selected={selected}
        inputProps={{
          choices: operatingSystems,
          value: config?.os,
          onChange: onChange("os"),
        }}
      />
    ),
    show: (config) => isWorkstation(config),
    selected: (config) => isValidChoice(operatingSystems, config?.os),
  };
};

export const getCpuVendor = (config, onChange) => () => {
  const cpuVendors = ["Any", "AMD", "Intel"];
  return {
    element: (key, selected) => (
      <ConfigPicker
        key={key}
        title="CPU vendor"
        selected={selected}
        inputProps={{
          choices: cpuVendors,
          value: config?.cpuVendor,
          onChange: onChange("cpuVendor"),
        }}
      />
    ),
    show: (config) => isLyra(config) && isCustom(config),
    selected: (config) => isValidChoice(cpuVendors, config?.cpuVendor),
  };
};

export const getCpuModel = (config, onChange) => () => {
  let cpuModels = [];
  if (config?.cpuVendor === "AMD") {
    cpuModels = ["Any", "7702", "7713"];
  } else if (config?.cpuVendor === "Intel") {
    cpuModels = ["Any", "6140", "6248", "8260", "E7-8890v4"];
  }

  let alertMsg;
  if (config?.cpuModel === "E7-8890v4") {
    alertMsg =
      "The E7-8890v4 CPU should only be used for jobs with more than 512 GB of ram.";
  } else if (config?.cpuModel === "8260") {
    alertMsg = "The 8260 CPU is reserved for the microbiome group.";
  } else if (config?.cpuModel === "6248") {
    alertMsg = (
      <TextWithLink
        textBeforeLink={"6248 CPUs are currently unavailable. Please "}
        link={{
          href: "https://eresearchqut.atlassian.net/servicedesk/customer/portals",
          text: "contact eResearch",
          isExternal: true,
        }}
        hasExternalIcon={true}
        textAfterLink={" if interested."}
      />
    );
  }

  return {
    element: (key, selected) => (
      <ConfigPicker
        key={key}
        title="CPU model"
        selected={selected}
        inputProps={{
          choices: cpuModels,
          value: config?.cpuModel,
          onChange: onChange("cpuModel"),
        }}
        showAlert={["E7-8890v4", "8260"].includes(config?.cpuModel)}
        alertType={"warning"}
        alertMsg={alertMsg}
      />
    ),
    show: (config) =>
      isLyra(config) &&
      isCustom(config) &&
      config?.cpuVendor &&
      config.cpuVendor !== "Any",
    selected: (config) => isValidChoice(cpuModels, config?.cpuModel),
  };
};

export const getCpus = (config, onChange) => () => {
  let cpus;
  if (config?.cpuModel === "Any") {
    cpus = 128;
  } else if (config?.cpuModel === "7702") {
    cpus = 128;
  } else if (config?.cpuModel === "7713") {
    cpus = 128;
  } else if (config?.cpuModel === "6140") {
    cpus = 36;
  } else if (config?.cpuModel === "6248") {
    cpus = 40;
  } else if (config?.cpuModel === "8260") {
    cpus = 48;
  } else if (config?.cpuModel === "E7-8890v4") {
    cpus = 96;
  } else {
    cpus = 128;
  }

  return {
    element: (key, selected) => (
      <ConfigSlider
        key={key}
        title="CPU"
        selected={selected}
        inputProps={{
          value: config?.cpus,
          label: config?.cpus > 1 ? "cpus" : "cpu",
          min: 1,
          max: cpus,
          step: 1,
          onChange: (value) => {
            onChange("cpus")(value);
            onChange("ram")(value * 8);
          },
        }}
      />
    ),
    show: (config) => isLyra(config),
    selected: () => true,
  };
};

export const getRam = (config, onChange) => () => {
  let ram;
  if (config?.cpuModel === "Any") {
    ram = 1006;
  } else if (config?.cpuModel === "7702") {
    ram = 1006;
  } else if (config?.cpuModel === "7713") {
    ram = 1006;
  } else if (config?.cpuModel === "6140") {
    ram = 186;
  } else if (config?.cpuModel === "6248") {
    ram = 186;
  } else if (config?.cpuModel === "8260") {
    ram = 186;
  } else if (config?.cpuModel === "E7-8890v4") {
    ram = 5794;
  } else {
    ram = 1006;
  }

  return {
    element: (key, selected) => (
      <ConfigSlider
        key={key}
        title="RAM"
        selected={selected}
        inputProps={{
          value: config?.ram,
          label: "GB",
          min: 8,
          max: ram,
          step: 8,
          onChange: onChange("ram"),
        }}
        showAlert={config?.ram !== config?.cpus * 8}
        alertType={"warning"}
        alertMsg={"The recommended RAM is 8GB per CPU."}
      />
    ),
    show: (config) => isLyra(config),
    selected: () => true,
  };
};

export const getJobProfile = (config, onChange) => () => {
  let profiles = [];
  if (config?.hardware === "CPU") {
    profiles = [
      "1 core, 8 GB, 8 hours",
      "4 cores, 32 GB, 8 hours",
      "8 cores, 64 GB, 4 hours",
      "16 cores, 128GB, 4 hours",
    ];
  } else if (config?.hardware === "GPU") {
    profiles = [
      "4 cores, 32 GB, T4 GPU, 4 hours",
      "8 cores, 64 GB, T4 GPU, 2 hours",
    ];
  }
  return {
    element: (key, selected) => (
      <ConfigPicker
        key={key}
        title="Job Profile"
        selected={selected}
        inputProps={{
          choices: profiles,
          value: config?.jobProfile,
          onChange: onChange("jobProfile"),
        }}
      />
    ),
    show: (config) => config?.service === "JupyterHub" && config?.hardware,
    selected: (config) => isValidChoice(profiles, config?.jobProfile),
  };
};

export const getGpuVendor = (config, onChange) => () => {
  const gpuVendors = ["Any", "NVIDIA", "AMD"];

  return {
    element: (key, selected) => {
      return (
        <ConfigPicker
          key={key}
          title="GPU vendor"
          selected={selected}
          inputProps={{
            choices: gpuVendors,
            value: config?.gpuVendor,
            onChange: onChange("gpuVendor"),
          }}
          showAlert={config?.gpuVendor === "AMD"}
          alertType={"warning"}
          alertMsg={
            <TextWithLink
              textBeforeLink={"AMD GPUs are currently unavailable. Please "}
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
      );
    },
    show: (config) => isLyra(config) && isCustom(config) && isGPU(config),
    selected: (config) => isValidChoice(gpuVendors, config?.gpuVendor),
  };
};

export const getGpuModel = (config, onChange) => () => {
  let gpuModels = [];
  if (config?.gpuVendor === "NVIDIA") {
    gpuModels = [
      ["P100", "TESLA P100-PCIE-16GB"],
      ["V100", "TESLA V100-PCIE-32GB"],
      ["A100", "NVIDIA A100-SXM4-40GB"],
    ];
  } else if (config?.gpuVendor === "AMD") {
    gpuModels = [];
  }
  return {
    element: (key, selected) => (
      <ConfigPicker
        key={key}
        title="GPU model"
        selected={selected}
        inputProps={{
          choices: gpuModels,
          value: config?.gpuModel,
          onChange: onChange("gpuModel"),
        }}
        showAlert={config?.gpuModel === "V100"}
        alertType={"warning"}
        alertMsg={"The V100 GPU is reserved for the microbiome group."}
      />
    ),
    show: (config) =>
      isLyra(config) &&
      isCustom(config) &&
      config?.hardware === "GPU" &&
      config?.gpuVendor &&
      config.gpuVendor !== "Any",
    selected: (config) => isValidChoice(gpuModels, config?.gpuModel),
  };
};

export const getGpuModules = (config, onChange) => () => {
  return {
    element: (key, selected) => (
      <ConfigSlider
        key={key}
        title="GPU"
        selected={selected}
        inputProps={{
          value: config?.gpuModules,
          label: config?.gpuModules > 1 ? "GPUs" : "GPU",
          min: 1,
          max: 8,
          step: 1,
          onChange: onChange("gpuModules"),
        }}
        showAlert={config?.gpuModules > 1}
        alertType={"warning"}
        alertMsg={
          "Only use more than 1 GPU if your job is capable of utilising multiple GPUs simultaneously."
        }
      />
    ),
    show: (config) => isLyra(config) && isCustom(config) && isGPU(config),
    selected: () => true,
  };
};

export const getEnvironment = (config, onChange) => () => {
  let environments = [];
  if (config?.service === "JupyterHub") {
    environments = [["Conda", "Conda package manager"]];
  } else if (
    isWorkstation(config) &&
    ["macOS", "Windows"].includes(config?.os)
  ) {
    environments = [
      ["Conda", "Conda package manager"],
      ["venv", "Python virtual environments"],
    ];
  } else {
    environments = [
      ["Singularity", "Singularity / Singularity container"],
      ["Conda", "Conda package manager"],
      ["venv", "Python virtual environments"],
    ];
  }

  return {
    element: (key, selected) => (
      <ConfigPicker
        key={key}
        title="Environment"
        description="The Python package management system."
        selected={selected}
        inputProps={{
          choices: environments,
          value: config?.environment,
          onChange: onChange("environment"),
        }}
      />
    ),
    show: (config) => config?.service,
    selected: (config) => isValidChoice(environments, config?.environment),
  };
};

export const getTool = (config, onChange) => () => {
  let tools = [];
  if (config?.service === "Lyra") {
    tools = [
      ["CLI", "Use Gradio's Command-Line-Interface"],
      ["Script", "Run a generated Python script"],
    ];
  } else {
    tools = [
      ["CLI", "Use Gradio's Command-Line-Interface"],
      ["Script", "Run a generated Python script"],
      ["Notebook", "Run a generated Jupyter notebook"],
    ];
  }

  return {
    element: (key, selected) => (
      <ConfigPicker
        key={key}
        title="Tool"
        description="The interface to use for running the model."
        selected={selected}
        inputProps={{
          choices: tools,
          value: config?.tool,
          onChange: onChange("tool"),
        }}
      />
    ),
    show: (config) => config?.service,
    selected: (config) => isValidChoice(tools, config?.tool),
  };
};

export function Config({ config, onConfigChange, getConfigGroups }) {
  return (
    <Grid templateColumns="auto 1fr" gridColumnGap={2} alignItems="center">
      {Object.entries(getConfigGroups(config, onConfigChange))
        .map(([key, configGroup]) => [key, configGroup()])
        .filter(([_, configGroup]) => configGroup.show(config))
        .map(([key, configGroup]) =>
          configGroup.element(key, configGroup.selected(config)),
        )}
    </Grid>
  );
}

export const configComplete = (config, getConfigGroups) =>
  Object.values(getConfigGroups(config))
    .map((g) => g())
    .filter((g) => g.show(config))
    .every((g) => g.selected(config));
