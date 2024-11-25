
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useState } from "react";
import { Text as PaperText, Searchbar } from "react-native-paper";


export default VeterinarioView = ()=>{

const [vet, setVet] = useState(
    [
        {id: 1, nome: 'Tito da Silva', nOS: 15},
        {id: 2, nome: 'Marco Reus', nOS: 16},
        {id: 3, nome: 'Julian Brandt', nOS: 16},






    ]

)

return(
    <View style={styles.container}>

<Searchbar
    placeholder="Procurar Veterinário"
    
    />
    <FlatList style={styles.lista}
    data={vet}
    keyExtractor={ (item)=> item.id }
    renderItem={ ({item})=>{
        return(
    
        <View style={styles.linha}>
            <Text style={styles.linhaTexto}>{item.nome}</Text>
            <Text style={styles.linhaTexto}>{item.nOS}</Text>

        </View>
    )}
}
  />


    
    </View>



)

}
const styles = StyleSheet.create({
    linha:{
        flex: 1,
        padding: 15,
        color: '#000',
        alignItems:'baseline'
    },
    linhaTexto:{
        color:'#000',
        fontSize: 24,

    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    lista:{
        // backgroundColor: '#bbb',
        flexGrow: 1,
        width: '100%'
    }
  });