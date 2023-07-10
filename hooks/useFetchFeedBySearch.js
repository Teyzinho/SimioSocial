
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const useFetchFeedExcludingId = (params) => {
    const supabase = useSupabaseClient();
    const [feed, setFeed] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const fetchFeed = async () => {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .ilike('title', `%${params}%`)
                .order("created_at", { ascending: false });

            if (error) {
                setIsLoading(false)
                console.log("error fetching feed", error);
            }

            setIsLoading(false)
            setFeed(data)
        }

        fetchFeed();
        
    }, [supabase])

    return { feed , isLoading};
}

export default useFetchFeedExcludingId