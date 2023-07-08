import { useSupabaseClient } from "@supabase/auth-helpers-react"

const useLoadImage = (url) => {
    const supabase = useSupabaseClient();
    if (!url) {
        return null;
    }
    const { data } = supabase.storage.from("images").getPublicUrl(url);

    return data.publicUrl;
};

export default useLoadImage;