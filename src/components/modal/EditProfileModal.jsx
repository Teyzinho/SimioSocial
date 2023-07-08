"use client";

import styled from "styled-components";
import { AiOutlineClose } from "react-icons/Ai";
import useLoadImage from "@/hooks/useLoadImage";
import { useRef, useState } from "react";
import { BsTrashFill, BsUpload } from "react-icons/bs";
import { RemoveImgButton } from "@/app/create-post/components/Post.styled";
import { Avatar } from "../pictures/Avatar";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  background-color: #00000040;
`;

const Modal = styled.div`
  position: relative;
  width: 700px;
  height: fit-content;
  border-radius: 5px;
  background-color: #212226;
  padding: 25px 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  color: #fff;

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: white;
`;

const BannerFile = styled.div`
  position: relative;

  & input {
    display: none;
  }

  & img {
    height: 140px;
    width: 100%;
    object-fit: cover;
  }
`;

const FileButton = styled.button`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    color: #fff;
    position: absolute;
    width: 30px;
    height: 30px;
  }
`;

const AvatarFile = styled.div``;

const EditProfileModal = ({ onClose, profile }) => {
  const supabaseClient = useSupabaseClient();
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const bannerRef = useRef();

  const bannerImg = useLoadImage(profile?.banner_url);
  const profileImg = profile.avatar_url;

  // Verifica se a URL começa com "http://" ou "https://"
  const isExternalUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const { register, handleSubmit, reset, setValue, watch } = useForm({
    defaultValues: {
      banner: null,
      avatar: null,
    },
  });

  const handleOpenBanner = () => {
    if (bannerRef.current) {
      bannerRef.current.click();
    }
  };

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedBanner(e.target.result);
    };

    reader.readAsDataURL(file);
    setValue("banner", file);
  };

  const handleRemoveImage = () => {
    setSelectedBanner(null);
    setValue("banner", null);
  };

  const onSubmit = async (values) => {
    console.log(values);

    try {
      setIsLoading(true);
      //Upload banner
      if (values.banner) {
        // Se não existir banner no perfil : "upload Banner"
        if (!bannerImg) {
          const { data: bannerData, error: bannerError } =
            await supabaseClient.storage
              .from("images")
              .upload(`banner-${profile.id}`, values.banner, {
                cacheControl: 3600,
                upsert: false,
              });

          if (bannerError) {
            setIsLoading(false);
            return toast.error("Upload do banner falhou!");
          }

          const { error } = await supabaseClient
            .from("profiles")
            .update({ banner_url: bannerData.path })
            .eq("id", profile.id);

          if (error) {
            setIsLoading(false);
            return toast.error("Supabase Error");
          }
          setIsLoading(false);
          toast.success("Perfil atualizado com sucesso!");
          onClose();

          // Se  existir banner no perfil : "uploadate Banner"
        } else {
          const { data: bannerData, error: bannerError } =
            await supabaseClient.storage
              .from("images")
              .update(`banner-${profile.id}`, values.banner, {
                cacheControl: 3600,
                upsert: true,
              });
          if (bannerError) {
            setIsLoading(false);
            return toast.error("Upload do banner falhou!");
          }

          setIsLoading(false);
          toast.success("Perfil atualizado com sucesso!");
          onClose();
        }
      }

      // Update Avatar
      if (values.avatar) {
        //Verifica se a url da imagem é externa ou não
        if (isExternalUrl(profileImg)) {
          
        } else {

        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Erro ao atualizar o perfil:", error);
      toast.error("Erro ao atualizar o perfil. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalContainer>
      <Modal>
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Banner */}
          <BannerFile>
            <input
              ref={bannerRef}
              type="file"
              accept="image/*"
              id="banner"
              name="banner"
              onChange={handleBannerChange}
              disabled={isLoading}
            />
            {/* Verifica se algum banner foi selecionado */}
            {selectedBanner ? (
              <>
                <img src={selectedBanner} />
                <RemoveImgButton onClick={handleRemoveImage}>
                  <BsTrashFill />
                </RemoveImgButton>
              </>
            ) : (
              <FileButton type="button" onClick={handleOpenBanner}>
                <BsUpload />
                <img src={bannerImg ? bannerImg : "/images/banner.jpg"} />
              </FileButton>
            )}
          </BannerFile>

          {/* Avatear */}
          <AvatarFile>
            <input
              type="file"
              accept="image/*"
              id="avatarimg"
              disabled={isLoading}
            />
            {selectedAvatar ? (
              <></>
            ) : (
              <Avatar
                src={profileImg ? profileImg : "/images/profile.png"}
                width={75}
              />
            )}
          </AvatarFile>
          <button type="submit">Salvar</button>
        </form>
      </Modal>
    </ModalContainer>
  );
};

export default EditProfileModal;
