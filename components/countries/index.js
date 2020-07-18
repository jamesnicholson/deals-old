import React, { useContext } from 'react';
import {ThemeContext}  from '../../utils/context'
import {useQuery} from '@apollo/react-hooks'
import { List, Content, Spinner, ListItem, Text} from 'native-base';
import {GET_COUNTRIES} from '../../apollo/queries'
const Countries = () =>  {
  const {country} = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
      fetchPolicy: "no-cache"
    });
  const Loader = () => <Spinner color='green' />
  const CountryList = () => <List> 
                                  { typeof data.countries !== "undefined" ? 
                                      data.countries.map((item, index) => <ListItem key={index}>
                                                                              <Text>{item.name}</Text>
                                                                            </ListItem>) 
                                  : null } 
                                </List>
             

  return  <Content>
            {loading ? Loader() : CountryList()}
          </Content>
}
export default Countries;