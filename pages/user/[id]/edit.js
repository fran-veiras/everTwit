import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { firestore } from '../../../firebase/admin';
import Link from 'next/link';
import { EditProfile } from '../../../Components/UserPage/editUserPage/editProfile';
import { EditCategories } from '../../../Components/UserPage/editUserPage/editCategories';
import { HelpUs } from '../../../Components/UserPage/editUserPage/HelpUs';

export default function Edit(props) {
  console.log(props);

  return (
    <Container my={6}>
      <Link
        href={{
          pathname: '/user/[id]',
          query: { id: `${props.routeUser}` },
        }}
      >
        <Text textDecoration="underline" variant="paragraph">
          Volver al perfil 🔙
        </Text>
      </Link>
      <Flex flexDir="column" gridGap={3}>
        <Heading>Administrador</Heading>
        <EditProfile />
        <EditCategories />
        <HelpUs />
      </Flex>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  return firestore
    .collection('users')
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      };

      return { props: props };
    })
    .catch(() => {
      return { props: {} };
    });
}
