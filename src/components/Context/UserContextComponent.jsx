import React, {createContext, useEffect, useState } from 'react'

const userContext = createContext();

function UserContextComponent({children}) {

  const [userDetail,setUserDetail] = useState(JSON.parse(localStorage.getItem("user")));
  const [projects,setProjects] = useState([]);

  return (
    <userContext.Provider value={{userDetail,setUserDetail,projects,setProjects}}>
        {children}
    </userContext.Provider>
  )
}

export  {userContext,UserContextComponent};