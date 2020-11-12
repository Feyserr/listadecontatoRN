import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "people": props.route.params.people
        }
    }

    render(){
        console.log(this.state.people);
        return(
            <View>
                 <Image style={style.avatar} source={{uri: this.state.people.picture.large}} />
                <Text style={style.name}>{this.state.people.name.first}</Text>
                <Text style={style.tel}>telefone: {this.state.people.cell}</Text>
                <Text style={style.tel}>Email: {this.state.people.email}</Text>
                <Text style={style.tel}>Gênero: {this.state.people.gender}</Text>
                <Text style={style.tel}>Naturalização: {this.state.people.nat}</Text>
                
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        backgroundColor: '#05E6BE'
    },
    line: {
        height:60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#05E6BE'
        
    },
    avatar: {
        width:200,
        height:200,
        borderRadius: 50,
        backgroundColor: '#05E6BE'
    },
    name: {
        fontSize: 20,
        paddingLeft: 20,
        backgroundColor: '#05E6BE'
    },
    tel:{
        fontSize: 18,
        paddingLeft:20,
        backgroundColor: '#05E6BE'    
    }
}
)