import React, { createContext, useContext } from 'react'

export const AuthContext = createContext()

//* with custom hook
export const useAuthContext =()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
