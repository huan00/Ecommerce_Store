import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const id = useParams()
  const [userProfile, setUserProfile] = useState([])
  const [login, setLogin] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:3001/user/${id}`)
      console.log(res)
      setUserProfile(res.data)
    }
  }, [])
  return <div>Profile</div>
}

export default Profile
