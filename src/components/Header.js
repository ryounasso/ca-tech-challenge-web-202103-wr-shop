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
import { Grid } from '@material-ui/core'

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
}));

function Header(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const setTag = props.setTag;

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    function handleTag(tags){
        setTag(tags);
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
    </Toolbar>
    </AppBar>
    )
}

export default Header