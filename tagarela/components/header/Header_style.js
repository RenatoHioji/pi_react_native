import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    header: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      alignSelf: 'flex-start',
      height: 140,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      backgroundColor: '#fff',
      color: '#fff'
  
    },
    note: {
      width: '40%',
      height: '32%',
      backgroundColor: 'green',
      borderRadius: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: -20,
      position: 'relative'
    },
    page_name: {
      color: '#fff',
      fontSize: 24,
    }
  })