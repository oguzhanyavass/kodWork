import { StyleSheet } from "react-native";

export default StyleSheet.create({
  jobCard: {
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "white",
  },
  innerContainer: {},
  jobTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  jobCompany: {
    fontSize: 18,
  },
  locationContainer: {
    backgroundColor: "#F2545B",
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  jobLocation: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  jobLevel: {
    textAlign: "right",
    left: 5,
    color: "#F2545B",
    fontWeight: "bold",
    fontSize: 18,
  },
  customButtonContainer: {
    flex: 1,
    padding:5,
  },
});
