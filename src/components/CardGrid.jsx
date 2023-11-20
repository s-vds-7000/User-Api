import axios from "axios";
import { useEffect, useState } from "react"
import Card from "./CardDesign";
import { Text } from "@chakra-ui/react";
import CardDesign from "./CardDesign";

const CardGrid = () => {
   
  const [users,  setUsers] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
     axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc').then((res) => {
      //  console.log(res.data)
      setUsers(res.data);
     }).catch((err) => {
         setError(err.message);
     })
  }, [])

  return (
    <>
    {error && <Text color='tomato'>{error}</Text>}
   <CardDesign data={users}/>
   </>
    
  )
}

export default CardGrid