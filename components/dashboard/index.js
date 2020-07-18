import React, { useState, useEffect, useContext } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import  Deals  from '../deals'
import  Categories  from '../categories'
import  Countries  from '../countries'
export default Dashboard = ({navigation}) => {

    return <Container>
            <Header>
                <Left>
                    <Button transparent onPress={()=> {console.log("D"); navigation.toggleDrawer()}}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
            </Header>

            <Deals />
        
            <Footer>
                <FooterTab>
                <Button full>
                    <Text>Footer</Text>
                </Button>
                </FooterTab>
            </Footer>
        </Container>
};
