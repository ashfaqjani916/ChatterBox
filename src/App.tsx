// import { useEffect, useState } from 'react'
import './App.css'
// import ContactCard from './components/ContactCard'
import { Button } from './components/ui/button'

// import { app } from './firebase'
// import { Box, Button, Container, VStack, Input, HStack } from '@chakra-ui/react'
// import Message from './components/Message'
// import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth'

// import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

// const auth = getAuth(app)
// const db = getFirestore(app)

// const loginHandler = () => {
//   const provider = new GoogleAuthProvider()

//   signInWithPopup(auth, provider)
// }

// const logoutHandler = () => {
//   signOut(auth)
// }

function App() {
  // const [user, setUser] = useState(false)
  // const [messages, setMessages] = useState([])
  // const [message, setMessage] = useState('')

  // const submitHandler = async (e: any, user: User) => {
  //   e.preventDefault()

  //   try {
  //     await addDoc(collection(db, 'Messages'), {
  //       text: { message },
  //       uid: user.uid,
  //       photoURL: user.photoURL,
  //       createdAt: serverTimestamp(),
  //     })

  //     setMessage('')
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (data) => {
  //     setUser(data as any)
  //   })

  //   return () => {
  //     unsubscribe()
  //   }
  // })

  return (
    <>
      <div className="appbody">
        <div className="menu">
          <Button>Click me</Button>
        </div>
        <div className="chatarea"> </div>
      </div>
    </>
  )
}

export default App
