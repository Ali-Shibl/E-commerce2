import { createContext, useState } from "react";

export const Auth=createContext('')




function AuthContextProvider({children}) {


    const [userLogin, setuserLogin] = useState(!!localStorage.getItem('tokenUser'))
    


return <Auth.Provider value={{userLogin, setuserLogin}}>

    {children}

</Auth.Provider>


}

export default AuthContextProvider;