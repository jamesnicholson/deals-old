import React, {useState, useMemo} from 'react'
import { Root } from "native-base";
import { ApolloProvider } from '@apollo/react-hooks'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeContext} from './utils/context'
import client from './apollo/client'
import Feed from './components/feed'
import Filter from './components/filter'
export default App = () => {
   const [country, setCountry] = useState("EBAY-AU")
   const [deals, setDeals] = useState(null)
   const [category, setCategory] = useState(null)
   const themeValue = useMemo(() => ({ country, setCountry, deals, setDeals, category, setCategory}), [country, setCountry, deals, setDeals, category, setCategory])
   const Stack = createStackNavigator();
   
   return   <Root>
               <ApolloProvider client={client}>
                  <ThemeContext.Provider value={themeValue}>
                     <NavigationContainer>
                        <Stack.Navigator screenOptions={{gestureEnabled: true, gestureDirection:"horizontal"}} 
                                          initialRouteName="Feed"
                                          headerMode="none" 
                                          animation="slide">

                           <Stack.Screen name="Feed" component={Feed} />
                           <Stack.Screen name="Filter" 
                                          component={Filter}
                                          drawerStyle={{
                                             backgroundColor: '#c6cbef',
                                             width: 240,
                                          }}/>
                        </Stack.Navigator>
                     </NavigationContainer>
                  </ThemeContext.Provider>
               </ApolloProvider>
            </Root>
}     
           

