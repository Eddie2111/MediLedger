import React from 'react';
import Router from 'next/router';

import {
  FormErrorMessage,
  FormLabel, FormControl,
  Input, Button, SimpleGrid, GridItem
} from '@chakra-ui/react'


export const ComponentsCreateLedger = () => {
    const dataCards = [
        { title: "" , description: "", link: ""}
    ]
    const routing = (link) => {
        return () => {
            Router.push(link);
        }}

    return (
        <>
       <form onSubmit>
      <FormControl>
        <SimpleGrid columns={[1, null, 2]} spacing={2}>
            <GridItem >
                <FormLabel htmlFor='name'>Serial Number </FormLabel>
                <Input id='name' placeholder='name' />
            </GridItem>
            <GridItem >
                <FormLabel htmlFor='name'>Hash</FormLabel>
                <Input id='name' placeholder='name' />
            </GridItem>
        </SimpleGrid>

        <FormLabel htmlFor='name'>Your Name</FormLabel>
        <Input id='name' placeholder='name' />

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