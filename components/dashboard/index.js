import React, { useState, useEffect, useContext } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {ThemeContext}  from '../../utils/context'
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES }  from '../../apollo/queries'



export default Dashboard = ({navigation}) => {

    const {country} = useContext(ThemeContext);
    const {deals, setDeals} = useContext(ThemeContext);

    const [getDealsByCountry, {loading, data }] = useLazyQuery(GET_CATEGORIES, {
      fetchPolicy: "no-cache",
      variables: { country: country ? country : "EBAY-AU" },
    })

    const updateDeals = () => {
        getDealsByCountry()
        setDeals(data)
    }

    useEffect(() =>{
        if(!data){
            updateDeals();
            console.log("data :" + data)
        }
    },[data])

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
            <Text>
            This is Content Section
            </Text>
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
