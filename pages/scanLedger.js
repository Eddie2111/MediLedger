import React,{useEffect,useState} from 'react';
import axios from 'axios';
import ComponentsScanLedger from './components/componentsScanLedger';
import { 
    Box,useColorModeValue,Link as StyledLink,
    Drawer,DrawerContent,useDisclosure
} from '@chakra-ui/react';
import { SidebarContent, NavItem, MobileNav } from './components/styledDashboard';
import { useRouter } from 'next/router';
import { Loader } from './components/loader';


export default function Dashboard({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const fetchUser = async () => {
            const res = await axios.get('/api/auth');
            setUser(res.data);
            if(res.data.route){
                router.push(res.data.route);
            }
        }
        fetchUser();
    },[])
    if(!user){
        
        return <Loader/>
    }
    if(user){
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />

      <Box ml={{ base: 0, md: 60 }} p="4">
      {/* Components are Here */}
        <ComponentsScanLedger />

      </Box>
    </Box>
  );
    }
}





