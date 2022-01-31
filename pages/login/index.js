import { Box, Button, Container, Flex, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { Header } from '../../Components/Header';
import {
  addInfo,
  loginWithGitHub,
  loginWithGoogle,
} from '../../firebase/client';
import useUser, { USER_STATES } from '../../hooks/useUser';
import GitHub from '../../public/icons/gitHub';
import GoogleIcon from '../../public/icons/google';
import LoginImg from '../../public/LoginImg';

export default function Login() {
  const user = useUser();

  console.log(user);

  const handleGitHubLogin = () => {
    loginWithGitHub().catch((err) => {
      console.log('nada');
    });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle().catch((err) => {
      console.log(err);
    });
  };

  const [name, setName] = useState('');

  const handlerName = (e) => {
    setName(e.target.value);
  };

  const sendData = (e) => {
    (e.key === 'Enter') & (name.length > 2) &&
      user &&
      addInfo({
        email: user.email,
        uid: user.uid,
        name: name,
        categories: [],
        twits: {},
      });
  };

  return (
    <Container my={6}>
      <Header />

      <Box my={10}>
        <Heading variant="title" fontSize="3rem" fontWeight="light">
          Para continuar es necesario iniciar sesión
        </Heading>
        <Flex
          height="full"
          width="full"
          my={10}
          alignItems="center"
          justifyContent="center"
          gridGap={3}
        >
          <Box>
            <LoginImg />
          </Box>
          <Flex
            background="blue"
            height="full"
            width="full"
            flexDir="column"
            gridGap={10}
            padding="32px"
            borderRadius="15px"
            position="relative"
          >
            <Button
              onClick={handleGitHubLogin}
              background="secondary"
              color="#fff"
            >
              Login con GitHub <GitHub />
            </Button>
            <Button
              onClick={handleGoogleLogin}
              background="secondary"
              color="#fff"
            >
              Login con Google <GoogleIcon />
            </Button>
            <Flex
              background="lightBlue"
              height="full"
              width="full"
              flexDir="column"
              gridGap={10}
              padding="32px"
              borderRadius="15px"
              position="absolute"
              right="20px"
              top="20px"
              zIndex="-2"
            ></Flex>
          </Flex>
        </Flex>
        {user !== USER_STATES.NOT_LOGED && user !== USER_STATES.NOT_KNOWN && (
          <Flex alignItems="center" justifyContent="center" gridGap={3}>
            <Heading
              fontWeight="500"
              fontSize="3rem"
              variant="title"
              color="primary"
            >
              Nombre:
            </Heading>
            <Input
              fontSize="3rem"
              fontWeight="light"
              fontFamily="Cairo, sans-serif"
              color="primary"
              py={8}
              variant="flushed"
              width="60%"
              value={name}
              onChange={handlerName}
              onKeyDown={sendData}
            />
          </Flex>
        )}
      </Box>
    </Container>
  );
}
