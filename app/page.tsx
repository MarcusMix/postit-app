import axios from "axios";
import AddPost from "./components/AddPost";
import { useQuery } from "react-query";
import Post from "./components/Post";
import { PostType } from "./types/Posts";


const allPosts = async () => {
  const response = await axios.get('/api/get/getPosts')
  return response.data
}

export default function Home() {
  const { data, error, isLoading } = useQuery<PostType[]>({
    queryFn: allPosts,
    queryKey: ['posts']
  })
  if(error) return error
  if(isLoading) return "Loading..."
  return (
    <main >
      <AddPost/>
      {data?.map((post) => (
          <Post  
            Comment={post.Comment}
            key={post.id} 
            name={post.user.name} 
            avatar={post.user.image}
            postTitle={post.title}
            id={post.id}
          />
        ))}
    </main>
  )
}