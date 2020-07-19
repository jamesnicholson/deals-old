import React, { useState, useEffect} from 'react';
import {ThemeContext}  from '../../utils/context'
import {Image} from 'react-native'
import CountDown from './countdown'
import { Card, CardItem, Text, Body, Right, ListItem} from 'native-base';
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
              <Right>
                <ListItem>
                    <Text>
                      Deal ends {<CountDown endsAt={endsAt} />}
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                      {currency} {price}
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                      {currency} {price}
                    </Text>
                </ListItem>
              </Right>
            </CardItem>
          
          </Card>
}
export default Deal;