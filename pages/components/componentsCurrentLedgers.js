import React,{useEffect,useState} from 'react';
import Router from 'next/router';
import styles from '../../styles/Home.module.css'
import {
  FormErrorMessage,Thead,Tr,Tbody,
  FormLabel, FormControl,Th,Td,
  Input, Button, SimpleGrid, GridItem, Table
} from '@chakra-ui/react'
import axios from 'axios';

export default function ComponentsCurrentLedgers(){

    const [click, setClick] = useState(false);
    const [dataSet, setDataSet] = useState({
        serialNo: "",
        name: ""
    });
    const [name,setName] = useState("");
    const routing = (link) => {
        return () => {
            Router.push(link);
        }}
    const submitHandler = async(e) => {
        e.preventDefault();
        await axios.post("/api/scan",{
            serialNo: e.target.serialNo.value, name: e.target.name.value},{withCredentials: true})
            .then((data)=>{console.log(data);setDataSet(data.data)})
            .catch((error)=>{console.log(error.message)})
    }
    const onClickity = () => {
        console.log(dataSet.serialNo);
        axios.post("/api/sign",{ serialNo: dataSet.serialNo},{withCredentials: true})
        .then((data)=>{console.log(data)})
        .catch((error)=>{console.log(error.message)})
        //setDataSet({ name:"", serialNo:"" })
        setClick(true);
    }
    
    async function SignLedger(serialNo){
        await axios.post("/api/sign",{
            serialNo: serialNo},{withCredentials: true})
            .then((data)=>{console.log(data);setDataSet(data.data)})
            .catch((error)=>{console.log(error.message)})
    }


    return (
        <>
       <form onSubmit={submitHandler}>
      <FormControl>
        <SimpleGrid columns={[1, null, 2]} spacing={2}>
            <GridItem >
                <FormLabel>Your ledgers </FormLabel>
                <Table variant="simple">
    <Thead>
        <Tr>
            <Th>Serial Number</Th>
            <Th>Batch Name</Th>
            <Th>Options</Th>
        </Tr>
    </Thead>
    <Tbody>
        <Tr>
            <Td>{dataSet.serialNo}</Td>
            <Td>{dataSet.name}</Td>
            
        </Tr>
    </Tbody>
</Table>
            </GridItem>
        </SimpleGrid>

        <FormErrorMessage>
        </FormErrorMessage>
      </FormControl>
    </form>

</>

    )
};