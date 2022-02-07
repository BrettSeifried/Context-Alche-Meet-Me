import { useUser } from '../../assets/context/UserContext'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'

const Layout = ({ children }) => {
  const { user } = useUser()
  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      <main className="flex flex-col flex-1 justify-center items-center">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
