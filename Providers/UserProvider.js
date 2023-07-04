"use client"

import { MyUserContextProviders } from "@/hooks/useUser";

const UserProvider = ({children}) =>{
    return(
        <MyUserContextProviders>
            {children}
        </MyUserContextProviders>
    )
}

export default UserProvider