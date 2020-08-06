import React,{useState} from 'react';
import { View, Text, Dimensions} from 'react-native';
import CustomIcon from './CustomIcon';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderBack = (props) => {

return (
    <View style={{width: windowWidth, height:windowHeight*0.05, alignItems: 'flex-start' }}>
    <CustomIcon 
    source={require("../assets/back.png")}
    style={{height: 20, width: 20, resizeMode: 'contain'}}
    press={props.press}
    />
    </View>
)
}

export default HeaderBack;