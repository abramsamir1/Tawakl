import React from 'react';
import { TouchableOpacity, Image } from 'react-native';




const CustomIcon = (props) => {
return (
    <TouchableOpacity onPress ={props.press} >
    <Image 
    source ={props.source}
    style={props.style}
    />

    </TouchableOpacity>
)
}

export default CustomIcon;