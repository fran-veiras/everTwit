import { Box, Button, Container, Heading } from '@chakra-ui/react';
import { Header } from '../../Components/Header';
import { loginWithGitHub, loginWithGoogle } from '../../firebase/client';
import useUser from '../../hooks/useUser';
import GitHub from '../../public/icons/gitHub';
import GoogleIcon from '../../public/icons/google';

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

  return (
    <Container my={6}>
      <Header />
      <Box my={10}>
        <Heading variant="title">
          Para continuar es necesario iniciar sesión
        </Heading>
        <Button onClick={handleGitHubLogin} background="secondary" color="#fff">
          Login con GitHub <GitHub />
        </Button>
        <Button onClick={handleGoogleLogin} background="secondary" color="#fff">
          Login con Google <GoogleIcon />
        </Button>
      </Box>
    </Container>
  );
}
