import * as React from "react"
import Svg, {
    SvgProps,
    Defs,
    LinearGradient,
    Stop,
    Path,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={430} height={932} {...props}>
        <Defs>
            <LinearGradient
                id="a"
                x2={1}
                y2={0.805}
                gradientUnits="objectBoundingBox"
            >
                <Stop offset={0} stopColor="#79bbcc" />
                <Stop offset={1} stopColor="#ea102f" />
            </LinearGradient>
        </Defs>
        <Path fill="url(#a)" d="M0 0h430v932H0z" data-name="Status Bar 54pt" />
    </Svg>
)
export default SvgComponent
