import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const useGetProfileById = (userId) => {
    const supabase = useSupabaseClient();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (!userId) {
            return;
        }

        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", userId)
                .single();

            if (error) {
                console.log("error fetching profile", error);
            }

            setProfile(data);
        };

        fetchProfile();
    }, [userId, supabase]);

    return profile;
};

export default useGetProfileById;
