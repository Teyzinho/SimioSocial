"use client";

import { useUser } from "@/hooks/useUser";
import useModal from "@/src/features/modal/useModal";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import { IconButton } from "../buttons/IconButton";
import { toast } from "react-hot-toast";

const SavePostButton = ({ postId, user }) => {
  
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const authModal = useModal();

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    // fetch if user saveds posts
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("saved_posts")
        .select("*")
        .eq("user_id", user.id)
        .eq("post_id", postId)
        .single();

      if (!error && data) {
        setIsSaved(true);
      }
    };

    fetchData();
  }, [postId, supabaseClient, user?.id]);

  const handleSave = async () => {
    if (!user) {
      return authModal.openModal("auth");
    }

    if (isSaved) {
      const { error } = await supabaseClient
        .from("saved_posts")
        .delete()
        .eq("user_id", user.id)
        .eq("post_id", postId);

      if (error) {
        toast.error(error.message);
      } else {
        setIsSaved(false);
      }
    } else {
      const { error } = await supabaseClient.from("saved_posts").insert({
        post_id: postId,
        user_id: user.id,
      });

      if (error) {
        toast.error(error.message);
      } else {
        setIsSaved(true);
        toast.success("Salvo!");
      }
    }
    router.refresh();
  };

  const Icon = isSaved ? BsFillBookmarkCheckFill : BsBookmark;

  return (
    <IconButton onClick={handleSave} color="white">
      <Icon />
    </IconButton>
  );
};

export default SavePostButton;
