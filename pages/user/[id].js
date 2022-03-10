import { Container } from '@chakra-ui/react'
import { Header } from '../../Components/Header'
import { BannerPage } from '../../Components/UserPage/BannerPage'
import { NewCatgeorie } from '../../Components/UserPage/NewCategorie'
import { firestore } from '../../firebase/admin'
import useUser from '../../hooks/useUser'

export default function UserProfile (props) {
  const user = useUser()

  console.log(props)

  return (
    <Container my={6}>
      <BannerPage name={props.name?.charAt(0)} />
      {user !== undefined && user !== null && user.uid === props.uid && (
        <NewCatgeorie route={props.routeUser} />
      )}
    </Container>
  )
}

export async function getStaticPaths () {
  return {
    paths: [{ params: { id: 'axAa4yZFrancisco VeirasyZS2' } }],
    fallback: true
  }
}

export async function getStaticProps (context) {
  const { params } = context
  const { id } = params

  return firestore
    .collection('users')
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate()
      }

      return { props, revalidate: 1 }
    })
    .catch(() => {
      return { props: {} }
    })
}
