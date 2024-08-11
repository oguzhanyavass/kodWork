import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    padding: 5,
  },
  warningContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  warning: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#F2545B",
  },
});

export default styles;
