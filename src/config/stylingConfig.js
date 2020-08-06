
import AppConfig from './AppConfig';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

const mystyles = StyleSheet.create({

 
    titleStyle: {fontSize: AppConfig.textSize.title, color: AppConfig.colors.primary, fontWeight: 'bold'},
    descStylebtn: {
        color: '#fff', fontSize:  AppConfig.textSize.desc
    },
    bodyStyle: {fontSize:  AppConfig.textSize.body,  color: AppConfig.colors.primary},
    descStyle: {fontSize: AppConfig.textSize.desc, color: AppConfig.colors.primary},
    errorStyle: {
        fontSize:  AppConfig.textSize.title,
        color: AppConfig.colors.error
    }
})

export { mystyles };