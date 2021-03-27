import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const useStyles = makeStyles((theme) => ({
    anchor: {
        textDecoration : 'none',
        color : 'inherit'
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <>
        <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center' }}
        >
            <Toolbar>
                <AnchorLink href="#about" 
                    className={classes.anchor}>
                    <Button>
                        HOME
                    </Button>
                </AnchorLink>

                <AnchorLink href="#contact" className={classes.anchor}>
                    <Button color='inherit'>
                        CONTACT
                    </Button>
                </AnchorLink>
            </Toolbar>
        </AppBar>
    </>
    )
}

export default Header