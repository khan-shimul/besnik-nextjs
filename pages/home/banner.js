import { Container, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import bannerImg from '../../images/banner/2.png'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Banner = () => {
    const theme = useTheme();
    theme.typography.h3 = {
        fontSize: '1.5rem',
        '@media (min-width:600px)': {
            fontSize: '0.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.6rem',
            lineHeight: '3.3rem'
        },
    };
    const useStyles = makeStyles({
        started: {
            background: '#F0A501',
            color: '#fff',
            border: 'none',
            padding: '24px 30px',
            marginLeft: '-50px',
            cursor: 'pointer',
            borderRadius: '100px',
            fontFamily: 'inherit',
            boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
            [theme.breakpoints.down('sm')]: {
                padding: '18px 24px',
                marginBottom: '20px'
            }

        },

        startMail: {
            [theme.breakpoints.up('sm')]: {
                width: '320px',
                border: 'none',
                padding: '24px 26px',
                outline: 'none',
                borderTopLeftRadius: '100px',
                borderBottomLeftRadius: '100px',
                boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`
            },
            [theme.breakpoints.down('sm')]: {
                width: '200px',
                border: 'none',
                padding: '18px 24px',
                outline: 'none',
                boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                borderTopLeftRadius: '100px',
                borderBottomLeftRadius: '100px',
            },
        },
        bnImg: {
            // background: '#EBF6F5',
            boxShadow: `rgba(0, 0, 0, 0.4) 0px 30px 90px`
        }
    })
    const { started, startMail, bnImg } = useStyles();
    return (
        <Container>
            <Grid container sx={{ alignItems: 'center' }}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography variant="h3">
                        An excellence center for education
                    </Typography>
                    <Typography variant="body2" sx={{ width: '75%', my: 4 }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam est, id quisquam ullam repellat cupiditate!
                    </Typography>

                    <Box component="div">
                        <input className={startMail} type="email" placeholder='Enter your email' required />
                        <input className={started} type="submit" value="Get Started" />
                    </Box>

                </Grid>
                <Grid sx={{ position: 'relative' }} item xs={12} sm={12} md={6}>
                    <Image className={bnImg} src={bannerImg} alt="" />
                    <Box sx={{ position: 'absolute', bottom: 12, width: 150, height: 100, background: '#fff', borderRadius: 1, boxShadow: 1, p: 2, textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            27k
                        </Typography>
                        <Typography variant="body2">
                            Member Joined
                        </Typography>
                    </Box>
                    <Box sx={{ position: 'absolute', top: 100, right: 10, width: 180, height: 100, background: '#fff', borderRadius: 1, boxShadow: 1, p: 2, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ mr: 1 }}>
                            <AccessTimeFilledIcon />
                        </Box>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                101k
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'textSecondary', fontSize: 13 }}>
                                Active Student
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Banner;