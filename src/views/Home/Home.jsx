import { useEffect, useState } from 'react'
import { UserProvider, useUser } from '../../assets/context/UserContext'
import Profile from '../../components/Profile/Profile'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { user } = useUser()

  useEffect(() => {
    if (user.name) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [user])

  if (loading) return <h1>Loading...</h1>
  return (
    // <UserProvider>
    <Profile user={user} />
    // </UserProvider>
  )
}

export default Home
