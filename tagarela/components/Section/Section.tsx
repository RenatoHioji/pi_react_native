import { View, Image, Text } from 'react-native'
import {styles} from './Section_style'

type SectionProps = {
    section_name: string,
}

const Section:React.FC<SectionProps> = ({section_name}) => {
  return (
    <View style={styles.section}>
        <Image source={require('../../assets/images/plate.png')}></Image>
        <Text>{section_name}</Text>
    </View>
  )
}

export default Section