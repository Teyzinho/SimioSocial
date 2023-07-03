import styled  from "styled-components";
import Image from "next/image";

const AvatarStyled = styled(Image)`
    border-radius: 100%;
    object-fit: cover;
`

export const Avatar = ({src, width}) => {
  return (
    <AvatarStyled
        src={src ? src : "/icons/person-circle.svg"}
        width={width ? width : 35}
        height={width ? width : 35}
        alt="Profile Picture"
    >
      
    </AvatarStyled>
  )
}
