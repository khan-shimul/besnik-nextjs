import { Box, Container, Grid, Typography } from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';

const Services = () => {
    return (
        <Box component="section" sx={{ my: 10 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box component="div" sx={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: '#01957D', mr: 2 }} >
                            <Typography variant="h6" sx={{ textAlign: 'center' }}>
                                <AccessTimeFilledIcon sx={{ textAlign: 'center', mt: 1.4, color: '#fff' }} />
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18, color: '#212121', }}>
                                1,000+ Free best <br /> online courses
                            </Typography>
                        </Box>
                    </Grid>
                    {/* 2nd item */}
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box component="div" sx={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: '#FFA3A4', mr: 2 }} >
                            <Typography variant="h6" sx={{ textAlign: 'center' }}>
                                <PersonIcon sx={{ textAlign: 'center', mt: 1.4, color: '#fff' }} />
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#212121', fontSize: 18 }}>
                                100+ Experienced <br /> and expert mentor
                            </Typography>
                        </Box>
                    </Grid>
                    {/* 3rd item */}
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box component="div" sx={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: '#2B3747', mr: 2 }} >
                            <Typography variant="h6" sx={{ textAlign: 'center' }}>
                                <ChatIcon sx={{ textAlign: 'center', mt: 1.4, color: '#fff' }} />
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18, color: '#212121', }}>
                                1M+ students rate <br /> and review
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Services;