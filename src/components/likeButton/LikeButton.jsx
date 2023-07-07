"use client";

import { useUser } from "@/hooks/useUser";
import useModal from "@/src/features/modal/useModal";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { AiFillHeart , AiOutlineHeart } from "react-icons/Ai";

import { IconButton } from "../buttons/IconButton";

const LikeButton = ({ postId, user }) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const authModal = useModal();

  const [isLiked, setIsLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(null);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    // fetch if user liked
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("likes")
        .select("*")
        .eq("user_id", user.id)
        .eq("post_id", postId)
        .single();

        if(!error && data){
          setIsLiked(true)
        }
    };

    fetchData();
  }, [postId, supabaseClient, user?.id]);


  useEffect(() => {
    const fetchAllData = async () =>{
      const {data , error} = await supabaseClient
        .from("likes")
        .select("*")
        .eq("post_id", postId)

      if(error){
        console.log("error fetching like",error)
      }else{
        setLikesAmount(data.length)
      }
    }

    fetchAllData();
  })

  const handleLike = async () =>{
    if(!user){
      return authModal.openModal("auth");
    }

    if(isLiked){
      const {error} = await supabaseClient
        .from('likes')
        .delete()
        .eq('user_id',user.id)
        .eq('post_id',postId)

        if(error){
          toast.error(error.message)
        }else{
          setIsLiked(false);
        }
    }else{
      const {error} = await supabaseClient
        .from('likes')
        .insert({
          'post_id': postId,
          'user_id': user.id
        })

        if(error){
          toast.error(error.message)
        }else{
          setIsLiked(true);
          toast.success("Curtiu");
        }
    }
    router.refresh();
  }

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  return (
    <IconButton
      onClick={handleLike}
      color="white"
    >
      <Icon />
      {likesAmount}
    </IconButton>
  );
};

export default LikeButton;
