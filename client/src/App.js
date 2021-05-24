import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import IMG from './img/a.jpg';
import VIDEO from './img/c.mp4';

//Components
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        fontFamily: 'Lato',
    },
    header: {
        height: '840px ',
        width: '1346px',
        // backgroundImage: `url(${IMG})`,
        // backgroundSize: 'cover',
    },
    H1: {
        fontSize: '70px ',
        marginLeft: '329px',
        letterSpacing: '9px',
        paddingTop: '250px',
        zIndex: '2',

        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },

    },
    H2: {
        fontSize: '50px ',
        textAlign: 'center',
        fontWeight: '300',
        marginTop: '-10px',
        zIndex: '2',

        [theme.breakpoints.down('xs')]: {
            textAlign: 'right',
        },
    },

    btn: {
        [theme.breakpoints.down('xs')]: {
           marginLeft: '450px',
           zIndex: '2',
        },
    },

    video: {
        width: '100%',
        position: 'absolute',
        minHeight: '700px',
        top: '0',
        zIndex: '-1',
        objectFit: 'cover',
    },

}));

const App = () => {

    const classes = useStyles();

    return (
        <div className={classes.wrapper}>

            <section className={classes.header}>
                <h1 className={classes.H1}>VCApp</h1>
                <h2 className={classes.H2}>Meet the new video chat app.</h2>
                <Typography align="center" className={classes.btn}>
                    <Button 
                    variant="outlined"
                    color="primary"
                     href="#chat">
                    Get started </Button>
                </Typography>
                <video className={classes.video} src={VIDEO} muted loop autoPlay playsInline > </video>
            </section>

            <section id="chat"></section>
            <div >
                {/* <AppBar className={classes.appBar} position="static" color="inheirt">
                <Typography variant="h2" align="center" fontFamily='Lato' >Video Chat</Typography>
            </AppBar> */}

                <VideoPlayer />
                <Options>
                    <Notifications />
                </Options>

            </div>

            <section className="footer"></section>
        </div>

    )
}

export default App
