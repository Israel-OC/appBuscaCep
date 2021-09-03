import React, {useState} from 'react';

import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Keyboard } from 'react-native';

import api from '../services/api';

function Cep (){

    let [ cep, setCep] = useState ('');
    let [cepUsuario, setCepUsuario] =  useState (null);

    return (
        <View style={styles.container}>  
<image 
source={{uri:'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png'}}
style={{width: 128, height: 128, marginTop:50}}
resizeMode='cover'
/>

<Text style={styles.titulo}> Busca de CEP </Text>
   <TextInput style={styles.busca}
   keyboardType='numeric'
   placeholder='Digite um cep (exemplo: 18133400)'
   value={cep}
   onChangeText={ (valor) => setCep(valor)}
   />
   

<TouchableOpacity style={styles.botao} >
    <Text style={styles.textoBotao}> Pesquisar </Text>
</TouchableOpacity>

<View style={styles.resultado}> 
   <Text style={styles.textoResultado}>Cep:18133-400</Text>
   <Text style={styles.textoResultado}>Rua:Rua da Silva Sauro</Text>
   <Text style={styles.textoResultado}>Bairro:Centro</Text>
   <Text style={styles.textoResultado}>Cidade:São Roque</Text>
   <Text style={styles.textoResultado}>Uf: SP</Text>

</View>
      </View>
    )
}

export default Cep;

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#3CB371',
        flex:1,
        alignItems:'center',
    },

    titulo:{
        marginTop:15,
        color:'#00008B',
        marginBottom:15,
        fontSize:25,
        fontWeight:'bold'
    },

    busca:{
        fontSize:20,
        color:'#FFF',
        width: '65%',
        padding:15,
        borderColor:'#B0E0E6',
        borderWidth:1
    },

    botao:{
        backgroundColor:'#00008B',
        height:50,
        width:'40%',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:40,
        marginTop:40
    },
    
    textoBotao:{
        fontSize:15,
        color:'#FFF'
    },

    resultado:{
        marginTop:50,
        marginLeft:20,
        alignItems:'center',
    },

    textoResultado:{
        fontSize:20,
        color:'#FFF',
    }
});