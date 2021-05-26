import React, { useEffect } from 'react'
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LOGO from './img/L3.png';
import IntroImg1 from './img/q.png';
import IntroImg2 from './img/t.png';
import IntroImg3 from './img/v.png';

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
        fontFamily: 'Montserrat',

    },
    header: {
        height: '950px ',
        backgroundSize: 'cover',

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
        height: '950px',
        top: '0',
        zIndex: '-1',
        opacity: '0.7',
        objectFit: 'cover',

       
    },
    chat: {
        paddingTop: '180px',
        paddingBottom: '100px',
        height: '810px ',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        background: 'rgba(35, 41, 49, 0.75)',

    },

    intro: {
        width: '100%',
        paddingTop: '100px',
        height: '610px ',
        display: 'flex',
        // color: 'white',
        backgroundColor: 'white',

        [theme.breakpoints.down('xs')]: {
            paddingTop: '30px',
            height: '700px ',
        },
    },
    intro1: {
        fontSize: '36px',
        marginLeft: '100px',
        marginTop: '50px',
        width: '300px',
        fontWeight: 'bold',

        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
            width: '48%',
            marginLeft: '1px',
            marginTop: '160px',
        },
    },

    firstp: {
        '&::after': {
            content: '""',
            display: 'block',
            marginLeft: '30px',
            width: '50%',
            borderBottom: '2px solid black',
            paddingTop: '10px',

            [theme.breakpoints.down('xs')]: {
                width: '50px',
                marginLeft: '10px',
                paddingTop: '3px',
            },

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
            width: '100%',
            lineHeight: '23px',
            marginLeft: '0px',
        },
    },

    IntroImg1: {
        width: '300px',
        position: 'absolute',
        marginTop: '140px',
        marginLeft: '70px',
        
        [theme.breakpoints.down('xs')]: {
            width: '210px',
            marginTop: '410px',
            marginLeft: '10px'
        },
    },

    IntroImg2: {
        width: '300px',
        position: 'absolute',
        marginTop: '160px',
        marginLeft: '340px',

        [theme.breakpoints.down('xs')]: {
            width: '210px',
            marginTop: '410px',
            marginLeft: '160px'
        },
    },

    IntroImg3: {
        width: '100px',
        position: 'absolute',
        marginTop: '140px',
        marginLeft: '300px',
        
        [theme.breakpoints.down('xs')]: {
            width: '90px',
            marginTop: '394px',
            marginLeft: '160px'
        },
    },

    footer: {
        background: 'rgba(35, 41, 49, 0.9)',
        borderTop: '1px solid #687980',
        height: '90px',
        textAlign: 'center',
        width: '100%',
        paddingTop: '30px'
    },

    socialIcons: {
        color: '#c0c0c0',
        fontSize: '39px',
        marginLeft: '25px',

        '&:hover': {
            color: 'white',
        }
    },

    copyright: {
        color: '#c0c0c0',
        fontSize: '18px'
    },

    vectorAtr: {
        fontSize: '10px',
        color: '#c0c0c0',
        textDecoration: 'none'
    },

    arrowDown: {
        position: 'absolute',
        fontSize: '50px',
        marginTop: '480px',
        left: '48%',
        fontWeight: '100',

        [theme.breakpoints.down('xs')]: {
            marginTop: '630px',
        },

    },

    a: {
        color: 'inherit',
    },

    logo: {
        position: 'absolute',
        width: '54px',
        top: '0',
        marginTop: '28px',
        marginLeft: '48%',

        [theme.breakpoints.down('xs')]: {
            marginLeft: '43%',
        },
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

            </section>


            <section id="intro" className={classes.intro}>
                <div data-aos="fade-right" className={classes.intro1}>
                    <p className={classes.firstp} > About VCApp</p>
                </div>

                <img data-aos="fade-down" src={IntroImg1} className={classes.IntroImg1} alt="videoChat"></img>
                <img data-aos="fade-down" src={IntroImg2} className={classes.IntroImg2} alt="videoChat"></img>
                <img data-aos="fade-down" src={IntroImg3} className={classes.IntroImg3} alt="videoChat"></img>

                <div data-aos="fade-up" className={classes.intro2}>
                    <p>
                        A lot of the business, work and social life moved online. <br />
                        So i built an app that deliever a good solution for this issue. <br />

                        New video chat application that provide a platform to meet by video for 2 participants. <br /> <br />
                        <b> How It Works? </b><br />
                        You just need to
                        enter your name, <br />
                        Press on "Copy Your ID", <br />
                        Send your ID to whom you want to connect, <br />
                        They need to put your ID in their "ID to Call" Box <br /> and <br />
                        Press the CALL button.

                    </p>
                </div>

                <div className={classes.arrowDown}>
                    <a className={classes.a} href="#chat">  <i class="fas fa-chevron-down"></i> </a>
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

            <section className={classes.footer}>

                <span>
                    <a className={classes.socialIcons} href="https://www.linkedin.com/in/nir-argil-158815185/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                    <a className={classes.socialIcons} href="https://github.com/NirArgil/FinanceGuard" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                </span>

                <p className={classes.copyright} >Copyright © NirArgil 2021.</p>
                <a className={classes.vectorAtr} href="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</a>
            </section>

        </div>
    )
}

export default App
