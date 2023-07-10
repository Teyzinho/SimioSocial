"use client";
import React, { useEffect, useState } from "react";
import { WhoFollowCard, WhoFollowWrapper } from "./WhoFollow.Styles";
import WhoFollowUser from "./WhoFollowUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const WhoFollow = () => {
  const supabase = useSupabaseClient();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("profiles").select("*");

      if (error) {
        console.log("error fetching whofollow", error);
      }

      setProfiles(data);
    };

    fetchUsers();
  },[supabase]);

  console.log(profiles)

  return (
    <WhoFollowWrapper>
      <WhoFollowCard>
        {profiles.map((user) => (
          <WhoFollowUser key={`followUser${user.id}`} user={user}/>
        ))}
      </WhoFollowCard>
    </WhoFollowWrapper>
  );
};

export default WhoFollow;
