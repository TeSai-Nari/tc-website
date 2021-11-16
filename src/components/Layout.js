import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

const theme = {
  fonts: {
    main: "Muli, sans-serif",
    code: "Roboto Mono, monospace",
  },
  colors: {
    bgBlackVersion1: "#27272E",
    bgBlackVersion2: "#212121",
    white: "#ffffff",
    grey: "#D3D3D4",
    red: "#C75C6F",
    purple: "#5956e9",
    yellow: "#FFDC60",
  },
  breakpoints: {
    mobileUp: "only screen and {min-width: 320px}",
    LaptopUp: "only screen and {min-width: 1024px}",
    DesktopUp: "only screen and {min-width: 1440px}",
  }
}

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Navbar/>
      { children }
      <Footer/>
    </ThemeProvider>
  )
}
