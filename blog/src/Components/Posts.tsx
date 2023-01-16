import { useState, useEffect } from "react";

type resultProps = {
    id: number;
    title: string;
    body: string;
    tags: string;
};

function Posts() {
    const [result, setResult] = useState<resultProps[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("https://dummyjson.com/posts", {
                method: "GET"
            });
            const jsonData = await data.json();

            setResult(jsonData.posts)
        }
        getData();
    }, []);

    return (
        <div>
            {result.map((value) => {
                return (
                    <div>
                        <div>{value.id}</div>
                        <div>{value.title}</div>
                        <div>{value.body}</div>
                        <div>{value.tags}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default Posts;
