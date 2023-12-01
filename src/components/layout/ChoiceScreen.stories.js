import ChoiceScreen from "./ChoiceScreen";
import {Center} from "@chakra-ui/react";

export default {
    title: 'Layouts/ChoiceScreen',
    component: ChoiceScreen,
}

export const Empty = {
    args: {
        clickable: true,
        choices: [],
        pages: [],
    }
}

export const Single = {
    args: {
        clickable: true,
        choices: [
            <Center bg='magenta' height="100px">First</Center>,
        ],
        page: <Center bg='red' height="100px">Page contents</Center>,
    }

}

export const Binary = {
    args: {
        clickable: true,
        choices: [
            <Center bg='magenta' height="100px">First</Center>,
            <Center bg='cyan' height="100px">Second</Center>,
        ],
        page: <Center bg='red' height="100px">Page contents</Center>,
    }
}

export const Ternary = {
    args: {
        clickable: true,
        choices: [
            <Center bg='magenta' height="100px">First</Center>,
            <Center bg='cyan' height="100px">Second</Center>,
            <Center bg='green' height="100px">Third</Center>,
        ],
        page: <Center bg='red' height="100px">Page contents</Center>,
    }
}

export const Quaternary = {
    args: {
        clickable: true,
        choices: [
            <Center bg='magenta' height="100px">First</Center>,
            <Center bg='cyan' height="100px">Second</Center>,
            <Center bg='green' height="100px">Third</Center>,
            <Center bg='yellow' height="100px">Fourth</Center>,
        ],
        page: <Center bg='red' height="100px">Page contents</Center>,
    }
}

export const Quintenary = {
    args: {
        clickable: true,
        choices: [
            <Center bg='magenta' height="100px">First</Center>,
            <Center bg='cyan' height="100px">Second</Center>,
            <Center bg='green' height="100px">Third</Center>,
            <Center bg='yellow' height="100px">Fourth</Center>,
            <Center bg='blue' height="100px">Fifth</Center>,
        ],
        page: <Center bg='red' height="100px">Page contents</Center>,
    }
}