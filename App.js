import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text,View,TouchableOpacity,TextInput,ImageBackground } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'


export default class App extends React.Component {
  constructor(){
    super()
    this.state={word:'',defination:'', phonetics:''}
  }

  getWord=(word)=>{
    
    var url= "https://api.dictionaryapi.dev/api/v2/entries/en/"+word
    return fetch (url)
    .then ((data)=>{
      
      return data.json()
    })
    .then((response)=>{
      console.log(response)
      //var responseObject = JSON.parse(response);
      var word = response[0].word;
       console.log(word)
      var defination = response[0].meanings[0].definitions[0].definition
      console.log(defination)
      this.setState({

      word : word.trim(),
       defination : defination.trim()
    })
    })

    
      }

  render() {
    return (
 
<SafeAreaProvider>
 <View style={styles.container}>

 

{/* <Header backgroundColor={"#9c8210"} 
      centerComponent = {{text:"Monkey Chunky",style:{color:'#fff',fontSize : 20}}}/> */}
 
 <Text style = {{fontSize:20,marginBottom:100,color:"red",marginLeft:710,fontWeight:"bold"}}>Made by Siddiq!</Text>
      <Text style = {{fontSize:50,marginLeft:670,marginBottom:300,color:"blue"}}>WELCOME!</Text>
      
      
     <TextInput style={styles.inputBox}
    onChangeText = {text=>{
      this.setState({
     text:text,
      isSearchedPressed:false,
       word:"loading....",
       lexicalCategory:'',
       examples:[],
       defination:""
      })       
      }}
      
    />

<TouchableOpacity style={{backgroundColor:'#1439AE', marginTop:50, marginLeft:755,width:70,height:40,alignItems:"center",justifyContent:"center"}} onPress = {()=>{
       this.setState({isSearchedPressed:true})
       this.getWord(this.state.text)
    }} >
    <Text>Search</Text>
   </TouchableOpacity>



      <StatusBar style="auto" />

      <Text style={{fontSize:25,}}>{this.state.word}</Text>
  <Text style={{fontSize:30,}}>{this.state.defination}</Text>
  
    </View>
    </SafeAreaProvider>
  
  ); 

  }
}




const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFF8DC',
    borderWidth:10,
    borderRadius:15,
    borderColor:"black"
  }
  ,bun:{width:90,height:40,backgroundColor:"lightblue",marginTop:50,marginLeft:400,borderWidth:3,borderColor:"black"}
  ,inputBox:{width:150,height:30,borderWidth:3,borderColor:"black",marginLeft:720}
});


