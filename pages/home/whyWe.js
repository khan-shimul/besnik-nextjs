import { Box, Container, Typography } from "@mui/material";

const WhyWe = () => {
    return (
        <Box>
            <Container>
                <Box component="div" sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        Why Choose Besnik?
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', width: '25%', color: '#61616', my: 2, mx: 'auto' }}>
                        We offer a wide range of opportunity for you. See  what you will get and benefits
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default WhyWe;