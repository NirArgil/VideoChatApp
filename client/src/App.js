import React, {useEffect} from 'react'
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import IMG from './img/b.jpg';
import LOGO from './img/L3.png';
// import VIDEO from './img/c.mp4';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        fontFamily: 'Montserrat',
    },
    header: {
        height: '680px ',
        width: '1340px',
        // backgroundImage: `url(${IMG})`,
        backgroundSize: 'cover',

    },
    p1: {
        fontSize: '70px ',
        textAlign: 'center',
        // marginLeft: '329px',
        letterSpacing: '3px',
        paddingTop: '160px',
        zIndex: '2',
        fontWeight: 'bold',

        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },

    },
    p2: {
        fontSize: '41px ',
        textAlign: 'center',
        fontWeight: '300',
        marginTop: '-10px',
        zIndex: '2',
        
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
    },

    btn: {
        marginTop: '14px',
        [theme.breakpoints.down('xs')]: {
            // marginLeft: '450px',
            zIndex: '2',
        },
    },

    img: {
        width: '1340px',
        position: 'absolute',
        minHeight: '700px',
        top: '0',
        zIndex: '-1',
        opacity: '0.7',
        // objectFit: 'cover',
    },
    chat: {
     marginTop: '180px'
    },
    logo: {
        position: 'absolute',
        width: '54px',
        top: '0',
        marginTop: '21px',
        marginLeft: '648px',
       },

       logoText: {
        position: 'absolute',
        fontSize: '21px',
        top: '0',
        marginTop: '36px',
        marginLeft: '700px',
        letterSpacing: '-1px',
       },
}));

const App = () => {

    useEffect(() => {
        AOS.init();
      });

    const classes = useStyles();

    return (
        
        <div className={classes.wrapper}>

            <section className={classes.header}>
                {/* <p data-aos="fade-down" className={classes.p1}>Welcome to</p> */}
                <p data-aos="fade-right" className={classes.p1}>VCApp</p>
                <p data-aos="fade-left" className={classes.p2}>It's time to meet <br/> the new video chat app.</p>
                <Typography align="center" className={classes.btn}>
                    <Button
                        variant="outlined"
                        color="primary"
                        href="#chat">
                        Get started </Button>
                </Typography>
                <img src={IMG} className={classes.img}></img>
                <img src={LOGO} className={classes.logo}></img>
                {/* <p className={classes.logoText}>VCApp</p> */}
            </section>

            <section id="chat" className={classes.chat}>
                <VideoPlayer />
                <Options>
                    <Notifications />
                </Options>
            </section>

            {/* <AppBar className={classes.appBar} position="static" color="inheirt">
                <Typography variant="h2" align="center" fontFamily='Lato' >Video Chat</Typography>
            </AppBar> */}

            <section className="footer"></section>
        </div>

    )
}

export default App
