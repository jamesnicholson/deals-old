import React, { useState, useEffect, useContext } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import  Categories  from '../categories'
export default Dashboard = ({navigation}) => {

    return <Container>
            <Header>
            <Left>
            <Button transparent>
                <Icon name='menu' />
            </Button>
            </Left>
            <Body>
            <Title>Header</Title>
            </Body>
            <Right />
        </Header>
        <Content>
            <Categories />
        </Content>
        <Footer>
            <FooterTab>
            <Button full>
                <Text>Footer</Text>
            </Button>
            </FooterTab>
        </Footer>
    </Container>
};
