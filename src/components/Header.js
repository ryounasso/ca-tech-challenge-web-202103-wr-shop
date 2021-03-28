import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { Grid, Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalButton from './ModalButton';

const useStyles = makeStyles((theme) => ({
    anchor: {
        textDecoration : 'none',
        color : 'inherit'
    },
    drawer: {
        width: 200,
        flexShrink: 0,
      },
      fonts:{
        '@media (min-width:400px)' :{
        fontSize : '50px',
      }
    },
    menuButton: {
        paddingLeft: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
      //   padding: theme.spacing(2, 4, 3),
      },
      signup:{
          padding:'80px',
      },
      li:{
          marginBottom: '12px',
      }
}));

function Header(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [Modalopen, setModalOpen] = React.useState(false);
    const [rogin, setRogin] = React.useState(false);
    const theme = useTheme();
    const setTag = props.setTag;

    const [user, setUser] = React.useState({ 
        email:"",
        userId: "",
        password:"",
        name:{
            firstname:"",
            lastname:"",
        },
        phone:"" });
        console.log('ユーザーの確認', user);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    function handleTag(tags){
        setTag(tags);
    }

    function createUser(){
        axios.post(`https://ca-tech-challenge-web-202103.herokuapp.com/users`,  user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      setRogin(!rogin);
    }

    function getUser(){
        axios.get(`https://ca-tech-challenge-web-202103.herokuapp.com/users/`+user.userId)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    function getInfo(){
        createUser();
    }

    function getInfoEmail(){
        const emailText = document.getElementById("email");
        const email = emailText.value

        setUser({...user,
        email:email,
        })

        console.log(user);
    }

    function getInfouserId(){
        const userIdText = document.getElementById("userId");
        const userId = userIdText.value;

        setUser({...user,
        userId:userId,
        })
    }

    function getInfoPass(){
        const passwordText = document.getElementById("password");
        const password = passwordText.value;

        setUser({...user,
        password:password,
        })
    }

    function getInfoFname(){
        const fnameText = document.getElementById("firstname");
        const firstname = fnameText.value;

        console.log('infofname', user.name);

        setUser({...user,
            name : {
                firstname,
                lastname : user.name.lastname,},
            })
    }

    function getInfoLname(){
        const lnameText = document.getElementById("lastname");
        const lastname = lnameText.value;

        console.log('infolname', user.name);

        setUser({...user,
        name : {
            firstname:user.name.firstname,
            lastname,},
        })
    }

    function getInfoPhone(){
        const phoneText = document.getElementById("phone");
        const phone = phoneText.value;

        setUser({...user,
        phone:phone
        })
    }

    let changeButton;
    if (rogin) {
        changeButton = 
        <>
        <IconButton onClick={createUser}>
            <AccountCircleIcon style={{fontSize: 'inherit',}}/>
            <Typography>Welcome {user.name.firstname + user.name.lastname} ! </Typography>
        </IconButton>
        </>
    } else {
        changeButton = <Button onClick={handleOpen}>Sign Up</Button>
    }


    return (
        <AppBar
        color='default'
        position='static'
        >
            <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
                <Button onClick={function(){handleTag("bag")}} >bag</Button>
                <Button onClick={function(){handleTag("cap")}}>cap</Button>
                <Button onClick={function(){handleTag("glass")}}>glass</Button>
                <Button onClick={function(){handleTag("jacket")}}>jacket</Button>
                <Button onClick={function(){handleTag("jeans")}}>jeans</Button>
                <Button onClick={function(){handleTag("shirt")}}>shirt</Button>
                <Button onClick={function(){handleTag("shoes")}}>shoes</Button>
                <Button onClick={function(){handleTag("all")}}>all</Button>
      </Drawer>
        {changeButton}
        <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={Modalopen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={Modalopen}>
                <div display='flex' justifyContent='center' className={classes.paper}>
                    <Typography variant="h4" style={{magin:'8px',}}>Member registration</Typography>
                    <form name="signup" className={classes.signup}>
                        <ul style={{listStyle: 'none',}}>
                             <li className={classes.li}>
                        <label >
                            email:
                        <input type="text" name="email" id="email" onChange={getInfoEmail} />
                        </label>
                    </li>
                    <li className={classes.li}>
                    <label >
                        userId:
                        <input type="text" name="userId" id="userId" onChange={getInfouserId} />
                    </label>
                    </li>
                    <li className={classes.li}>
                    <label>
                        password:
                        <input type="text" name="password" id="password" onChange={getInfoPass} />
                    </label>
                    </li>
                    <li className={classes.li}>
                    <label>
                        firstname:
                        <input type="text" name="firstname" id="firstname" onChange={getInfoFname} />
                    </label>
                    </li>
                    <li className={classes.li}>
                    <label>
                        lastname:
                        <input type="text" name="lastname" id="lastname" onChange={getInfoLname} />
                    </label>
                    </li>
                    <li className={classes.li}>
                    <label>
                        phone:
                        <input type="text" name="phone" id="phone" onChange={getInfoPhone} />
                    </label>
                    </li>
                    <li className={classes.li}>
                    <p type="submit" value="Sign Up" onClick={createUser} style={{
                        fontSize:'20px',
                    }}>Sign Up</p>
                    </li>
                    </ul>
                    </form>
                </div>
                </Fade>
            </Modal>
    </Toolbar>
    </AppBar>
    )
}

export default Header