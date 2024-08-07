import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'flex-start',
    height: 150,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#000',
    color: '#fff'
  },
  note: {
    width: '40%',
    height: '32%',
    backgroundColor: 'green',
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  page_name: {
    color: '#fff',
    fontSize: 24,
  }
})

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View style={styles.header}>
        <View style={styles.note}>
          <Text style={styles.page_name}>ÍNICIO</Text>
        </View>
      </View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
