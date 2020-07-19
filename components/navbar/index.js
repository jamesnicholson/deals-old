import React, { useState, useEffect, useContext } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
const Navbar = ({navigation}) => {
    return <Header>
                <Left>
                    <Button transparent onPress={()=>console.log("Profile")}>
                        <Icon name='user' size={30} color="#000"   />
                    </Button>
                </Left>
                <Body>
                    <Title>Deals</Title>
                </Body>
                <Right>
                    <Button transparent onPress={()=>console.log("My Favorties")}>
                        <Icon name='heart' size={30} color="#000"  />
                    </Button>
                </Right>
            </Header>
}
export const NavbarBottom = ({navigation}) => {
   return <Footer>
            <FooterTab>
                <Button full>
                    <Text>Footer</Text>
                </Button>
            </FooterTab>
        </Footer>
}


export default Navbar


