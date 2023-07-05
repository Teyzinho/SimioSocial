"use client";

//npm i react-hook-form
//npm i uniqid
//npm i -D @types/uniqid

import { toast } from "react-hot-toast";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import uniqid from "uniqid";
import React, { useEffect, useRef, useState } from "react";
import {
  SupabaseClient,
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import { BsTrashFill, BsUpload } from "react-icons/bs";

import { Button } from "@/src/components/buttons/button";
import Typography from "@/src/components/display/Typography";
import useModal from "@/src/features/modal/useModal";

import {
  CreatePostForm,
  FileContainer,
  File,
  FileButton,
  DescContainer,
  TagContainer,
  TagButton,
  ShowTags,
  Tag,
  RemoveImgButton,
} from "./components/Post.styled";

const CreatePost = () => {
  const router = useRouter();
  const { session, isLoading: isLoadingUser } = useSessionContext();
  const supabaseClient = useSupabaseClient();

  const { openModal } = useModal();

  const inputFileRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, setValue, watch } = useForm({
    defaultValues: {
      title: "",
      description: "",
      video: null,
      image: null,
      tags: [],
    },
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTagAdd = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const imageFile = watch("image");

      if (!imageFile || !session) {
        toast.error("Campos Ausentes");
        console.log("Campos Ausentes");
        setIsLoading(false);
        return;
      }

      const uniqueID = uniqid();

      //Upload da imagem
      const { data: imgData, error: imgError } = await supabaseClient.storage
        .from("images")
        .upload(`image-${values.title}-${uniqueID}`, imageFile, {
          cacheControl: "3600", //indica que o arquivo pode ser armazenado em cache por 3600 segundos (ou 1 hora) antes de ser considerado inválido.
          upsert: false, //upsert: false indica que não será realizada uma operação de atualização caso já exista um arquivo com o mesmo nome no local de armazenamento "songs". Em vez disso, uma nova entrada será criada com um nome de arquivo exclusivo usando o título da música (values.title) e um identificador exclusivo (uniqueID).
        });

      if (imgError) {
        setIsLoading(false);
        
        return toast.error("Upload da imagem falhou!");;
      }

      const tagsArray = tags.map((tag) => tag);

      const { error: supabaseError } = await supabaseClient
        .from("posts")
        .insert({
          user_id: session.user.id,
          title: values.title,
          description: values.description,
          tags: JSON.stringify(tagsArray),
          image_url: imgData.path,
          video_url: "",
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error("Supabase Error");
      }

      router.push("/");
      setIsLoading(false);
      toast.success("Adicionado com sucesso!");
      reset();

    } catch (error) {
      toast.error("algo deu errado");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenFilePicker = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
    setValue("image", file);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  //Refireciona o usuário para página inicial se não estiver carregando e se o usuário não estiver carregado
  useEffect(() => {
    if (!isLoadingUser && !session) {
      router.replace("/");
      openModal();
    }
  }, [session, router, openModal]);

  return (
    <main>
      <CreatePostForm onSubmit={handleSubmit(onSubmit)}>
        <FileContainer>
          <File height={selectedImage !== null ? "true" : undefined}>
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              ref={inputFileRef}
              onChange={handleImageChange}
              id="image"
              disabled={isLoading}
            />
            {!selectedImage ? (
              <FileButton onClick={handleOpenFilePicker}>
                <BsUpload />
                <Typography variant="semi_bold">
                  Arraste e Solte ou clique para carregar
                </Typography>
              </FileButton>
            ) : (
              <>
                <img src={selectedImage} alt="Uploaded" />
                <RemoveImgButton onClick={handleRemoveImage}>
                  <BsTrashFill />
                </RemoveImgButton>
              </>
            )}
          </File>
        </FileContainer>

        <DescContainer>
          <input
            type="text"
            placeholder="Titulo"
            id="title"
            disabled={isLoading}
            {...register("title", { required: true })}
          />

          <input
            type="text"
            placeholder="Descrição"
            id="description"
            disabled={isLoading}
            {...register("description", { required: true })}
          />

          <TagContainer>
            <input
              type="text"
              placeholder="Digite uma tag"
              value={inputValue}
              onChange={handleInputChange}

              // id="tagsId"
              // disabled={isLoading}
              // {...register("tagsId", { required: true })}
            />
            <TagButton type="button" onClick={handleTagAdd}>
              Adicionar
            </TagButton>
            <ShowTags>
              {tags.map((tag) => (
                <Tag key={tag} onClick={() => handleTagRemove(tag)}>
                  #{tag}
                </Tag>
              ))}
            </ShowTags>
          </TagContainer>

          <Button
            type="submit"
            style={{
              padding: "15px 70px",
              marginTop: "auto",
              marginLeft: "auto",
            }}
            disabled={isLoading}
          >
            Publicar
          </Button>
        </DescContainer>
      </CreatePostForm>
    </main>
  );
};

export default CreatePost;
