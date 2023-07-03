import { As } from "@chakra-ui/react";
import { ShoppingBag } from "lucide-react";

export interface MenuGroup {
  label: string;
  menus: Array<Menu>;
}

export interface Menu {
  label: string;
  icon: As;
  href: string;
}

export const appMenus: Array<MenuGroup> = [
];
