import * as React from "react"
import Svg, { SvgProps, G, Circle, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={23.902}
        height={23.902}
        {...props}
    >
        <G
            fill="none"
            stroke="#e9112f"
            strokeWidth={1.5}
            transform="translate(-1.25 -1.25)"
        >
            <Circle
                cx={3.5}
                cy={3.5}
                r={3.5}
                data-name="Elipse 2"
                transform="translate(10 6)"
            />
            <Path
                strokeLinecap="round"
                d="M19.884 22.161c-.178-3.239-1.17-5.6-6.686-5.6s-6.508 2.362-6.686 5.6"
                data-name="Caminho 37"
            />
            <Path
                strokeLinecap="round"
                d="M7.6 3.5a11.2 11.2 0 1 1-4.1 4.1"
                data-name="Caminho 38"
            />
        </G>
    </Svg>
)
export default SvgComponent
