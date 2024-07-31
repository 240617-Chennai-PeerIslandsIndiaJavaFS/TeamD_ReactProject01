import React, {createContext, useState } from 'react'

const userContext = createContext();

function UserContextComponent({children}) {

  const [userDetail,setUserDetail] = useState({});
  const [projects,setProjects] = useState([]);

  return (
    <userContext.Provider value={{userDetail,setUserDetail,projects,setProjects}}>
        {children}
    </userContext.Provider>
  )
}

export  {userContext,UserContextComponent};