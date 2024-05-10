import {Card, CardBody, CardHeader, Heading, Image, Link} from "@chakra-ui/react";
import {createContext, useContext} from "react";

export function GuideHeader({title, logo, alt, link }) {
    return <Link href={link} isExternal>
        <Image float="left" verticalAlign="middle" src={logo} alt={alt} display="inline" height="30px" />
        <Heading as='h1' size='lg' display="inline" position="relative" marginLeft="2">{title}</Heading>
    </Link>
}

const GuideContext = createContext({
    colorScheme: "teal",
    pickerTextColor: "white",
    pickerTextShadow: "1px 1px 1px black",
});
export const useGuideContext = () => useContext(GuideContext);
const GuideProvider = ({children, ...props}) => {
    return <GuideContext.Provider value={{...props}}>
        {children}
    </GuideContext.Provider>;
}

export function Guide({colorScheme, header, body}) {
    return (
        <GuideProvider colorScheme={colorScheme}>
            <Card>
                <CardHeader>
                    {header}
                </CardHeader>
                <CardBody>
                    {body}
                </CardBody>
            </Card>
        </GuideProvider>
    )
}