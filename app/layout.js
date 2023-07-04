"use client"
import './globals.css'
import { theme } from '@/style/Theme'
import { GlobalStyles } from '@/style/Global'
import SideBar from '@/src/components/SideBar/SideBar'
import WhoFollow from '@/src/components/WhoFollow/WhoFollow'
import AuthModal from '@/src/components/modal/AuthModal'

import { ThemeProvider, styled } from 'styled-components'


import StyledComponentsRegistry from '@/lib/registry'
import NavBar from '@/src/components/NavBar/NavBar'

//redux
import { Provider } from 'react-redux'
import { store } from '@/store'
import SupabaseProvider from '@/Providers/SupabaseProvider'
import UserProvider from '@/Providers/UserProvider'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const ChildrenWrapper = styled.div`
  flex: 1;
`
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Roboto Condensed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap" rel="stylesheet" />

        {/* Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap" rel="stylesheet" />

        {/* Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          {/* Provider Redux */}
          <Provider store={store}>
            {/* Provider Theme Styled-Components */}
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              {/* SupabaseProviders */}
              <SupabaseProvider>
                <UserProvider>

                  {/* Site */}
                  <NavBar />
                  <div style={{ display: 'flex', width: "100%" }}>
                    <AuthModal />
                    <SideBar />
                    <ChildrenWrapper>
                      {children}
                    </ChildrenWrapper>
                    <WhoFollow />
                  </div>
                </UserProvider>

              </SupabaseProvider>
            </ThemeProvider>
          </Provider>
        </StyledComponentsRegistry>
      </body>
    </html>

  )
}
