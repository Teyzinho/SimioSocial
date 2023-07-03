import Link from "next/link";
import { SideBarButton } from "../buttons/button";
import { Avatar } from "../pictures/Avatar";


const SideBarItem = ({ icon:Icon, label, active, href }) => {

    const isProfileIcon = label === "Perfil";

  return (
    <Link href={href}>
      <SideBarButton active={active} >
      {isProfileIcon ? (
          <Avatar
            src={Icon}
            width={30}
          />
        ) : (
          <Icon />
        )}
        <p>{label}</p>
      </SideBarButton>
    </Link>
  );
};

export default SideBarItem;
