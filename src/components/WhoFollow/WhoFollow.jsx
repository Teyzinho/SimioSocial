"use client";
import React, { useEffect, useState } from "react";
import { WhoFollowCard, WhoFollowWrapper } from "./WhoFollow.Styles";
import WhoFollowUser from "./WhoFollowUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import Loading from "../loading/Loading";

const WhoFollow = () => {
  const { user, isLoading } = useUser();
  const supabase = useSupabaseClient();
  const [profiles, setProfiles] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoadingData(true)
      try {
        let query = supabase.from("profiles").select("*");

        if (user) {
          query = query.neq("id", user.id);
        }

        const { data, error } = await query;
        if (error) {
          throw error;
          setIsLoadingData(false)
        }

        setProfiles(data || []);
        setIsLoadingData(false)
      } catch (error) {
        console.log("error fetching whofollow", error);
        setIsLoadingData(false)
      }
    };

    fetchUsers();
  }, [supabase, user,isLoading]);

  return (
    <WhoFollowWrapper>
      <WhoFollowCard>
        {isLoading || isLoadingData ? (
          <Loading />
        ) : (
          <>
            {profiles.map((profile) => (
              <WhoFollowUser
                key={`followProfile${profile.id}`}
                profile={profile}
                user={user}
              />
            ))}
          </>
        )}
      </WhoFollowCard>
    </WhoFollowWrapper>
  );
};

export default WhoFollow;
