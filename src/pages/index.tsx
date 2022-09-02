import type { NextPage } from 'next'
import { Menu } from '../components/Menu'
import { Head } from '../infra/components/Head'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Menu />
    </>
  )
}

export default Home
