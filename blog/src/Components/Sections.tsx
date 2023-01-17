import React from 'react';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Posts from '../Components/Posts';
import resultProps from '../Types/ResultProps';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

function Sections() {
    const content = (
        <div>
            <Posts />
        </div>)

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

    const tagsMapping = result.map((value) => {
        return (
            <div>
                <Divider>
                    <Chip label={value.tags} />
                </Divider>
                {content}
            </div>
        )
    });

    return (
        <Root>
            {tagsMapping}
        </Root>

    );
}

export default Sections;