import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, SimpleGrid } from "@chakra-ui/react";

export default function ChoiceScreen({
  choices,
  page,
  showPage = false,
  onPageChange = (_show, _page) => {},
  clickable = false,
}) {
  if (showPage) {
    return (
      <Box>
        {page}
        <Button
          leftIcon={<ArrowBackIcon />}
          position="absolute"
          right="4"
          top="4"
          size="sm"
          onClick={() => onPageChange(false, undefined)}
        >
          Back
        </Button>
      </Box>
    );
  }

  const columns = choices.length === 1 ? 1 : choices.length === 3 ? 3 : 2;

  return (
    <SimpleGrid columns={columns} spacing={2}>
      {choices.map((child, idx) => (
        <Box
          key={idx}
          onClick={clickable ? () => onPageChange(true, idx) : null}
          cursor={clickable ? "pointer" : "auto"}
        >
          <Card height="100%">
            <CardBody>{child}</CardBody>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
}
