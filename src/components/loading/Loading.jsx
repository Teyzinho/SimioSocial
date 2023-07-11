import Image from "next/image"
import styled from "styled-components"

const LoadingWrapper = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;

    & img{
        margin-top: 56px;
    }
`

const Loading = () => {
  return (
    <LoadingWrapper>
        <Image
            src="/images/loading.svg"
            alt="loading"
            width={50}
            height={50}
        />
    </LoadingWrapper>
  )
}

export default Loading