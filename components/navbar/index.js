import React, { useState, useEffect, useContext } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
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
                <Right>
                    <Button transparent onPress={()=>console.log("show bottom  drawer")}>
                        <Icon name='filter' size={30} color="#000"  />
                    </Button>
                    <Button transparent onPress={()=>console.log("My Favorties")}>
                        <Icon name='heart' size={30} color="#000"  />
                    </Button>
                </Right>
            </Header>
}
export const NavbarBottom = ({navigation}) => {
   return <Footer>
            <FooterTab>
  
            </FooterTab>
        </Footer>
}


export default Navbar


