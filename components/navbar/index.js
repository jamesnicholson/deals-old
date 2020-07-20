import React, { useState, useEffect, useContext } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Filter from '../filter'
const Navbar = ({navigation}) => {
    return <Header style={{backgroundColor:'#00000070'}}>
                <Left>
                    <Button transparent onPress={()=>console.log("Profile")}>
                        <Icon name='user' size={30} color="#000"   />
                    </Button>
                </Left>
                <Body>
                    <Title>Deals</Title>
                </Body>
                <Filter />
                <Right>
                    <Button transparent onPress={()=> console.log("Show my favourites")}>
                        <Icon name='heart' size={30} color="#000"  />
                    </Button>
                </Right>
            </Header>
}
export const NavbarSecondary = ({navigation}) => {
   return  <Header> 
                <Right>      
                    <Button transparent onPress={()=> navigation.goBack()}>
                        <Icon name='close' size={30} color="#000"  />
                    </Button>
                </Right>
           </Header>
}
export default Navbar


