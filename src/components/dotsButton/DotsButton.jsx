import { useState } from "react";
import { IconButton } from "../buttons/IconButton";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { ToogleMenu } from "./DotsButton.styles";
import useModal from "@/src/features/modal/useModal";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const DotsButton = ({ userId, post }) => {
  const { supabaseClient } = useSessionContext();
  const [isOpen, setIsOpen] = useState(false);
  const isUser = userId === post.user_id;
  const { openModal } = useModal();
  const router = useRouter();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDelete = () => {
    const confirmedCallback = (confirmed) => {
      if (confirmed) {
        const fetchDelete = async () => {
          const { error: imgError } = await supabaseClient.storage
            .from("images")
            .remove([post.image_url]);

            if(imgError){
              return toast.error("erro ao deletar imagem");
            }

          const { error } = await supabaseClient
            .from("posts")
            .delete()
            .eq("user_id", userId)
            .eq("id", post.id)
            .single();

          if (error) {
            return toast.error("erro ao deletar post");
          }

          toast.success("Post Excluido");
          router.refresh();
        };
        fetchDelete();
      }
    };

    openModal("confirmation", {
      title: "Excluir post",
      message: "Tem certeza de que deseja excluir este post?",
      callback: confirmedCallback,
    });

    setIsOpen(false);
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
