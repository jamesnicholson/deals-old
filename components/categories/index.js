import React, { useContext } from 'react';
import { Image } from 'react-native';
import {ThemeContext}  from '../../utils/context'
import {useQuery} from '@apollo/react-hooks'
import { List, Content, Spinner, ListItem, Text} from 'native-base';
import {GET_CATEGORIES} from '../../apollo/queries'
const CategoryList = () =>  {
  const { setCategory } = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_CATEGORIES);


  const pressHandler = (item) => { 
      setCategory(item.name)
  }
  const Loader = () => <Spinner color='green' />
  const CategoryList = () => <List> 
                                  { typeof data.categories !== "undefined" ? 
                                      data.categories.map((item, index) => <ListItem key={index} onPress={()=> pressHandler(item)}>
                                                                              <Text>{item.name}</Text>
                                                                            </ListItem>) 
                                  : null } 
                            </List>
  return  <Content>
            {loading ? Loader() : CategoryList()}
          </Content>
}
export default CategoryList;