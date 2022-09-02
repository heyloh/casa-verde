import { NavLink } from "./styles"

export interface MenuNavLinkProps {
  url: string
  text: string
}

const MenuNavLink = ({ url, text }: MenuNavLinkProps) => {
  return (
    <NavLink href={url}>{text}</NavLink>
  )
}

export default MenuNavLink
