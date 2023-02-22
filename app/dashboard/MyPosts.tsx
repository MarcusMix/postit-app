'use client'

import axios from "axios"
import { useQuery } from "react-query"
import { AuthType } from "../types/AuthPost"
import EditPost from "./EditPost"

const fetchAuthPosts = async () => {
    const response = await axios.get('/api/posts/authPosts')
    return response.data
}

export default function MyPosts() {
    const {data, isLoading} = useQuery<AuthType>({
        queryFn: fetchAuthPosts,
        queryKey: ['auth-posts']
    })

    if(isLoading) return <h1>posts estão carregando...</h1>

    return (
        <div>
            {data?.Posts?.map((post) => (
                <EditPost 
                    id={post.id} 
                    key={post.id} 
                    avatar={data.image} 
                    name={data.name} 
                    title={post.title} 
                    comments={post.Comment}/>
                )
            )}
        </div>
    )
}