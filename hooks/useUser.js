import { useSessionContext,
   useUser as useSupaUser 
} from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(
  undefined
);

export const MyUserContextProviders = (props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();
  //useSupaUser é chamado para obter as informações do usuário.

  const accessToken = session?.access_token ?? null;

  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const getUserDetails = () => supabase.from("profile").select("*").single();

  useEffect(() => {
    if(user && !isLoadingData && !userDetails){
      setIsLoadingData(true);
      Promise.allSettled([getUserDetails()]).then(
        (results) => {
          const userDetailsPromise = results[0];

          if (userDetailsPromise.status === "fulfilled") {
            setUserDetails(userDetailsPromise.value.data);
          }

          setIsLoadingData(false);
        }
      )
    }else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
    }
  }, [user, isLoadingUser])

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
  };
  
  return <UserContext.Provider value={value} {...props} />;
}

export const useUser = () =>{
  const context = useContext(UserContext);
  
  if (context === undefined){
      throw new Error("useUser must be used within a MyUserContextProvider");
  }
  return context;
}

