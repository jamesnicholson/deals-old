import React, { useState, useEffect, useContext } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {useQuery} from '@apollo/react-hooks'
import { Container, Badge, ActionSheet, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base'
import {ThemeContext}  from '../../utils/context'
import {GET_CATEGORIES} from '../../apollo/queries'
import  CategoryList  from '../categories'
import  CountryList  from '../countries'
import { NavbarSecondary } from '../navbar'

const Filter = ({navigation}) => {
    const {categories} = useContext(ThemeContext);
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    var DESTRUCTIVE_INDEX = 3;
    var CANCEL_INDEX = 4;
    console.log(data)
    const handlerFilter = () => {
        console.log(data)
        ActionSheet.show(
            {
              options: data.categories,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: "Testing ActionSheet"
            },
            buttonIndex => {
             // this.setState({ clicked: BUTTONS[buttonIndex] });
            }
          )
    }
    return <Button transparent onPress={()=> handlerFilter()}>
                <Icon name='filter' size={30} color="#000"  />
           </Button>
};
export default Filter
const handlerBadge = () =>{
    setCategory(null)
}
export const FilterBadges = ({name}) => {
    const {category, setCategory} = useContext(ThemeContext);
    return  <Badge style={{ backgroundColor: 'black', padding:5, margin: 5 }}>
                <Text style={{ color: 'white' }}>{category} <Icon name="closecircleo" style={{ fontSize: 15, color: "#fff" }} onPress={() => handlerBadge()}/></Text>
            </Badge>
            
};