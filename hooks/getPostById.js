import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const getPostById = (postId) => {
  const supabase = useSupabaseClient();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) {
        console.log("no postId");
        return null;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("id", postId)
          .single();

        if (error) {
          setError(error.message);
        } else {
          setPost(data || {});
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, supabase]);

  return { post, loading, error };
};

export default getPostById;