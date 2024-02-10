
import './App.css'
import {Box,Button,Container,VStack,Input, HStack} from "@chakra-ui/react"
import Message from './components/Message'

function App() {
 

  return (
    <>
    <Box bg={"red.50"}>
      <Container h={"100vh"} bg={"ivory"} >
        <VStack h="full" >
          <Button w={"full"} colorScheme='red'>Logout</Button>
          
          <VStack h={'full'} w={'full'} padding={"4"} >
            <Message  user='me' text ="Sample Message"/>
            <Message  user='other' text ="Sample Message"/>
          </VStack>  
          
          <form style={{ width: "100%"}}>
            <HStack>
              <Input/>
              <Button colorScheme='green'  type="submit" >Send</Button>
              </HStack>
             </form>          
          
        </VStack>
      </Container>
    </Box>
     
    </>
  )
}

export default App
