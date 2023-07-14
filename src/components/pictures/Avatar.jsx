import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadImage = (url, supabase) => {
  if (!url) {
    return "/icons/person-circle.svg"; // Imagem de avatar padrão
  }

  const { data } = supabase.storage.from("avatars").getPublicUrl(url);

  return data?.publicUrl;
};

export const Avatar = ({ src, width }) => {
  const supabase = useSupabaseClient();
  const isExternal = src?.startsWith("http://") || src?.startsWith("https://");
  const [avatarImg, setAvatarImg] = useState(null);

  useEffect(() => {
    if (!isExternal) {
      const loadImage = async () => {
        const data = await useLoadImage(src, supabase);
        setAvatarImg(data);
      };

      loadImage();
    } else {
      setAvatarImg(src);
    }
  }, [src, supabase, isExternal]);

  return (
    <img
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
