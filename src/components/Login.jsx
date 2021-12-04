import React from 'react'
import firebase from 'firebase/app'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import 'firebase/app'

import { auth } from '../firebase'

const Login = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>

        <h2>
          Welcome in UNichat 
        </h2>
     
        <div
         className ='login-button google'
         onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}

        >
         <GoogleOutlined /> Sign in with Google
        </div>

        <br />
        <br />

        <div
         className ='login-button facebook'
         onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
         >
         <FacebookOutlined />  sign in with aFacebbok
        </div>

      </div>
    </div>
  )
}

export default Login
