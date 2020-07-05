import React, {useState, useMemo} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeContext} from './utils/context'
import client from './apollo/client'
import Card  from './components/cards/'

export default App = () => {
   const [category, setCategory] = useState("food");
   const [deals, setDeals] = useState(null);
   const themeValue = useMemo(() => ({ category, setCategory, deals, setDeals}), [category, setCategory, deals, setDeals]);
   const Stack = createStackNavigator();
   return   <ApolloProvider client={client}>
               <ThemeContext.Provider value={themeValue}>
                  <NavigationContainer>
                     <Stack.Navigator screenOptions={{gestureEnabled: true, gestureDirection:"horizontal"}} headerMode="none" animation="fade">
                        <Stack.Screen name="display" component={Card} />
                     </Stack.Navigator>
                  </NavigationContainer>
               </ThemeContext.Provider>
            </ApolloProvider>
}

