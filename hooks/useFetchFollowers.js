import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const useFetchFollowers = ( profileId ) => {
    const [amount, setAmount] = useState(null);
    const { supabaseClient } = useSessionContext();

    useEffect(() => {
        if(!profileId){
            return
        }
        
        const fetchFollowers = async () => {
            const { data, error } = await supabaseClient
                .from("followers")
                .select("*")
                .eq('following_id', profileId)

            if (error) {
                console.log("error fetchingFollowers", error)
            }

            setAmount(data.length)
        }

        fetchFollowers()
    }, [supabaseClient, profileId])

    return amount
}



export default useFetchFollowers;