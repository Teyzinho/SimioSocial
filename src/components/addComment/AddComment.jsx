"use client";

import { toast } from "react-hot-toast";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { useSessionContext } from "@supabase/auth-helpers-react";

import { Avatar } from "../pictures/Avatar";
import { Button } from "../buttons/button";
import { Input } from "../inputs/input";
import useModal from "@/src/features/modal/useModal";
import useGetProfileById from "@/hooks/useGetProfileById";

const AddComment = ({ user, postId }) => {
  const { supabaseClient } = useSessionContext();
  const [isLoading, setIsLoading] = useState(false);
  const {openModal} = useModal()

  const profile = useGetProfileById(user?.id)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (values) => {
    if(!user){
      openModal("auth");
      return;
    }
    try {
      setIsLoading(true)
      console.log(values)

      if(!values.content){
        toast.error("Digite um comentário");
        setIsLoading(false);
        return;
      }

      const {error} = await supabaseClient.from("comments").insert({
        content: values.content,
        user_id:user.id,
        post_id:postId,
      })

      if (error) {
        setIsLoading(false);
        return toast.error("Supabase Error");
      }

      setIsLoading(false);
      toast.success("Comentado com sucesso!");
      reset();

    } catch (error) {
      toast.error("algo deu errado");
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar src={profile?.avatar_url} alt="profile-pct" width={50} height={50} />
      <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", width:"100%", alignItems:"center"}}>
        <Input
          placeholder="Deixe um comentário"
          id="content"
          disabled={isLoading}
          {...register("content", { required: true })}
        />
        <Button type="submit">Comentar</Button>
      </form>
    </div>
  );
};

export default AddComment;
