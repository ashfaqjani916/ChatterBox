
import './App.css'
import {Box,Button,Container,VStack} from "@chakra-ui/react"

function App() {
 

  return (
    <>
    <Box bg={"red.50"}>
      <Container h={"100vh"} bg={"ivory"} >
        <VStack h="full" bg={"telegram.100"}>
          <Button w={"full"} colorScheme='red'>Logout</Button>
          <VStack>
             
          </VStack>
        </VStack>
      </Container>
    </Box>
     
    </>
  )
}

export default App
