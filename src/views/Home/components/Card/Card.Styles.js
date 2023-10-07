import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 70,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
    alignSelf: "center", 
  },
  rowCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  img: {
    textAlign: "center",
  },
});

export { styles };
