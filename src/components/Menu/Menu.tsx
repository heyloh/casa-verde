import Image from "next/image"
import { MenuNavLink, MenuNavLinkProps } from "./MenuNavLink"
import { MenuHeader } from "./styles"

const links = [
  {
    url: '#',
    text: 'Como fazer'
  },{
    url: '#',
    text: 'Ofertas'
  },{
    url: '#',
    text: 'Depoimentos'
  },{
    url: '#',
    text: 'Vídeos'
  },{
    url: '#',
    text: 'Meu carrinho'
  },
] as MenuNavLinkProps[]

const Menu = () => {
  return (
    <MenuHeader>
      <a href="#">
        <Image src="/logo.svg" alt="Casa Verde" width={177} height={44.84} />
      </a>
      <nav>
        {links.map(link => (
          <MenuNavLink key={link.text} {...link} />
        ))}
      </nav>
    </MenuHeader>
  )
}

export default Menu
