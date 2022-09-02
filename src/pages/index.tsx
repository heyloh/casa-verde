import type { NextPage } from 'next'
import { Menu } from '../components/Menu'
import { Newsletter } from '../components/Newsletter'
import { Head } from '../infra/components/Head'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Menu />
      <Newsletter />
    </>
  )
}

export default Home
