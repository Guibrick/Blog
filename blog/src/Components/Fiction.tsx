import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import resultProps from "../Types/ResultProps";

function Fiction() {
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

    const fiction = result.filter(e => e.tags.includes('fiction'));

    return (
        <>
            <div>
                {fiction.map((value) => {
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
                                <Chip label={value.tags[0]} />
                                <Chip label={value.tags[1]} />
                                <Chip label={value.tags[2]} />
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>)
                })}
            </div>
        </>
    )
}

export default Fiction;