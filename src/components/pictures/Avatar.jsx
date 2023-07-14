import styled  from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const AvatarStyled = styled(Image)`
    border-radius: 100%;
    object-fit: cover;
`

const useLoadImage = (url, supabase) => {
  if (!url) {
    return "/icons/person-circle.svg"; // Imagem de avatar padrão
  }

  const { data } = supabase.storage.from("avatars").getPublicUrl(url);

  return data?.publicUrl;
};

export const Avatar = ({ src, width }) => {
  const supabase = useSupabaseClient();
  
  // Verifica se a URL começa com "http://" ou "https://"
  const isExternalUrl = (url) => {
    return url?.startsWith("http://") || url?.startsWith("https://");
  };

  const isExternal = isExternalUrl(src);

  const [avatarImg, setAvatarimg] = useState(() => {
    if (isExternal) {
      return src;
    } else {
      return useLoadImage(src, supabase);
    }
  });

  useEffect(() => {
    if (!isExternal) {
      const data = useLoadImage(src, supabase);
      setAvatarimg(data);
    }
  }, [src, supabase]);

  return (
    <AvatarStyled
      src={avatarImg}
      width={width ? width : 35}
      height={width ? width : 35}
      alt="Profile Picture"
    />
  );
};
