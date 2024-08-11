import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
  },
  button: {
    flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2545B",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
    textAlign: "center",
  },
});
