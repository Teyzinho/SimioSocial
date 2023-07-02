import Link from "next/link";
import { SideBarButton } from "../buttons/button";
import Image from "next/image";


const SideBarItem = ({ icon:Icon, label, active, href }) => {

    const isProfileIcon = Icon === "/icons/person-circle.svg";

  return (
    <Link href={href}>
      <SideBarButton active={active} >
      {isProfileIcon ? (
          <Image
            src={Icon}
            alt="profile-icon"
            width={30}
            height={30}
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
