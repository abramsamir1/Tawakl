import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Card, CardItem, Container, Header, Content, Button, Icon, Left, Body} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AppConfig from '../config/AppConfig';
import { mystyles } from '../config/stylingConfig';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomCard = (props) => {

    const navigation = useNavigation();

    console.log('navigation', navigation);
    console.log('props', props.item);


  
    return (

        <TouchableWithoutFeedback onPress={() => navigation.navigate('CustomCardDetails', {item: props.item})}>
      <Card style={styles.cardStyle}>
          <CardItem style={{backgroundColor: AppConfig.colors.secondary}}>

                  <Body>
                  <Text 
                   style={mystyles.titleStyle}
                  numberOfLines={1}
                  >{props.item.original_title}</Text>
                  <Text 
                   style={mystyles.bodyStyle}
                  numberOfLines={1}
                  >Published at: {props.item.release_date}</Text>
                  </Body>

          </CardItem>
          <CardItem cardBody>
              <Image
              source={{ uri: "https://image.tmdb.org/t/p/w500/" + props.item.poster_path}}
              style={styles.imageStyle}
              /> 
        </CardItem>
 
      </Card>
      </TouchableWithoutFeedback>

    );
  }


const styles = StyleSheet.create({
    cardStyle: {
        flex: 1,
        backgroundColor:AppConfig.colors.secondary,
       
        
    },  
imageStyle: {
   height: windowHeight* 0.2,
   width: null,
   flex: 1,
  
}
});


export default CustomCard;
