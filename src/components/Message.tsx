import { HStack, Text, Avatar } from '@chakra-ui/react'

type MessageProps = { text: string; user?: string | undefined; uri?: string | undefined }
const Message = ({ text, user, uri }: MessageProps) => {
  return (
    <HStack alignSelf={user === 'me' ? 'flex-end' : 'flex-start'} bg={'gray.300'} paddingY={'2'} paddingX={'4'} borderRadius={'base'} boxShadow={'2xl'}>
      {user === 'other' && <Avatar src={uri}></Avatar>}
      <Text>{text}</Text>
      {user === 'me' && <Avatar src={uri}></Avatar>}
    </HStack>
  )
}

export default Message
