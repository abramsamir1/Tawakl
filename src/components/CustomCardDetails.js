import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Card, CardItem, Container, Header, Content, Button, Icon, Left, Body, Footer, FooterTab} from 'native-base';
import { RNToasty } from 'react-native-toasty';
import { useRoute, useNavigation } from '@react-navigation/native';
import HeaderBack from './HeaderBack';
import AppConfig from '../config/AppConfig';
import { mystyles } from '../config/stylingConfig';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const CustomCardDetails = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    let item = route.params;


    console.log('propsssof route', item);

    const btnPressed = () => {

        RNToasty.Success({ title: 'You bought this movie successfully', duration: 3,  titleSize: 12  })
        navigation.goBack()
       
    }
  
    return (
        <Container style={{ padding: AppConfig.textSize.padding }} >
         <HeaderBack press={() => navigation.goBack()}/>
        <Content >
       

        <Card style={styles.cardStyle}>
        <CardItem style={{backgroundColor: AppConfig.colors.secondary}}>

                <Body>
                <Text 
                 style={mystyles.titleStyle}
            
                >{item.item.original_title}</Text>
                <Text 
                style={mystyles.bodyStyle}
                numberOfLines={1}
                >Published at: {item.item.release_date}</Text>
                </Body>

        </CardItem>
        <CardItem cardBody>
            <Image
            source={{ uri: "https://image.tmdb.org/t/p/w500/" + item.item.poster_path}}
            style={styles.imageStyle}
            /> 
      </CardItem>
    
      <CardItem>
          <Text style={mystyles.descStyle}>{item.item.overview} </Text>
      </CardItem>
     
          <Footer>
              <FooterTab >
                  <Button  style={{ backgroundColor: AppConfig.colors.primary}} 
                    onPress={() => btnPressed()}
                  >
                      <Text style={mystyles.descStylebtn}>Buy it</Text>
                  </Button>
              </FooterTab>
          </Footer>
   

    </Card>
    </Content>
    </Container>

    );
  }


const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor:'#FFFFFF',
    },  
imageStyle: {
   height: windowHeight* 0.35,
   width: null,
   flex: 1,
   resizeMode: 'cover',
},

});


export default CustomCardDetails;
