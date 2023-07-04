

import FullPost from '@/src/components/posts/FullPost'
import Feed from '@/src/components/Feed/Feed'

const Post = async ({params: {id}}) => {

  
  return (
    <main>
      <FullPost postId={id}/>

      <Feed />
    </main>
  )
}

export default Post