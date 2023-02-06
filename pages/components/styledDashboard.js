import Link from "next/link";
import styled from "styled-components";
import {
    FiHome,FiTrendingUp,FiCompass,FiStar,
    FiSettings,FiMenu,FiBell,FiChevronDown, FiLogOut,
  } from 'react-icons/fi';
  import {VscGitPullRequestCreate} from 'react-icons/vsc';
  
import {
    IconButton,
    Avatar,  Box,CloseButton,Flex,HStack,VStack,
    Icon,useColorModeValue as modValue,Link as StyledLink,Drawer,DrawerContent,Text,
    useDisclosure,Menu,MenuButton,
    MenuDivider,MenuItem,MenuList
  } from '@chakra-ui/react';
import axios from "axios";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


export const SidebarContent = ({ onClose, ...rest }) => {
    const [role,setRole] = useState("");
    const [notPrimary, setNotPrimary] = useState();
    useEffect(()=>{
        axios.get('/api/auth',{withCredentials:true}).then((res)=>{
            setRole(res.data.dataset.userType);
            if(role === "MANUFRACTURER"){
                setNotPrimary(true);
                console.log(notPrimary,role);
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
        const LinkItems = [
            { name: 'Home', icon: FiHome, link:"/dashboard" },
            { name: 'Create Ledger', icon: VscGitPullRequestCreate, link:"/createLedger"},
            { name: 'Current Ledgers', icon: FiTrendingUp, link:"/currentLedgers" },
            { name: 'Explore', icon: FiCompass, link:"/explore" },
            { name: 'Favourites', icon: FiStar, link:"/favourite" },
            { name: 'Settings', icon: FiSettings, link:"/settings" },
            { name: 'Log out', icon: FiLogOut, link:"/logout" }
        ];
        const LinkItems1 = [
            { name: 'Home', icon: FiHome, link:"/dashboard" },
            { name: 'Scan Ledger', icon: VscGitPullRequestCreate, link:"/scanLedger"},
            { name: 'Current Ledgers', icon: FiTrendingUp, link:"/currentLedgers" },
            { name: 'Explore', icon: FiCompass, link:"/explore" },
            { name: 'Favourites', icon: FiStar, link:"/favourite" },
            { name: 'Settings', icon: FiSettings, link:"/settings" },
            { name: 'Log out', icon: FiLogOut, link:"/logout" }
        ];


    return (
      <Box
        transition="3s ease"
        bg={modValue('#1c1c1c', 'gray.100')} // sidebar colors are here
        borderRight="1px"
        color={modValue('white', 'white')}
        borderRightColor={modValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            MediLedger 
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>

        {notPrimary ? LinkItems.map((link, index) => (
          <NavItem key={index} links={link.link} icon={link.icon}>{link.name}</NavItem>
        )) :
	LinkItems1.map((link, index) => (
          <NavItem key={index} links={link.link} icon={link.icon}>{link.name}</NavItem>
        ))
}
      </Box>
    );
  };
export const NavItem = ({ icon, links, children, ...rest }) => {
    return (
      
      <a href={links} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex align="center" p="4" mx="4" borderRadius="lg" role="group" cursor="pointer"
          _hover={{ bg: 'cyan.400', color: 'white', }} {...rest}>
          {icon && (
            <Icon mr="4" fontSize="16" _groupHover={{ color: 'white', }} as={icon} /> )}
          {children}
        </Flex>
      </a>
    );
  };
export const MobileNav = ({ onOpen, ...rest }) => {
    const Router = useRouter();
    const [name,setName] = useState("");
    const [role,setRole] = useState("");
    useEffect(()=>{
        axios.get('/api/auth',{withCredentials:true}).then((res)=>{
            setName(res.data.dataset.name);
            setRole(res.data.dataset.userType);
        }).catch((err)=>{
            console.log(err);
        })
    })    
    return (
      <Flex ml={{ base: 0, md: 60 }} px={{ base: 4, md: 4 }} height="20" alignItems="center" bg={modValue('white', 'gray.900')}
        borderBottomWidth="1px" borderBottomColor={modValue('gray.200', 'gray.700')} justifyContent={{ base: 'space-between', md: 'flex-end' }} {...rest}>
        <IconButton display={{ base: 'flex', md: 'none' }} onClick={onOpen} variant="outline" aria-label="open menu" icon={<FiMenu />} />
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold">
          Logo
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">{name}</Text>
                    <Text fontSize="xs" color="gray.600">
                      {role}
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={modValue('white', 'gray.900')}
                borderColor={modValue('gray.200', 'gray.700')}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem> <Link href="/logout">Sign out</Link></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };

export const StyledDashboard = styled.div`
    display: flex;
    margin-left:20vw;
    color:black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 0.5rem;
    background: #fff;
    font-family: 'Inter', sans-serif;
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;
        padding: 1.5rem;
        text-align: center;
    }
    .footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer img {
        margin-left: 0.5rem;
    }
    `;