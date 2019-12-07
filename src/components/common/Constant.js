import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const Constanst = {
  Dimension: {
    ScreenWidth(percent = 1) {
      return width * percent;
    },
    ScreenHeight(percent = 1) {
      return height * percent;
    }
  },
  URL: "https://mehrad.liara.run"
};
export default Constanst;
