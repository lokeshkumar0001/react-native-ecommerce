import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const PlaceholderSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={68}
    fill="none"
    {...props}
  >
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      opacity={0.6}
    >
      <Path d="M5.667 17A11.333 11.333 0 0 1 17 5.667h34A11.333 11.333 0 0 1 62.333 17v34A11.333 11.333 0 0 1 51 62.333H17A11.333 11.333 0 0 1 5.667 51V17Z" />
      <Path d="M24.083 31.167a7.083 7.083 0 1 0 0-14.167 7.083 7.083 0 0 0 0 14.167ZM41.157 35.76 17 62.334h34.377a10.957 10.957 0 0 0 10.956-10.957V51c0-1.32-.495-1.827-1.388-2.805L49.527 35.743a5.666 5.666 0 0 0-8.37.017v0Z" />
    </G>
  </Svg>
)
export default PlaceholderSvg
