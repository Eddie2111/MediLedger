import React from 'react';
import Router from 'next/router';
import {
    Button,ButtonGroup,Card,CardBody,CardFooter,
    Divider,GridItem,Heading,SimpleGrid,
    Stack,Text,
} from '@chakra-ui/react';

export const ComponentsDashboard = () => {
    const dataCards = [
        { title: "" , description: "", link: ""}
    ]
    const routing = (link) => {
        return () => {
            Router.push(link);
        }}

    return (
        <>
        <SimpleGrid columns={[1, null, 3]} spacing="2">
            <GridItem >
                <Card maxW='sm' background="blue.200">
                <CardBody>
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Create Ledger</Heading>
                    <Text>
                        Create a new ledger for a single shipment
                    </Text>

                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue' color="white" onClick={routing("/createLedger")}>
                        Create Now
                    </Button>
                    </ButtonGroup>
                </CardFooter>
                </Card>
            </GridItem>

            <GridItem >
                <Card maxW='sm' background="blue.200">
                <CardBody>
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Your Ledgers</Heading>
                    <Text>
                        Track your currently created ledgers
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue' onClick={routing("/trackLedger")}>
                        Track Ledgers
                    </Button>
                    </ButtonGroup>
                </CardFooter>
                </Card>
            </GridItem>
            <GridItem >
                <Card maxW='sm' background="blue.200">
            <CardBody>
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Your Profile</Heading>
                <Text>
                    Modify your profile
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={routing("/profileSetting")}>
                    Settings
                </Button>
                </ButtonGroup>
            </CardFooter>
                </Card>
            </GridItem>
        </SimpleGrid>
</>

    )
};