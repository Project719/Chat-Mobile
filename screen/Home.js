import React from'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home=() =>{
  const navigation = useNavigation();
    const handlePress = () => {
      navigation.navigate('ChatScreen'); 
    };
    return(
      <View style={styles.container}>
          <View style={styles.seachbar}>
              <Image source={require('../img/seach-icon.png')} style={styles.icon}/>
              <Text style={styles.textseach}>Tìm kiếm</Text>
              <Image source={require('../img/plus.png')} style={styles.icon1}/>
          </View>
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.box}>
                <Image source={require('../img/anh1.png')} style={styles.avt}/>
                <View style={styles.textbox}>
                  <Text style={styles.textName}>Trito</Text>
                  <Text style={styles.text02}>Hôm nay làm gì thế</Text>
                </View>
            </View>
          </TouchableOpacity>
          
          <View style={styles.box}>
              <Image source={require('../img/anh1.png')} style={styles.avt}/>
              <View style={styles.textbox}>
                <Text style={styles.textName}>Trito</Text>
                <Text style={styles.text02}>Hôm nay làm gì thế</Text>
              </View>
          </View>
          <View style={styles.box}>
              <Image source={require('../img/anh1.png')} style={styles.avt}/>
              <View style={styles.textbox}>
                <Text style={styles.textName}>Trito</Text>
                <Text style={styles.text02}>Hôm nay làm gì thế</Text>
              </View>
          </View>
          <View style={styles.box}>
              <Image source={require('../img/anh1.png')} style={styles.avt}/>
              <View style={styles.textbox}>
                <Text style={styles.textName}>Trito</Text>
                <Text style={styles.text02}>Hôm nay làm gì thế</Text>
              </View>
          </View>
          <View style={styles.box}>
              <Image source={require('../img/anh1.png')} style={styles.avt}/>
              <View style={styles.textbox}>
                <Text style={styles.textName}>Trito</Text>
                <Text style={styles.text02}>Hôm nay làm gì thế</Text>
              </View>
          </View>
          <View style={styles.box}>
              <Image source={require('../img/anh1.png')} style={styles.avt}/>
              <View style={styles.textbox}>
                <Text style={styles.textName}>Trito</Text>
                <Text style={styles.text02}>Hôm nay làm gì thế</Text>
              </View>
          </View>
          <View style={styles.box}>
              <Image source={require('../img/anh1.png')} style={styles.avt}/>
              <View style={styles.textbox}>
                <Text style={styles.textName}>Trito</Text>
                <Text style={styles.text02}>Hôm nay làm gì thế</Text>
              </View>
          </View>
          </ScrollView>
          <View style={styles.footer}>
            <Text>footer</Text>
          </View>
      </View>
      
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 seachbar:{
   height:64,
   width:390,
   backgroundColor:'#FFC4E2',
   flexDirection:'row',
   
   
 },
 icon: {
  height:29,
  width:26,
  marginLeft:10,
  marginTop:12
  
 },
 textseach: {
  marginLeft:30,
  marginTop:12,
  fontSize:20,
  color:'#EDEDED'
 },
 icon1: {
  height:24,
  width:24,
  marginLeft:210,
  marginTop:12
 },
 box:{
  height:99,
   width:390,
   backgroundColor:'white',
   flexDirection:'row',
   borderWidth:1,
   borderColor:'#B4B4B4',
   
 },
 avt:{
  height:71,
  width:75,
  marginLeft:10,
  marginTop:12
 },
 textbox:{
  marginLeft:50,
  marginTop:15,
  
  
 },
 textName:{
    fontFamily:'Chalkboard',
    fontWeight:'bold',
    fontSize:23,
    color:'black',
    marginBottom:10,
 },
 text02:{
    fontFamily:'roboto',
    fontSize:17,
    color:'black',
 },
 footer: {
  height: 50, // Chiều cao của footer
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
},
scrollView: {
  flex: 1,
},
});

export default Home;