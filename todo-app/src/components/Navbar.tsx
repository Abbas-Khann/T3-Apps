import logo from "../../public/logo.png";
import Image from 'next/image';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { api } from '../utils/api';

export default function Navbar(): JSX.Element {
  const { data: sessionData } = useSession();
    
    const { data: secretMessage } = api.example.getSecretMessage.useQuery(
        undefined,
        { enabled: sessionData?.user === undefined } ,
    );
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image width={180} height={180} src={logo} alt="logo" />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
                {/* setup the authentication here  */}
                {/* { sessionData &&  } */}
                { !sessionData ? 
                <Button
                onClick={() => signIn()}
                >Sign in
                </Button> 
                :  
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                  </Center>
                  <br />
                  <Center>
                    {sessionData && <p>Logged in as {sessionData.user?.name}</p>}
                    {secretMessage && <p>{secretMessage}</p>}
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem> */}
                  <MenuItem
                  onClick={() => signOut()}
                  >Logout</MenuItem>
                </MenuList>
              </Menu>
                }
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
