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

            setTag(jsonData.posts)
        }
        getData();
    }, []);

    const crime = tag.filter(e => e.tags.includes('crime'));
    const magical = tag.filter(e => e.tags.includes('magical'));
    const fiction = tag.filter(e => e.tags.includes('fiction'));
    const classic = tag.filter(e => e.tags.includes('classic'));
    const history = tag.filter(e => e.tags.includes('history'));

    return (
        <>
            <div>
                <h1>History section</h1>
                {history.map((value) => {
                    return (
                        <div className="article">
                            <div className='divtags'>
                                <p className='ptags' key={value.tags[0]}>{value.tags[0]}</p>
                                <p className='ptags' key={value.tags[1]}>{value.tags[1]}</p>
                                <p className='ptags' key={value.tags[2]}>{value.tags[2]}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default Tags;