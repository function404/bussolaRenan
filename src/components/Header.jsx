import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "#606",
  },
  headerText: {
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
});

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}