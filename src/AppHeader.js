import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Hidden from '@material-ui/core/Hidden';




export default class AppHeader extends Component {
    constructor(props) {
        super()
        this.state = { activePage: props.activePage || 0 }
    }

    handleChange = item => (e, newValue) => {
        e.preventDefault()
        this.setState({ [item]: newValue })
    }

    render() {


        function AccountButton() {

            const [anchorEl, setAnchorEl] = React.useState(null);

            const handleClick = (event) => {
                setAnchorEl(event.currentTarget);
            };

            const handleClose = () => {
                setAnchorEl(null);
            };

            return (
                <>
                    <IconButton aria-label="Account" onClick={handleClick}>
                        <AccountCircleIcon style={{ color: "white" }} />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </>
            )
        }


        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Grid
                        container
                        spacing={1}
                        justify="flex-start"
                        alignItems="center"
                        alignContent="stretch"
                        wrap="nowrap"
                    >
                        <Grid item >
                            <Hidden mdUp>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">
                                iMovies
                            </Typography>
                        </Grid>
                        <Grid item md />
                        <Grid item md />
                        <Grid item >
                            <Hidden smDown>
                                <Tabs value={this.state.activePage} onChange={this.handleChange('activePage')}>
                                    <Tab label="Page One" />
                                    <Tab label="Page Two" />
                                    <Tab label="Page Three" />
                                </Tabs>
                            </Hidden>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <IconButton aria-label="Notifications" onClick={() => { }}>
                                <NotificationsNoneIcon style={{ color: "white" }} />
                            </IconButton>
                            <AccountButton />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}