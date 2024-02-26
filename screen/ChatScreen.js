
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
function ChatScreen() {
  const navigation = useNavigation();
    const handlePressBack = () => {
      navigation.navigate('Home'); 
    };
  return (
    
    <View style={[styles.container]}>
        <View style={styles.head}>
            <TouchableOpacity onPress={handlePressBack}>
              <Image source={require('../img/back-icon.png')} style={styles.icon}/>
            </TouchableOpacity>
              <Text style={styles.text1}>Tìm kiếm</Text>
              <Image source={require('../img/phone.png')} style={[styles.icon1,{ marginLeft:170,}]}/>
              <Image source={require('../img/3q.png')} style={[styles.icon1,{ marginLeft:10,}]}/>
          </View>
          <View style={[styles.content]}>
          
          </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFF7',
  },
  head:{
    height:64,
    width:390,
    backgroundColor:'#FFC4E2',
    flexDirection:'row',
    
    
  },
  icon: {
    height:26,
    width:30,
    marginLeft:15,
    marginTop:12
    
   },
   text1: {
    marginLeft:30,
    marginTop:12,
    fontSize:20,
    color:'white'
   },
   icon1: {
    height:24,
    width:26,
    marginTop:12
   },
})
export default ChatScreen;
