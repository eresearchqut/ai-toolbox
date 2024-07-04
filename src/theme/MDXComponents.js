// Import the original mapper
import HuggingFacePipeline from "@site/src/components/tool/guide/HuggingFacePipeline/HuggingFacePipeline";
import MDXComponents from "@theme-original/MDXComponents";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  HuggingFacePipeline,
};
