import React, { useEffect } from 'react'
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
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // width: '100%',
        fontFamily: 'Montserrat',
    },
    header: {
        height: '950px ',
        width: '100%',
        backgroundImage: `url(${IMG})`,
        backgroundSize: 'cover',

        // [theme.breakpoints.down('xs')]: {
        //     backgroundSize: 'cover',
        //     width: '100%',
           
        // },
        

    },
    p1: {
        fontSize: '70px ',
        textAlign: 'center',
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
        width: '100%',
        position: 'absolute',
        minHeight: '900px',
        top: '0',
        zIndex: '-1',
        opacity: '0.7',
        objectFit: 'cover',
        
        [theme.breakpoints.down('xs')]: {
            objectFit: 'cover',
            width: '100%',
            // height:'auto',
            minHeight: '100%',

        },
    },
    chat: {
        marginTop: '180px',
        height: '810px ',
         display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    intro: {
        marginTop: '126px',
        paddingTop: '100px',
        height: '570px ',
        display: 'flex',
        backgroundColor: 'green',

        [theme.breakpoints.down('xs')]: {
            width: '700px'
        },

    },
    intro1: {
        fontSize: '36px',
        marginLeft: '90px',
        marginTop: '90px',
        width: '300px',
        fontWeight: 'bold',

        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            width: '140px',
        },
    },

    firstp: {
        '&::after': {
            content: '""',
            display: 'block',
            marginLeft: '30px',
            width: '50%',
            borderBottom: '2px solid #1a252f',
            paddingTop: '10px',

        }
    },

    intro2: {
        width: '810px',
        marginLeft: '100px',
        lineHeight: '36px',
        fontSize: '23px',
        textAlign: 'center',

        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            width: '300px',
            lineHeight: '21px',
        },
    },
    logo: {
        position: 'absolute',
        width: '54px',
        top: '0',
       left: '50%',
        // marginTop: '21px',
        // marginLeft: '648px',
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

            <div id="header" className={classes.wrapper}>
                <section className={classes.header}>
                    {/* <p data-aos="fade-down" className={classes.p1}>Welcome to</p> */}
                    <p data-aos="fade-right" className={classes.p1}>VCApp</p>
                    <p data-aos="fade-left" className={classes.p2}>It's time to meet <br /> the new video chat app.</p>
                    <Typography align="center" className={classes.btn}>
                        <Button
                            variant="outlined"
                            color="primary"
                            href="#intro">
                            Get started </Button>
                    </Typography>
                    {/* <img src={IMG} className={classes.img} alt="HEADER"></img> */}
                    <img src={LOGO} className={classes.logo} alt="LOGO"></img>
                    {/* <p className={classes.logoText}>VCApp</p> */}
                </section>
           

            <section id="intro" className={classes.intro}>
                <div data-aos="fade-right"  className={classes.intro1}>
                    <p className={classes.firstp} > About VCApp</p>
                </div>

                <div data-aos="fade-up" className={classes.intro2}>
                    <p>
                        A lot of the business, work and social life moved online. <br />
                        So i built an app that deliever a good solution for this issue. <br />

                        New video chat application that provide a platform to meet by video for 2 participants. <br /> <br/>
                       <b> How It Works? </b><br/>
                        You just need to
                        enter your name, <br />
                        Press on "Copy Your ID", <br />
                        Send your ID to whom you want to connect, <br />
                        They need to put your ID in their "ID to Call" Box <br /> and <br />
                        Press the CALL button.

                    </p>
                </div>


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
