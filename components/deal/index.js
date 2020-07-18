import React, { useContext } from 'react';
import {ThemeContext}  from '../../utils/context'
import { Card, CardItem, Thumbnail, Left, Text, Body} from 'native-base';
const Deal = ({data}) =>  {
  console.log(data)
  const {title,
        } = data
  return  <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>{title}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
}
export default Deal;