import React, { useContext } from 'react';
import {ThemeContext}  from '../../utils/context'
import {Image} from 'react-native'
import { Card, CardItem, Text, Body} from 'native-base';
const Deal = ({data}) =>  {
  const { itemId,
          title,
          url,
          endsAt,
          image225,
          currency,
          price,
          originalPrice,
          discountPercentage,
          quantity,
          shippingCost,
          dealUrl } = data

  return  <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <Image source={{uri: image225}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                {title}
                </Text>
              </Body>
            </CardItem>
          
          </Card>
}
export default Deal;