import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Icon,
  Img,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  useMenuButton,
  Link as ChakraLink,
  Text
} from "@chakra-ui/react";
import { ChevronsUpDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import appEnv from "~/utils/app-env";

export const NavAccountButton = (props: FlexProps) => {
  const buttonProps = useMenuButton(props);

  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="stale.500"
      px="4"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: "slate.600" }}
      _focus={{ shadow: "outline", boxShadow: "none" }}
    >
      <HStack flex="1" spacing="3">
        <Img w="8" h="8" rounded="md" objectFit="cover" src="/avatar.png" alt="Nama User" />
        <Box textAlign="start">
          <Box noOfLines={1} fontWeight="semibold">
            Nuradiyana
          </Box>
          <Box fontSize="xs" color="gray.400">
            ID 2022.01.01.001
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <Icon as={ChevronsUpDown} />
      </Box>
    </Flex>
  );
};

export const NavAccount = () => {
  return (
    <Menu matchWidth>
      <NavAccountButton />
      <MenuList shadow="lg" py="4" color={useColorModeValue("stale.500", "stale.200")} px="3">
        <MenuItem
          rounded="md"
          as={ChakraLink}
          isExternal
          _hover={{
            textDecoration: "none"
          }}
          href={`${appEnv.adminPageUrl}?token=${localStorage.getItem("token") || ""}`}
        >
          <HStack justify="space-between" w="full">
            <Text>Halaman Admin</Text> <Icon as={ExternalLink} />
          </HStack>
        </MenuItem>
        <MenuDivider />
        <MenuItem rounded="md" as={Link} href="/auth/login">
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
