// TODO: Different operating systems
import { Code } from "@chakra-ui/react";

import CommandBox from "../../../output/CommandBox";
import PreformattedBox from "../../../output/PreformattedBox";
import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";

export function RunInstructions({ service, tool, task, model, port }) {
  const isWorkstation = ["rVDI", "Local"].includes(service);

  return (
    <>
      <InstructionHeading>Run the gradio server</InstructionHeading>
      {tool === "CLI" && (
        <>
          <InstructionText>Start the gradio server:</InstructionText>
          <CommandBox
            command={`gradio pipeline ${task} --model=${model} --server-name="0.0.0.0" --server-port=${port} --device-map="auto"`}
          />
        </>
      )}
      {tool === "Script" && (
        <>
          <InstructionText>
            Save the following to a file named <Code>hf_pipeline.py</Code>
          </InstructionText>
          <PreformattedBox>
            {`import gradio
import transformers
import sys

TASK = "${task}"
MODEL = "${model}"
PORT = int(sys.argv[1])

print(f"Starting: {TASK=} {MODEL=} {PORT=}", file=sys.stderr)
print("Please wait while the model loads into memory...", file=sys.stderr)

pipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")
interface = gradio.Interface.from_pipeline(pipeline)
interface.launch(server_name="0.0.0.0", server_port=PORT)
`}
          </PreformattedBox>
          <InstructionText>Run the script:</InstructionText>
          <CommandBox command={`python hf_pipeline.py ${port}`} />
        </>
      )}
      {tool === "Notebook" && (
        <>
          {isWorkstation && (
            <>
              <InstructionText>
                Run the following command to start the server:
              </InstructionText>
              <CommandBox command={`python -m jupyterlab`} />
              <InstructionText>
                Open the link to the jupyter server in your browser, and create
                a new notebook.
              </InstructionText>
            </>
          )}
          <InstructionText>
            Execute the following code in the notebook:
          </InstructionText>
          <PreformattedBox>
            {`import gradio
import transformers

TASK = "${task}"
MODEL = "${model}"
PORT = ${port}

pipeline = transformers.pipeline(TASK, model=MODEL, device_map="auto")
interface = gradio.Interface.from_pipeline(pipeline)
interface.launch(server_name="0.0.0.0", server_port=PORT)
`}
          </PreformattedBox>
        </>
      )}
    </>
  );
}
