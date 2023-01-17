import { useState, useEffect } from "react";
import tagProps from "../Types/TagProps";

function Tags() {
    const [tag, setTag] = useState<tagProps[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("https://dummyjson.com/posts", {
                method: "GET"
            });
            const jsonData = await data.json();

            console.log(tag)

            setTag(jsonData.posts)
        }
        getData();
    }, []);

    const tagMapping = tag.map((value) => {
        return (
            <div>
                <div>{value.tags[0]}</div>
                <div>{value.tags[1]}</div>
                <div>{value.tags[2]}</div>
            </div>
        )
    });

    return (
        <>
            <div>
                {tagMapping}
            </div>
        </>
    )
}

export default Tags;