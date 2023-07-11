import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const useFetchFollowing = ( profileId ) => {
    const [amount, setAmount] = useState(null);
    const { supabaseClient } = useSessionContext();

    useEffect(() => {
        if(!profileId){
            return
        }
        
        const fetchFollowing = async () => {
            const { data, error } = await supabaseClient
                .from("followers")
                .select("*")
                .eq('user_id', profileId)

            if (error) {
                console.log("error fetchingFollowers", error)
            }

            setAmount(data.length)
        }

        fetchFollowing()
    }, [supabaseClient, profileId])

    return amount
}



export default useFetchFollowing;