import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert,TouchableOpacity } from 'react-native';
import { theme } from './theme';

export default function App() {
     
  const handleDelete = () => {
    Alert.alert('Delete','Are you sure you want to delete this item?',[
      {
        text:'Yes',
        onPress:()=>console.log('Delete Pressed'),
        style:'destructive'
      },
      {
        text:'No',
        onPress:()=>console.log('Cancel Pressed'),
        style:'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>

      

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity style={styles.itemButton} onPress={()=>{
        handleDelete()
      }} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  itemContainer:{

    borderBottomWidth:1,
    borderBottomColor:'#1a759f',
    paddingHorizontal:8,
    paddingVertical:16,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    
  },
  itemText:{
    fontSize:18,
      fontWeight:'bold',
      
  },
  itemButton:{
    backgroundColor: theme.colorBlack,
    padding:8,
    borderRadius:8
  },
  buttonText:{
    color:theme.colorWhite,
    fontWeight:'bold',
    textTransform:'uppercase',
    letterSpacing:1
  }
});
