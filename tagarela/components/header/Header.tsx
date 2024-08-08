import React from 'react'
import { View, Text } from 'react-native'
import {styles} from './Header_style'

type HeaderProps = {
    page_name: string,
}

const Header:React.FC<HeaderProps> = ({page_name}) => {
  return (
    <View style={styles.header}>
        <Text>TAGARELA</Text>
        <View style={styles.note}>
          <Text style={styles.page_name}>{page_name}</Text>
        </View>
      </View>
  )
}

export default Header