import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import resultProps from "../Types/ResultProps";



function Posts() {
    const [result, setResult] = useState<resultProps[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("https://dummyjson.com/posts", {
                method: "GET"
            });
            const jsonData = await data.json();

            console.log(result)

            setResult(jsonData.posts)
        }
        getData();
    }, []);

    const postsMapping = result.map((value) => {
        return (
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {value.title}
                    </Typography>
                    <Typography variant="body2">
                        {value.body}
                        <br />
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {value.tags}
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>)
    });

    return (
        <>
            <div>
                {postsMapping}
            </div>
        </>
    )
}

export default Posts;