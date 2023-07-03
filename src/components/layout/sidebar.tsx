import { Box, Flex, Stack } from "@chakra-ui/react";
import { Home } from "lucide-react";
import { NavAccount } from "./nav-account";
import { NavGroup } from "./nav-group";
import { NavItem } from "./nav-item";
import { useMemo } from "react";
import { appMenus } from "./menus";

export const Sidebar = () => {
  const renderMenus = useMemo(
    () =>
      appMenus.map((group, key) => (
        <NavGroup label={group.label} key={key}>
          {group.menus.map((menu) => (
            <NavItem {...menu} key={menu.href} />
          ))}
        </NavGroup>
      )),
    []
  );

  return (
    <Box
      maxW={{ base: "full", sm: "2xs" }}
      w={{ base: "full", sm: "2xs" }}
      bg="stale.600"
      color="white"
      fontSize="sm"
      overflowY="auto"
    >
      <Flex h="full" direction="column" px="4" py="4">
        <NavAccount />
        <Stack spacing="8" flex="1" overflowY="scroll" mt={2} pt="6">
          <Stack spacing="1">
            <NavItem icon={Home} label="Home" href="/" />
          </Stack>
          {renderMenus}
        </Stack>
      </Flex>
    </Box>
  );
};
