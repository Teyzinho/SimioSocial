
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const useFetchSavedPostsByUserName = (userName) => {
    const supabase = useSupabaseClient();
    const [feed, setFeed] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [profile, setProfile] = useState(null);
    const [loadingProfile, setIsLoadingProfile] = useState(false)

    useEffect(() => {
        const fetchProfile = async () => {
            setIsLoadingProfile(true)
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("full_name", userName)
                .single();
            if (error) {
                console.log("error fetching profile", error);
            }
            setProfile(data);
            setIsLoadingProfile(false)
        };

        fetchProfile();
    }, [userName, supabase]);

    useEffect(() => {
        const fetchFeed = async () => {
            setIsLoadingData(true);

            try {
                const { data, error } = await supabase
                    .from("saved_posts")
                    .select("*, posts(*)")
                    .order("created_at", { ascending: false })
                    .eq("user_id", profile?.id);

                if (error) {
                    console.log("Error fetching feed", error);
                } else {
                    setFeed(data);
                }
            } catch (error) {
                console.log("Error fetching feed", error);
            }

            setIsLoadingData(false);
        };

        if (profile && !loadingProfile) {
            fetchFeed();
        }
    }, [supabase, profile, loadingProfile]);

    return { feed: feed.map((item) => ({ ...item.posts })), isLoadingData };
};

export default useFetchSavedPostsByUserName;
