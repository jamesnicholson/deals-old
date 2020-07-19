import React, { useContext, useEffect} from 'react';
import { Image } from 'react-native';
import {ThemeContext}  from '../../utils/context'
import {useQuery} from '@apollo/react-hooks'
import { List, Content, Spinner, ListItem, Text} from 'native-base';
import {GET_DEALS_BY_COUNTRY} from '../../apollo/queries'
import Deal from '../deal'
const Deals = () =>  {
  const {country} = useContext(ThemeContext);
  
  const { loading, error, data } = useQuery(GET_DEALS_BY_COUNTRY, {
      fetchPolicy: "no-cache",
      variables: { country: country ? country : "EBAY-AU" },
    });
    useEffect(() => {
      console.log(country)
      return () => {
        true
      }
    }, [country])
  const Loader = () => <Spinner color='green' />
  const DealList = () => <Content> 
                            { typeof data.deals !== "undefined" ? 
                                data.deals.map((item, index) => <Deal key={index} data={item} />) 
                            : null } 
                        </Content>
             
  if(error) console.log("error! :", error)  
  return loading ? Loader() : DealList()
}
export default Deals;