import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "./components/navbar";
import CardGrid from "./components/CardGrid";



const App =() => {

  return (
   <>
  <Grid
  templateAreas={`"header header"
 
 `}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
   h='200px'
  gap='1'
  color='blackAlpha.700'
  
>
  <GridItem pl='2' area={'header'} bg='blue.100'>
  <Navbar/>
  </GridItem>
  </Grid>
  
  <CardGrid/>
 
  </>
 
  )
}

export default App;
