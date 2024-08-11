import React from "react";
import LottieView from "lottie-react-native";

function LoadingAnimation() {
  return (
    <LottieView source={require("../../assest/loading_animation.json")} style={{ height: "100%" }} autoPlay loop resizeMode='center' />
  );
}

export default LoadingAnimation;
