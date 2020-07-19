import React, { useState, useEffect, useContext } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import  Categories  from '../categories'
import  Countries  from '../countries'
import {NavbarSecondary} from '../navbar'
const Filter = ({navigation}) => {

    return  <Container>
                <NavbarSecondary navigation={navigation} />
                <Countries />
                <Categories />
            </Container>
};
export default Filter