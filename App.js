import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Icon } from 'react-native';



export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.areaTopo}>      
      <Image 
      style={styles.imgBarra}
      source={require('./src/img/OIP.jpg')}
      />
      <TextInput
        style={styles.input}
        keyboardType= "name-phone-pad"
      />


      <Image
      style={styles.imgPesquisa}
      source={require('./src/img/R.png')}
      />
      </View>
      <StatusBar style="auto" />   



      <View style={styles.viewPesquisa}>
      <Image
      style={styles.imgAdc}
      source={require('./src/img/adicao.png')}
      
      />
      </View>  
     


     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
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
    paddingHorizontal: 70
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
