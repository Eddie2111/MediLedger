import React,{useEffect,useState} from 'react';
import Router from 'next/router';

import {
  FormErrorMessage,
  FormLabel, FormControl,
  Input, Button, SimpleGrid, GridItem
} from '@chakra-ui/react'
import axios from 'axios';

const ComponentsCreateLedger = () => {
    const dataCards = [
        { title: "" , description: "", link: ""}
    ]
    
    const [name,setName] = useState("");
    const routing = (link) => {
        return () => {
            Router.push(link);
        }}
    const submitHandler = async(e) => {
        e.preventDefault();
        await axios.post("/api/ledger",{
            serialNo: e.target.serialNo.value, name: e.target.name.value},{withCredentials: true})
            .then((data)=>{console.log(data)})
            .catch((error)=>{console.log(error.message)})
    }

    return (
        <>
       <form onSubmit={submitHandler}>
      <FormControl>
        <SimpleGrid columns={[1, null, 2]} spacing={2}>
            <GridItem >
                <FormLabel>Serial Number </FormLabel>
                <Input placeholder='Batch Serial Number' name="serialNo" />
                <FormLabel>Your Name</FormLabel>
                <Input placeholder='name' name="name"/>
            </GridItem>
        </SimpleGrid>

        <FormErrorMessage>
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' type='submit'>
        Submit
      </Button>
    </form>
</>

    )
};
export default ComponentsCreateLedger;