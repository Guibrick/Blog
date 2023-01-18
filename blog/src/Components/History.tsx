import { useState, useEffect } from "react";
import { Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import resultProps from "../Types/ResultProps";

function History() {
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

    const history = result.filter(e => e.tags.includes('history'));

    return (
        <div>
            {history.map((value) => {
                return (
                    <Card id="card" sx={{ minWidth: 275 }} >
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" sx={{ m: 1 }}>
                                {value.title}
                            </Typography>
                            <Typography variant="body2" sx={{ m: 1 }}>
                                {value.body}
                                <br />
                            </Typography >
                            <Chip sx={{ m: 0.3 }} label={value.tags[0]} />
                            <Chip sx={{ m: 0.3 }} label={value.tags[1]} />
                            <Chip sx={{ m: 0.3 }} label={value.tags[2]} />
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>)
            })}
        </div>
    )
}

export default History;