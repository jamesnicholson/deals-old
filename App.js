import React, {useState, useMemo} from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {ThemeContext} from './utils/context'
import client from './apollo/client'
import Dashboard  from './components/dashboard'
import Settings from './components/settings'

export default App = () => {
   const [country, setCountry] = useState("EBAY-AU")
   const [deals, setDeals] = useState(null)
   const [category, setCategory] = useState(null)
   const themeValue = useMemo(() => ({ country, setCountry, deals, setDeals, category, setCategory}), [country, setCountry, deals, setDeals, category, setCategory])
   const Drawer = createDrawerNavigator()
   return   <ApolloProvider client={client}>
               <ThemeContext.Provider value={themeValue}>
                  <NavigationContainer>
                     <Drawer.Navigator screenOptions={{gestureEnabled: true, gestureDirection:"horizontal"}} headerMode="none" animation="fade">
                        <Drawer.Screen name="dashboard" component={Dashboard} />
                        <Drawer.Screen name="settings" component={Settings} />
                     </Drawer.Navigator>
                  </NavigationContainer>
               </ThemeContext.Provider>
            </ApolloProvider>
}

