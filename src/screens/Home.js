import React, { useEffect, useState  } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Tab, Tabs} from 'native-base'; 
import CallAPI from '../config/CallAPI';
import CustomCard from '../components/CustomCard';
import AppConfig from '../config/AppConfig';
import { mystyles } from '../config/stylingConfig';



const Home = (props) => {

  console.log('filterkey', props.filterKey);
  const [loading, setLoading] = useState(false)
  

  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
  setLoading(true);
  try {
  const response = await CallAPI.get('/'+searchTerm,
  {
  params: {
    api_key: "efb36070548176ba230143c91478c159",
  }
  });
  console.log('response', response);
  setResults(response.data.results);
  setLoading(false);
  }
  catch(err) {
  console.log('error', err);
  setErrorMessage('Something went wrong');
  setLoading(false);
  }
  };

  useEffect(() => {
  searchApi(props.filterKey);
  }, []);



  const renderResults = () => {
    if(results && loading === false) {
      return (
        <FlatList
        data={results}
   
        renderItem={({ item }) => {
          return (
            <CustomCard item={item}  />
          );
        }}
        numColumns={2}
  />
      )
    }
    else {
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size ="large" color= {AppConfig.colors.thirdly}/>
        </View>
       
      )
    }
  }

  const renderErr = () => {
    if(errorMessage) {
      return (
      <Text style={mystyles.errorStyle}>{errorMessage}</Text>
      )
    }
  }


  return (
   <View style={{flex: 1 }}>
          {renderErr()}
          {renderResults()}
   </View>
  );
};




const styles = StyleSheet.create({


});

export default Home;
