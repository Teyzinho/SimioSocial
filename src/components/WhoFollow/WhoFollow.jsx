"use client";
import React, { useEffect, useState } from "react";
import { WhoFollowCard, WhoFollowWrapper } from "./WhoFollow.Styles";
import WhoFollowUser from "./WhoFollowUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";

const WhoFollow = () => {
  const { user } = useUser();
  const supabase = useSupabaseClient();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let query = supabase.from("profiles").select("*");
    
        if (user) {
          query = query.neq("id", user.id);
        }
    
        const { data, error } = await query;
    
        if (error) {
          throw error;
        }
    
        setProfiles(data || []);
      } catch (error) {
        console.log("error fetching whofollow", error);
      }
    };

    fetchUsers();
  }, [supabase, user]);

  return (
    <WhoFollowWrapper>
      <WhoFollowCard>
        {profiles.map((profile) => (
          <WhoFollowUser
            key={`followProfile${profile.id}`}
            profile={profile}
            user={user}
          />
        ))}
      </WhoFollowCard>
    </WhoFollowWrapper>
  );
};

export default WhoFollow;
