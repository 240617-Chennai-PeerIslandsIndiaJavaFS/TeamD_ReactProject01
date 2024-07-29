import React, {createContext, useState } from 'react'

const userContext = createContext();

function UserContextComponent({children}) {

  const [userDetail,setUserDetail] = useState({});

  return (
    <userContext.Provider value={{userDetail,setUserDetail}}>
        {children}
    </userContext.Provider>
  )
}

export  {userContext,UserContextComponent};