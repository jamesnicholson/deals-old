import React, {useState, useMemo} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeContext} from './utils/context'
import client from './apollo/client'
import Dashboard  from './components/dashboard'

export default App = () => {
   const [country, setCountry] = useState("EBAY-AU");
   const [deals, setDeals] = useState(null);
   const themeValue = useMemo(() => ({ country, setCountry, deals, setDeals}), [country, setCountry, deals, setDeals]);
   const Stack = createStackNavigator();
   return   <ApolloProvider client={client}>
               <ThemeContext.Provider value={themeValue}>
                  <NavigationContainer>
                     <Stack.Navigator screenOptions={{gestureEnabled: true, gestureDirection:"horizontal"}} headerMode="none" animation="fade">
                        <Stack.Screen name="dashboard" component={Dashboard} />
                     </Stack.Navigator>
                  </NavigationContainer>
               </ThemeContext.Provider>
            </ApolloProvider>
}

