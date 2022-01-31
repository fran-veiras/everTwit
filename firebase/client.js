import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBaqyBjtlxeNzU4tUDyRfQ1Vcf-4obgSSU',
  authDomain: 'evertwit-3ed1d.firebaseapp.com',
  projectId: 'evertwit-3ed1d',
  storageBucket: 'evertwit-3ed1d.appspot.com',
  messagingSenderId: '860268111903',
  appId: '1:860268111903:web:4026ce06c45777dd484d2a',
  measurementId: 'G-H4WGLR9JQL',
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { email, uid } = user;

  return {
    email,
    uid,
  };
};

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then(mapUserFromFirebaseAuthToUser);
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(mapUserFromFirebaseAuthToUser);
};

// dataBase

export const addInfo = ({ uid, name, email, categories, twits, routeUser }) => {
  return db
    .collection('users')
    .doc(routeUser)
    .set({
      uid,
      name,
      email,
      categories,
      twits,
      routeUser,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    });
};

export const fetchData = () => {
  return db
    .collection('users')
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return {
          ...data,
          id,
        };
      });
    });
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();

    this.props.navigator.push({
      name: 'Login',
    });
  } catch (error) {
    console.log(error);
  }
};
