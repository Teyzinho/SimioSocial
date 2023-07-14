import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";

const useAvatarImage = (url, supabase) => {
  if (!url) {
    return "/icons/person-circle.svg"; // Imagem de avatar padrão
  }

  const { data } = supabase.storage.from("avatars").getPublicUrl(url);

  return data?.publicUrl;
};

export const Avatar = ({ src, width }) => {
  const supabase = useSupabaseClient();
  const isExternal = src?.startsWith("http://") || src?.startsWith("https://");
  const [avatarImg, setAvatarImg] = useState("/icons/person-circle.svg");
  const data = useAvatarImage(src, supabase);

  useEffect(() => {
    const loadImage = async () => {
      if (!isExternal) {
        setAvatarImg(data);
      } else {
        setAvatarImg(src);
      }
    };

    loadImage();
  }, [src, supabase, isExternal,data]);

  return (
    <Image
      src={avatarImg}
      width={width ? width : 35}
      height={width ? width : 35}
      alt="Profile Picture"
      style={{
        borderRadius: "100%",
        objectFit: "cover",
      }}
    />
  );
};