import {  Card, CardBody, Center, HStack, Image, Stack, Text } from "@chakra-ui/react"
// import Img from '../assets/pngwing.com.png'


const CardDesign = ({data}) => {
 
  
  if (!data || !data.results || data.results.length === 0) {
   
    return <div>No data available</div>;
  }
  const user = data.results[0];
  const Img = user.picture.large;
  return (
    <Center>
    <Card height='400px' width='700px' justifyContent='space-evenly'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant = 'outline'
  borderRadius={20}
  boxShadow='lg'
>
 
 <Center>
  <Image
   
     
    boxSize='300px'
    borderRadius={10}
    boxShadow='lg'
    src={Img}
    alt='User'
  />
  </Center>
 
<Center>
  <Stack>
    <CardBody marginX={10} textAlign='center' fontWeight='bold' fontSize='lg' color='blue.500'>
       <HStack >
        <Text >{user.name.first}</Text>
        <Text>{user.name.last}</Text>
        </HStack>
      
 

      <Text my={50}>{user.gender}</Text>
      <Text>{user.phone}</Text>
      
    </CardBody>
  

   
  </Stack>
  </Center>
</Card>
</Center>
  )
}

export default CardDesign;