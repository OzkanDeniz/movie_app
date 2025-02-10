import React, { createContext, useContext } from 'react'

export const AuthContext = createContext()

//* with custom hook
export const useAuthContext =()=>{
    return useContext(AuthContext)
}

const AuthProvider = () => {
  return (
    <div>
      
    </div>
  )
}

export default AuthProvider
