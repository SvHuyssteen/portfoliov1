import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  chakra,
  Stack,
  Image,
  Divider,
  textDecoration,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu } from 'react-icons/fi';
import Logo from '../public/Shaun_Owl_Logo.png';
import NextImage from 'next/image';

const ChakraImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

export const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  if (isDesktop) {
    return (
      <>
        <Box as='section' pb={{ base: '12', md: '24' }}>
          <Flex
            as='nav'
            pos='sticky'
            vh={5}
            top={0}
            left={0}
            width='100%'
            height={16}
            borderBottomRadius={'md'}
            bg='bg-surface'
            boxShadow={'md'}
            justify='space-between'
          >
            <Flex align='center' px={16}>
              <ChakraImage src={Logo} height={50} width={60}></ChakraImage>
            </Flex>
            <Stack direction='row' spacing={4} align='center' mx={6} px={16}>
              <Button
                bg={'WhiteAlpha'}
                textDecoration='underline'
                _hover={{
                  bg: 'purple.600',
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                About Me
              </Button>
              <Button
                bg={'WhiteAlpha'}
                textDecoration='underline'
                _hover={{
                  bg: 'purple.600',
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Skills
              </Button>
              <Button
                bg={'WhiteAlpha'}
                textDecoration='underline'
                _hover={{
                  bg: 'purple.600',
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Media
              </Button>
            </Stack>
          </Flex>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box as='section' pb={{ base: '12', md: '24' }}>
          <Flex
            as='nav'
            pos='sticky'
            vh={5}
            top={0}
            left={0}
            width='100%'
            height={16}
            borderBottomRadius={'md'}
            bg='bg-surface'
            boxShadow={'md'}
            justify='space-between'
          >
            <Flex align='center' px={16}>
              <ChakraImage src={Logo} height={50} width={60}></ChakraImage>
            </Flex>
            <Flex justify={'center'} align='center' px={8}>
              <Menu autoSelect={false}>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<FiMenu />}
                  variant='outline'
                  colorScheme='purple'
                  _active={{ bg: 'purple.600', color: '#ffffff' }}
                />
                <MenuList>
                  <MenuItem _hover={{ bg: 'purple.600', color: '#ffffff' }}>
                    About Me
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem _hover={{ bg: 'purple.600', color: '#ffffff' }}>
                    Skills
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem _hover={{ bg: 'purple.600', color: '#ffffff' }}>
                    Media
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }
};
export default NavBar;
