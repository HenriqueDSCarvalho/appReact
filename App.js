import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';



export default function App() {

  return (
    <View style={styles.container}>
      <Text>Anotações</Text>
      <StatusBar style="auto" />

      <Button
      title='pesquisa'
      color= '#ff00ff'
      accessibilityLabel='label'
      
      />



     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff000',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
