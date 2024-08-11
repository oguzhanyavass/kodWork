import React from "react";
import LottieView from "lottie-react-native";

const ErrorAnimation = () => {
  return (
    <LottieView
      source={require("../../assest/error_animation.json")}
      style={{ height: "100%" }}
      autoPlay
      loop
      resizeMode="center"
    />
  );
};

export default ErrorAnimation;
