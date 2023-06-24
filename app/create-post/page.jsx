"use client";

import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Button } from "@/src/components/buttons/button";
import { BsTrashFill,BsUpload } from "react-icons/bs";
import Typography from "@/src/components/display/Typography";
import { device } from "@/style/Breakpoints";

const CreatePostContainer = styled.div`
  width: 1000px;
  min-height: 600px;
  margin: auto;
  margin-top: 56px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 5px;
  box-shadow: -3px 4px 9px -1px rgba(0, 0, 0, 0.363);

  display: flex;
  padding: 50px;

  @media ${device.md}{
    width: 600px;
    flex-direction: column;
    gap: 52px;
  }
  @media ${device.sm} {
    width: 100%;
    flex-direction: column;
    padding: 0;

  }
  @media ${device.xs} {
    width: 100%;
    flex-direction: column;
  }

`;

const FileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const File = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  max-width: 300px;
  height: ${({ height }) => (height ? "fit-content" : "535px")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

const FileButton = styled.button`
    width: 80%;
    
    & svg{
        width: 35px;
        height: 35px;
        padding-bottom: 16px;
    }
`;

const DescContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 56px;

  & input {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid gray;
    padding-bottom: 4px;
    &:focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    }
  }

  & > :first-child {
    font-size: 2.5rem;
  }
`;

const TagContainer = styled.div``;

const TagButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 8px;
`;

const ShowTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-top: 10px;
`;

const Tag = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.blue};
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  font-weight: 500;

  &::after {
    color: black;
    content: "X";
    position: absolute;
    right: -8px;
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    opacity: 0;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

const RemoveImgButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.red};
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 25px;
`;

const CreatePost = () => {
  const inputFileRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleSubmitPost = () => {};

  const handleOpenFilePicker = () => {
    inputFileRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
    console.log(selectedImage === null);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <main>
      <CreatePostContainer>
        <FileContainer>
          <File height={selectedImage !== null ? "true" : undefined}>
            <input
              type="file"
              ref={inputFileRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            {!selectedImage ? (
              <FileButton onClick={handleOpenFilePicker}>
                <BsUpload/>
                <Typography variant="semi_bold">
                    Arraste e Solte ou clique para carregar
                </Typography>
              </FileButton>
            ) : (
              <>
                <img
                  src={selectedImage}
                  alt="Uploaded"
                />
                <RemoveImgButton onClick={handleRemoveImage}>
                  <BsTrashFill />
                </RemoveImgButton>
              </>
            )}
          </File>
        </FileContainer>

        <DescContainer>
          <input type="text" placeholder="Titulo" />

          <input type="text" placeholder="Descrição" />

          <TagContainer>
            <input
              type="text"
              placeholder="Digite uma tag"
              value={inputValue}
              onChange={handleInputChange}
            />
            <TagButton onClick={handleTagAdd}>Adicionar</TagButton>
            <ShowTags>
              {tags.map((tag) => (
                <Tag key={tag} onClick={() => handleTagRemove(tag)}>
                  #{tag}
                </Tag>
              ))}
            </ShowTags>
          </TagContainer>

          <Button
            onClick={handleSubmitPost}
            style={{
              padding: "15px 70px",
              marginTop: "auto",
              marginLeft: "auto",
            }}
          >
            Publicar
          </Button>
        </DescContainer>
      </CreatePostContainer>
    </main>
  );
};

export default CreatePost;
