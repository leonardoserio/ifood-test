import { Svg, Line } from 'react-native-svg';

export const DashedLine = () => (
    <Svg height="2" width="100%">
        <Line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="#ddd"
            strokeWidth="1"
            strokeDasharray="4 2"
        />
    </Svg>
);
