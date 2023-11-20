import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/pngegg.png'

const Navbar = () => {
  return (
    <HStack display='flex' justifyContent='space-between'>
      <Image src={Logo} height={10} width={10} margin={2}/>

      <Text paddingX={4} fontWeight='bold'>Know Your Customer</Text>
      
    </HStack>
  )
}

export default Navbar