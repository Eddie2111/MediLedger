import React from 'react';

import { ComponentsDashboard } from './components/componentsDashboard';
import { 
    Box,useColorModeValue,Link as StyledLink,
    Drawer,DrawerContent,useDisclosure
} from '@chakra-ui/react';
import { SidebarContent, NavItem, MobileNav } from './components/styledDashboard';


export default function Dashboard({children}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <ComponentsDashboard />

      </Box>
    </Box>
  );
}





