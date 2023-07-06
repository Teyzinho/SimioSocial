import { useState } from "react";
import { IconButton } from "../buttons/IconButton";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { ToogleMenu } from "./DotsButton.styles";
import useModal from "@/src/features/modal/useModal";

const DotsButton = ({ userId, post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isUser = userId === post.user_id;
  const { openModal } = useModal();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };


  const handleDelete = () => {
    const confirmedCallback = (confirmed) => {
      console.log(confirmed);

      if (confirmed) {
        // Realiza a ação de exclusão
        console.log("Excluir post");
      }
    };

    openModal("confirmation", {
      title: "Excluir post",
      message: "Tem certeza de que deseja excluir este post?",
      callback: confirmedCallback,
    });
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <BiDotsHorizontalRounded />
      </IconButton>

      <ToogleMenu isOpen={isOpen}>
        {isUser ? (
          <li onClick={handleDelete} style={{ color: "#BF0413" }}>
            Excluir
          </li>
        ) : (
          <li>Denunciar</li>
        )}
      </ToogleMenu>
    </div>
  );
};

export default DotsButton;
