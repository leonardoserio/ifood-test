import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={36.477}
        height={28.121}
        {...props}
    >
        <Path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M1.06 14.061h34.667m-34.667 0 13-13m-13 13 13 13"
        />
    </Svg>
)
export default SvgComponent
