import React, { useRef, useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'

import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'

const Chats = () => {

  const history = useHistory()
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)

  console.log(user)

  const handleLogout = async () => {
    await auth.signOut()
    history.push('/')
  }

  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response.blob()

    return new File([data], 'userPhoto.jpg', {type: 'image/jpeg'})
  }

  useEffect(() => {
    if (!user) {
      history.push('/')
      return
    }

    axios.get('https://api.chatengine.io/users/me', {
      headers: {
        "project-id": '349c1f96-8657-4631-930e-dc50f2f85819',
        'user-name': user.email,
        "user-secret": user.uid
      }
    })
    .then(() => setLoading(false))
    .catch(() => {
      let formData = new FormData()
      formData.append('email', user.email)
      formData.append('username', user.email)
      formData.append('secret', user.uid)

      getFile(user.photoURL)
        .then((avatar) => {
          formData.append('avatar', avatar, avatar.name)

          axios.post('https://api.chatengine.io/users/', formData, {headers: { 'private-key':'55845699-302c-4987-b155-541c3e82d241' } })
          
          .then(() => setLoading(false))
          .catch((e) => console.log(e))
        })
    })

  }, [user, history])

  if (!user || loading) { return (<p>Loading ...</p>) }

  return (
      <div className="chats-page">

        <div className="nav-bar">

          <div className="logo-tab">
              UniChat
          </div>

          <div onClick={handleLogout.bind(null)} className="logout-tab">
            Logout
          </div>

        </div>

        <ChatEngine 
          height={"calc(100vh -  66px)"}
          projectID = '349c1f96-8657-4631-930e-dc50f2f85819'
          userName={user.email}
          userSecret={user.uid}
        />

      </div>
  )
}

export default Chats
