"use client";
import { Nav } from "./NavBar.Styles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/buttons/button";
import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import useModal from "@/src/features/modal/useModal";
import { Avatar } from "../pictures/Avatar";
import Search from "../search/Search";

const NavBar = () => {
  const session = useSession();
  const { openModal } = useModal();
  const supabase = useSupabaseClient();
  const [profile, setProfile] = useState(null);

  const logIn = () =>{
    openModal("auth");
  }

  useEffect(() => {
    if(session){
      supabase.from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .then(result => {
        if(result.data.length){
          setProfile(result.data[0])
        }
      })
    }
  }, [session, supabase])
  


  return (
    <Nav>
      <Link href="/">
        <Image src="/images/logo-white.png" alt="logo" width={40} height={40} />
        <h1>SimioSocial</h1>
      </Link>

      <Search supabase={supabase}/>

      {session ? (
        <div style={{display:"flex", gap:"12px"}}>
        <Link href="/create-post" style={{width:"100%"}}>
          <Button style={{width:"100%"}}>Criar Post</Button>
        </Link>

        <Link href={`/profile/${profile?.full_name}`} style={{width:"100%"}}>
          <Avatar src={profile?.avatar_url}/>
        </Link>
        </div>
      ) : (
        <Button onClick={logIn}>Logar</Button>
      )}
    </Nav>
  );
};

export default NavBar;
