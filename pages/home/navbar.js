import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Container, Divider, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function NavBar() {
    const theme = useTheme();
    const useStyles = makeStyles({
        singUpButton: {
            textTransform: 'none',
            background: '#F1A501 !important',
            color: '#fff !important',
            padding: '7px 15px !important',
            borderRadius: '100px !important',
            fontWeight: '600 !important',
            marginLeft: '12px !important'
        },
        navToggle: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navMenu: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: '40px'
            },
        },
        logo: {
            color: '#000 !important'
        },
        logo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        navDrawer: {
            [theme.breakpoints.down('sm')]: {
                background: 'red !important'
            }
        }
    });

    const { singUpButton, navToggle, navMenu, logo } = useStyles();

    // mobile nav drawer
    const [toggle, setToggle] = React.useState(false);
    const list = (
        <Box
            sx={{ width: 200 }}
            role="presentation"
        >
            <List>
                <ListItem button >
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>Service</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>About</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>Courses</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>Contact Us</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>Login</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>Sign Up</ListItemText>
                </ListItem>
                <Divider />
            </List>
        </Box>
    );

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: 'transparent', boxShadow: "none" }} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navToggle}
                            onClick={() => setToggle(true)}
                        >
                            <MenuIcon sx={{ color: '#000', mt: 3 }} />
                        </IconButton>
                        <Typography className={logo} variant="h6" component="div" sx={{ flexGrow: 1, color: '#000', fontWeight: 500, mt: 3 }}>
                            Besnik
                        </Typography>
                        <Box className={navMenu}>
                            <Button color="inherit" sx={{ fontWeight: 500, color: '#616161', textTransform: "none" }}>Home</Button>
                            <Button color="inherit" sx={{ fontWeight: 500, color: '#616161', textTransform: "none" }}>Service</Button>
                            <Button color="inherit" sx={{ fontWeight: 500, color: '#616161', textTransform: "none" }}>About</Button>
                            <Button color="inherit" sx={{ fontWeight: 500, color: '#616161', textTransform: "none" }}>Courses</Button>
                            <Button color="inherit" sx={{ fontWeight: 500, color: '#616161', textTransform: "none" }}>Contact Us</Button>
                            <Button color="inherit" sx={{ fontWeight: 500, color: '#ff9800', textTransform: "none" }}>Login</Button>
                            <Button className={singUpButton}>Sign Up</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <div>
                    <React.Fragment>
                        <Drawer
                            open={toggle}
                            onClose={() => setToggle(false)}
                        >
                            {list}
                        </Drawer>
                    </React.Fragment>
                </div>
            </Box>
        </Container>
    )
}
