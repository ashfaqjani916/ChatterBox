import { useEffect, useState } from 'react'
import { Input } from '@chakra-ui/react'
import './App.css'
import ContactCard from './components/ContactCard'
import Message from './components/Message'
import { Button } from './components/ui/button'
import { FiLogOut } from 'react-icons/fi'

import { app } from './firebase'

import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth'

import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore'

const auth = getAuth(app)
const db = getFirestore(app)

const loginHandler = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
}

const logoutHandler = () => {
  signOut(auth)
}

interface Messagetype {
  id: string
  text: {
    message: string
  }
  uid: string
  uri: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
}

function App() {
  const [user, setUser] = useState<User>()
  const sortedMessages = query(collection(db, 'Messages'), orderBy('createdAt', 'asc'))

  const [messages, setMessages] = useState<Messagetype[]>([])
  const [message, setMessage] = useState('')

  const submitHandler = async (e: any, user: User) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, 'Messages'), {
        text: { message },
        uid: user.uid,
        uri: user.photoURL,
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

    const unsubscribeforMessage = onSnapshot(sortedMessages, (snap) => {
      const allMessages = snap.docs.map((item) => {
        const id = item.id
        return { id, ...item.data() } as Messagetype
      })

      setMessages(allMessages)
    })

    return () => {
      unsubscribe()
      unsubscribeforMessage()
    }
  })

  return (
    <>
      {user ? (
        <div className="appbody">
          <div className="menu">
            <div className="logo">
              <div className="avatar">
                <img src="/logo.png" />
              </div>
              <div className="heading">ChatterBox</div>
            </div>
            <div className="contacts">
              <ContactCard />
            </div>
            <div className="options">
              <div style={{ marginLeft: '80%' }}>
                <Button onClick={logoutHandler}>
                  <FiLogOut />
                </Button>
              </div>
            </div>
          </div>
          <div className="chatarea">
            <div className="textarea">
              {messages.map((item: Messagetype) => (
                <Message key={item.id || item.uid} text={item.text} uri={item.uri} user={item.uid === user?.uid ? 'me' : 'other'} />
              ))}
            </div>
            <form onSubmit={(e) => submitHandler(e, user as unknown as User)}>
              <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter a message..." bg={'rgba(12,135,205,255)'} textColor={'whitesmoke'} />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
      ) : (
        <div className="signin-btn">
          <div className="logo">
            <div className="avatar">
              <img src="/logo.png" />
            </div>
            <div className="heading">ChatterBox</div>
          </div>
          <Button style={{ marginTop: '50px' }} onClick={loginHandler}>
            Sign in with Google
          </Button>
        </div>
      )}
    </>
  )
}

export default App
