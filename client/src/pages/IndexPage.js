import { useEffect,useState } from "react";
import Post from "../post"
export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(
        () => {
            fetch('http://localhost:4000/post').then(Response=>{
                Response.json(posts=>{
                    setPosts(posts);
            });
        });
        },[]);
    return (
        <>
        {posts.length>0 && posts.map(post=>(
                <Post />
        ))}
        <Post /><Post /><Post /><Post /><Post />
        //2.20.25
        </>

    );
}