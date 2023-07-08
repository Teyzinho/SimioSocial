"use client"

import FullPost from '@/src/components/posts/FullPost'
import Feed from '@/src/components/Feed/Feed'
import useFetchFeedExcludingId from '@/hooks/useFetchFeedExcludingId'

const Post = ({params: {id}}) => {

  const {feed , isLoading} = useFetchFeedExcludingId(id)

  console.log(feed)

  return (
    <main>
      <FullPost postId={id}/>

      <Feed feed={feed} isLoading={isLoading} title={"Posts Relacionados"}/>
    </main>
  )
}

export default Post