import { useEffect } from "react";
import Post from "../post"
export default function IndexPage() {
    useEffect(
        () => {
            fetch('/post').then(Response=>{
                Response.json(posts=>{
                    console.log(posts);
            });
        });
        },[]);
    return (
        <div>
        <Post/>
        <Post/>
        <Post/>
        </div>

    );
}