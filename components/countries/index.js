import React, { useContext, useEffect } from 'react';
import {ThemeContext}  from '../../utils/context'
import {useQuery} from '@apollo/react-hooks'
import { List, Content, Spinner, ListItem, Text} from 'native-base';
import {GET_COUNTRIES} from '../../apollo/queries'
const Countries = () =>  {
  const {setCountry } = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const Loader = () => <Spinner color='green' />
  const pressHandler = (item) => {
    setCountry(item.gloalId)
  }
  const CountryList = () => <List> 
                                  { typeof data.countries !== "undefined" ? 
                                      data.countries.map((item, index) => <ListItem key={index} onPress={()=> pressHandler(item)}>
                                                                              <Text>{item.name}</Text>
                                                                            </ListItem>) 
                                  : null } 
                                </List>
             

  return  <Content>
            {loading ? Loader() : CountryList()}
          </Content>
}
export default Countries;