import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    PaperVideoCallmyVideo: {
        padding: '3px',
        border: '2px solid black',
        position: 'absolute',
        right: '45%',
        bottom: '99%',

        [theme.breakpoints.down('xs')]: {
            right: '30%',
            bottom: '100%'
        },


    },
    VideoCallMyVideo: {
        width: '150px',

    },

    VideoCallUserVideo: {
        width: '610px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },

    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },

    video2: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '410px',
        },
    },
    
    gridContainer: {
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '5px',
        border: '2px solid black',
        margin: '10px',
    },
}));

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer}>
            {/* {stream && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography varient="h5" gutterBottom> {name || 'Name'} </Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )} */}

            {callAccepted && !callEnded ? (
                <>
                <Paper className={classes.PaperVideoCallmyVideo}>
                    <Grid>
                        <Typography varient="h5" gutterBottom> {name || 'Name'} </Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.VideoCallMyVideo} />
                    </Grid>
                </Paper>

                <Paper className={classes.paper}>
                    <Grid>
                        <Typography varient="h5" gutterBottom> {call.name || 'Name'} </Typography>
                        <video playsInline ref={userVideo} muted autoPlay className={classes.VideoCallUserVideo} />
                    </Grid>
                </Paper>

               </>
               
            ) : (
                stream && (
                <Paper className={classes.paper}>
                    <Grid>
                        <Typography varient="h5" gutterBottom> {name || 'Name'} </Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )
            )}

        </Grid>
    )
}

export default VideoPlayer
