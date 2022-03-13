import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';

export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.areaTopo}>

        <TouchableOpacity>      
          <Entypo name="menu" size={40} color="black" />
        </TouchableOpacity>  
    
       <TextInput      
          clearTextOnFocus={false}
          textAlign='left'
          maxLength={25}
          style={styles.input}
        />

        <TouchableOpacity >
         <FontAwesome name="search" size={40} color="black" />
       </TouchableOpacity>
    
      </View>
      <StatusBar style="auto" />   

      <View style={styles.viewPesquisa}>
        <TouchableOpacity>
          <AntDesign name="addfile" size={40} color="black" />
          <Text>add</Text>
        </TouchableOpacity>
      </View>  
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3'
       
  },
  areaTopo:{
    paddingHorizontal: 20,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
    
   },
  imgBarra:{
    width: 40,
    height: 40,
    padding: 20, 

  },
  input: {
    height: 30,
    margin: 5,
    borderWidth: 1,
    paddingHorizontal: 70,
    borderRadius: 5,
    backgroundColor: '#bebebe',
    borderColor: '#000',
    marginTop: 6,
    fontFamily: 'Arial'
    
    
  },
  imgPesquisa:{
    width: 40,
    height: 40,
    padding: 20,
  
  },
  viewPesquisa:{
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingTop: 660,
    paddingRight: 50
    
  },
  imgAdc:{
    width: 40,
    height: 40,
    
  }

 
});
