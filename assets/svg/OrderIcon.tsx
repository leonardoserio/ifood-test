import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={23.86}
        height={26.344}
        {...props}
    >
        <G fill="none" stroke={props?.color || "#e9112f"} strokeLinecap="round" strokeWidth={1.5}>
            <Path d="M6.961 13.172h1.242m8.7 0H11.93" data-name="Caminho 32" />
            <Path d="M16.899 8.203h-1.238m-3.731 0H6.961" data-name="Caminho 33" />
            <Path d="M6.961 18.141h6.211" data-name="Caminho 34" />
            <Path
                d="M.75 15.656v-4.968c0-4.685 0-7.027 1.455-8.483S6.003.75 10.688.75h2.484c4.685 0 7.027 0 8.482 1.455a5.372 5.372 0 0 1 1.329 3.513m.126 4.969v4.969c0 4.685 0 7.027-1.455 8.482s-3.8 1.455-8.482 1.455h-2.484c-4.685 0-7.027 0-8.482-1.455a5.372 5.372 0 0 1-1.329-3.513"
                data-name="Caminho 35"
            />
        </G>
    </Svg>
)
export default SvgComponent
