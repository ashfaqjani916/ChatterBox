import { useEffect, useState } from 'react'
import './App.css'
import { app } from './firebase'
import { Box, Button, Container, VStack, Input, HStack } from '@chakra-ui/react'
import Message from './components/Message'
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth'

import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

const auth = getAuth(app)
const db = getFirestore(app)

const loginHandler = () => {
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
}

const logoutHandler = () => {
  signOut(auth)
}

function App() {
  const [user, setUser] = useState(false)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const submitHandler = async (e: any, user: User) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, 'Messages'), {
        text: { message },
        uid: user.uid,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
      })

      setMessage('')
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      setUser(data as any)
    })

    return () => {
      unsubscribe()
    }
  })

  return (
    <>
      <Box bg={'red.50'}>
        {user ? (
          <HStack>
            {/* <div className="w-10 h-10 bg-black"></div> */}
            <Container h={'100vh'} bg={'ivory'}>
              <HStack>
                {' '}
                <VStack bg={'red'} h={'full'}>
                  hello
                </VStack>
                <VStack h="full">
                  <Button onClick={logoutHandler} w={'full'} colorScheme="red">
                    Logout
                  </Button>

                  <VStack h={'full'} w={'full'} padding={'4'}>
                    {messages.map((item) => (
                      <Message text="item.text" />
                    ))}
                  </VStack>

                  <form onSubmit={(e) => submitHandler(e, user as unknown as User)} style={{ width: '100%' }}>
                    <HStack>
                      <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter a message" />
                      <Button colorScheme="green" type="submit">
                        Send
                      </Button>
                    </HStack>
                  </form>
                </VStack>
              </HStack>
            </Container>
          </HStack>
        ) : (
          <VStack justifyContent={'center'} h={'100vh'}>
            <Button onClick={loginHandler}>Sign in with Google</Button>
          </VStack>
        )}
      </Box>
    </>
  )
}

export default App
