import React, { useState, useEffect } from 'react';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { getRandomChuck } from '../../services/ChuckService'

const ChuckCard = () => {

    const [data, setData] = useState(null);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    useEffect(() => {}, []);

    const obtainData = () => {
        getRandomChuck()
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data.icon_url);
                    setData(response.data)
                }
            })
            .catch((error) => {
                alert(`Somethin went wrong: ${error}`);
            })
    }

    return (
        <div style={{ marginLeft: '25%', marginRight: '25%'}}>
            <h1>Chuck Norris</h1>
            { data !== null ? (
                <Card
                    variant="outlined"
                >
                    <CardMedia
                        component="img"
                        alt="Chuck Norris"
                        height="140"
                        image={data.icon_url}
                    />
                    <CardContent>
                        <Typography color="text.secondary">
                            {data.value}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button  size="small" onClick={() => { setLikeCount(likeCount +1); obtainData();}}>
                            <ThumbUpIcon color="success" style={{ marginRight: 5 }} />
                            {likeCount}
                        </Button>
                        <Button  size="small" onClick={() => { setDislikeCount(dislikeCount +1); obtainData();}}>
                            <ThumbDownIcon color="error" style={{ marginRight: 5 }} />
                            {dislikeCount}
                        </Button>
                    </CardActions>
                </Card>
            ):(
                <button onClick={obtainData}>
                    Get Chuck Norris facts
                </button>
            )}
        </div>
    );
}

export default ChuckCard;
