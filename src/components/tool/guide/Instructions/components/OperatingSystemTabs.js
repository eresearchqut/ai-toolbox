import {useState} from "react";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";

function getOsIndex() {
    if (navigator.userAgent.indexOf("Win") !== -1) return 0;
    if (navigator.userAgent.indexOf("Mac") !== -1) return 1;
    if (navigator.userAgent.indexOf("Linux") !== -1) return 2;
    return 0;
}

export function OperatingSystemTabs({children}) {
    const [tabIndex, setTabIndex] = useState(getOsIndex())
    return <Tabs index={tabIndex} onChange={setTabIndex}>
        <TabList>
            <Tab>Windows</Tab>
            <Tab>macOS</Tab>
            <Tab>Linux</Tab>
        </TabList>
        <TabPanels>
            <TabPanel p={0}>
                {children[0]}
            </TabPanel>
            <TabPanel p={0}>
                {children[1]}
            </TabPanel>
            <TabPanel p={0}>
                {children[2]}
            </TabPanel>
        </TabPanels>
    </Tabs>
}