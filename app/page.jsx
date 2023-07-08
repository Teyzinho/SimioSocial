"use client"

import useFetchFeed from '@/hooks/useFetchFeed'
import Feed from '@/src/components/Feed/Feed'

export default function Home() {

  const {feed , isLoading} = useFetchFeed();

  return (
    <main>
      <Feed feed={feed} isLoading={isLoading} title={"Página inicial"}/>
    </main>
  )
}
