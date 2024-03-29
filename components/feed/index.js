import React, { useState, useEffect, useContext } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {ThemeContext}  from '../../utils/context'
import  Deals  from '../deals'
import  Navbar from '../navbar'
import {FilterBadges} from '../filter'

export default Feed = ({navigation}) => {
    const { country } = useContext(ThemeContext);
    return <Container>
                <Navbar navigation={navigation} />
                <FilterBadges />
                <Deals />
            </Container>
};
