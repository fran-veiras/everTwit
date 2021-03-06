/* eslint-disable @next/next/no-page-custom-font */
import { Container, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FooterComponent } from '../Components/Footer'
import { Header } from '../Components/Header'
import { AboutApp } from '../Components/MainPage/AboutApp'
import { fetchData } from '../firebase/client'
import useUser from '../hooks/useUser'

export default function Home () {
  const [domain, setDomain] = useState([])
  const user = useUser()

  async function getData () {
    const value = await fetchData(user?.uid)

    setDomain(value)
  }

  useEffect(() => {
    (domain.length === 0 || domain.data === undefined) && getData()
  }, [domain])

  return (
    <>
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Spline+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Spline+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </>
      <Container my={6} padding="0px">
        <Header routeUser={domain.routeUser} />
        <AboutApp />
      </Container>
      <FooterComponent />
    </>
  )
}
