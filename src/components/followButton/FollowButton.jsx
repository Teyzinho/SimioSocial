"use client";
import { useEffect, useState } from "react";
import { Button } from "../buttons/button";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useModal from "@/src/features/modal/useModal";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const FollowButton = ({ userId, followId }) => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const [isFollowing, setIsFollowing] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    if (!userId) {
      return;
    }
    const fetchUser = async () => {
      const { data, error } = await supabase
        .from("followers")
        .select("*")
        .eq("following_id", followId)
        .eq("user_id", userId)
        .single();

      if (error) {
        console.log("error fetching FollowButton", error);
      }

      if (data) {
        setIsFollowing(true);
      }
    };
    fetchUser();
  }, [supabase, userId, followId]);

  if (userId === followId) {
    return null;
  }

  const handleFollow = async () => {
    if (!userId) {
      return openModal("auth");
    }

    if (isFollowing) {
      const { error } = await supabase
        .from("followers")
        .delete()
        .eq("following_id", followId)
        .eq("user_id", userId);

      if (error) {
        toast.error(error.message);
      } else {
        setIsFollowing(false);
      }
    } else {
      const { error } = await supabase.from("followers").insert({
        following_id: followId,
        user_id: userId,
      });

      if (error) {
        toast.error(error.message);
      } else {
        setIsFollowing(true);
        toast.success("Seguindo");
      }
    }
    router.refresh();
  };

  return (
    <div>
      {isFollowing ? (
        <Button onClick={handleFollow}>Seguindo</Button>
      ) : (
        <Button bgcolor="transparent" onClick={handleFollow}>
          Seguir
        </Button>
      )}
    </div>
  );
};

export default FollowButton;
