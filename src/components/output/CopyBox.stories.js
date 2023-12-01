import CopyBox from './CopyBox'

export default {
    title: 'Outputs/CopyBox',
    component: CopyBox,
}

export const Empty = {
    args: {
        children: '',
    }
}

export const SmallText = {
    args: {
        children: 'This is some text',
    }
}

export const LongText = {
    args: {
        children: 'This is some text that is really long and should wrap around to the next line. This is some text that is really long and should wrap around to the next line. This is some text that is really long and should wrap around to the next line.',
    }
}

export const LongWords = {
    args: {
        children: 'Thisisareallylongwordthatshouldnotwraparoundtothenextlinebutshouldinsteadbreakatthelastpossiblemoment and then continue on the next line. Thisisareallylongwordthatshouldnotwraparoundtothenextlinebutshouldinsteadbreakatthelastpossiblemoment and then continue on the next line. Thisisareallylongwordthatshouldnotwraparoundtothenextlinebutshouldinsteadbreakatthelastpossiblemoment and then continue on the next line.',
    }
}