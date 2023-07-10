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
      return null;
  }
  const { data } = supabase.storage.from("avatars").getPublicUrl(url);

  return data.publicUrl;
};

export const Avatar = ({src, width}) => {
    const supabase = useSupabaseClient();
    const [avatarImg, setAvatarimg] = useState()

    // Verifica se a URL começa com "http://" ou "https://"
    const isExternalUrl = (url) => {
      return url?.startsWith("http://") || url?.startsWith("https://");
    };

    const isExternal = isExternalUrl(src)

    useEffect(() => {
      if(!isExternal){
        const data = useLoadImage(src, supabase)
        setAvatarimg(data);
      }else{
        setAvatarimg(src)
      }
    },[src, supabase])

  return (
    <AvatarStyled
        src={avatarImg ? avatarImg : "/icons/person-circle.svg"}
        width={width ? width : 35}
        height={width ? width : 35}
        alt="Profile Picture"
    >  
    </AvatarStyled>
  )
}
