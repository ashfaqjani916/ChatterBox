import {HStack,Text,Avatar}from "@chakra-ui/react";

type MessageProps = {text:string, user?:string,uri?:string}
const Message = ({text,user,uri}: MessageProps) => {
  return (
    <HStack alignSelf={user==='me'?"flex-end":"flex-start"} bg={"gray.100"} paddingY={'2'} paddingX={"4"} borderRadius={"base"}>
        { user==='other' && <Avatar src={uri}></Avatar>}
        <Text >{text}</Text>
        { user==='me' && <Avatar src={uri}></Avatar>}
    </HStack>
  )
}

export default Message