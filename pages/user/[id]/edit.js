import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { firestore } from "../../../firebase/admin"
import Link from "next/link"
import { EditProfile } from "../../../Components/UserPage/editUserPage/editProfile"
import { EditCategories } from "../../../Components/UserPage/editUserPage/editCategories"
import { HelpUs } from "../../../Components/UserPage/editUserPage/HelpUs"
import { useState } from "react"
import editData from "../../../firebase/client"

export default function Edit(props) {
  const [name, setNewName] = useState(props.name)
  const [categories, setNewCategorie] = useState(props.categories)
  const [twit, setNewTwit] = useState(props.twits)

  const sendNewData = () => {
    editData(props.routeUser, categories, twit, name)
  }

  return (
    <Container my={6}>
      <Link
        href={{
          pathname: "/user/[id]",
          query: { id: `${props.routeUser}` },
        }}
      >
        <Text textDecoration="underline" variant="paragraph">
          Volver al perfil 🔙
        </Text>
      </Link>
      <Flex flexDir="column" gridGap={10}>
        <Heading>Administrador</Heading>
        <Flex
          flexDir={{
            base: "column", // 0-48em
            md: "column", // 48em-80em,
            xl: "row", // 80em+
            "2xl": "row",
          }}
          gridGap={4}
        >
          <EditProfile name={name} setNewName={setNewName} />
          <EditCategories
            setNewCategorie={setNewCategorie}
            categorie={categories}
          />
        </Flex>
        <Button onClick={sendNewData} variant="primary">
          Guardar cambios
        </Button>
        <HelpUs />
      </Flex>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { params } = context
  const { id } = params

  return firestore
    .collection("users")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      }

      return { props: props }
    })
    .catch(() => {
      return { props: {} }
    })
}
