import React, { useState, useEffect, useContext } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import  Categories  from '../categories'
import  Countries  from '../countries'
const Settings = ({navigation}) => {

    return  <Container>
                <Countries />
                <Categories />
            </Container>
};
export default Settings