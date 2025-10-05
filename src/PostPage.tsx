import { useEffect, useState } from "react";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const PostPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }   
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <section>
            <div>Posts</div>
            {posts.map((post) => (
                <div key={post.id} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </section>
    );
};

export default PostPage