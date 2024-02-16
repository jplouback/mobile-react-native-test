import React from "react";
import { Home } from "./src/screens/Home";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from 'styled-components/native'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import THEME from './src/theme'

export default function App() {
  const [fontLoader] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})
  
  if(!fontLoader) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={THEME}>
      <Home></Home>
    </ThemeProvider>
  )
}
