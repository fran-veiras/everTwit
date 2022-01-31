import { Container } from '@chakra-ui/react';
import { Header } from '../../Components/Header';
import { BannerPage } from '../../Components/UserPage/BannerPage';
import { firestore } from '../../firebase/admin';

export default function UserProfile(props) {
  return (
    <Container my={6}>
      <BannerPage />
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'axAa4yZFrancisco VeirasyZS2' } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
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

      return { props, revalidate: 1 };
    })
    .catch(() => {
      return { props: {} };
    });
}
