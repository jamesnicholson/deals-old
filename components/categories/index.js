import React, { useContext } from 'react';
import { Image } from 'react-native';
import {ThemeContext}  from '../../utils/context'
import {useQuery} from '@apollo/react-hooks'
import { List, Content, Spinner, ListItem, Text} from 'native-base';
import {GET_CATEGORIES} from '../../apollo/queries'
const Categories = () =>  {
  const {country} = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_CATEGORIES, {
      fetchPolicy: "no-cache",
      variables: { country: country ? country : "EBAY-AU" },
    });
  const Loader = () => <Spinner color='green' />
  const CategoriesList = () => <List>{ typeof data.categories !== "undefined" ? data.categories.map((item, index) => <ListItem key={index}><Text>{item.name}</Text></ListItem>) : null}</List>
                    
  return  <Content>
            {loading ? Loader() : CategoriesList()}
          </Content>
}
export default Categories;