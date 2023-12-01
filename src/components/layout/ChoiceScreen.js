import {Box, Button, Card, CardBody, SimpleGrid} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {ArrowBackIcon} from "@chakra-ui/icons";

export default function ChoiceScreen({choices, page, showPage = false, onPageChange, clickable = false}) {
    const [pageShown, setPageShown] = useState(showPage);

    useEffect(() => {
        setPageShown(showPage);
    }, [showPage]);

    const onShowPage = (show, page) => {
        if (onPageChange) onPageChange(show, page)
        setPageShown(show);
    }

    if (pageShown) {
        return <Box>
            {page}
            <Button
                leftIcon={<ArrowBackIcon/>}
                position="absolute"
                right="4"
                top="4"
                size="sm"
                onClick={() => onShowPage(false)}
            >
                Back
            </Button>
        </Box>;
    }

    const columns = choices.length === 1 ? 1 : choices.length === 3 ? 3 : 2;

    return (
        <SimpleGrid columns={columns} spacing={2} >
            {choices.map((child, idx) => (
                <Box key={idx} onClick={clickable ? () => onShowPage(true, idx) : null} cursor={clickable ? "pointer" : "auto"}>
                    <Card height="100%">
                        <CardBody>
                            {child}
                        </CardBody>
                    </Card>
                </Box>
            ))}
        </SimpleGrid>
    );
}