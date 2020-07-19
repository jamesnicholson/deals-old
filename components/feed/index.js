import React, { useState, useEffect, useContext } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import  Deals  from '../deals'
import  Navbar from '../navbar'
import  Countries  from '../countries'

export default Feed = ({navigation}) => {

    return <Container>
                <Navbar />
                <Deals />
            </Container>
};
