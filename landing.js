import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComments, faVideo, faCheckCircle, faFileAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const theme = createTheme({
  palette: {
    primary: {
      main: '#53389E',
    },
    secondary: {
      main: '#1fb892',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header style={{ background: 'linear-gradient(to right, #53389E, #1fb892)', color: 'white', padding: '24px 0' }}>
        <Container maxWidth="md" textAlign="center">
          <Typography variant="h3" component="h1" fontWeight="bold">
            Streamline Childcare with KidzShala
          </Typography>
          <Typography variant="h6" component="p" mt={2}>
            Stay Connected & Informed
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            From real-time updates to seamless communication, KidzShala helps parents take control of their child's education and care, right from their fingertips.
          </Typography>
        </Container>
      </header>

      <main>
        <Container maxWidth="md" mt={12}>
          <Box textAlign="center" mb={12}>
            <Typography variant="h4" component="h2" color="primary" fontWeight="bold">
              Experience Your Child's Journey: Stay Engaged Every Step of the Way
            </Typography>
          </Box>

          <Grid container spacing={4} mb={12}>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <FontAwesomeIcon icon={faBell} size="3x" color="#53389E" />
                <Typography variant="h5" component="h3" fontWeight="bold" mt={2}>
                  Child Updates & Notifications
                </Typography>
                <Typography variant="body1" component="p" mt={2}>
                  Receive instant updates on your child's activities, progress, and important notifications keeping you informed in real-time.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <FontAwesomeIcon icon={faComments} size="3x" color="#1fb892" />
                <Typography variant="h5" component="h3" fontWeight="bold" mt={2}>
                  Seamless Communication with Educators
                </Typography>
                <Typography variant="body1" component="p" mt={2}>
                  Engage in direct messaging with teachers to discuss your child's needs, progress, and more, ensuring a strong home-school connection.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <FontAwesomeIcon icon={faVideo} size="3x" color="#1fb892" />
                <Typography variant="h5" component="h3" fontWeight="bold" mt={2}>
                  Real-Time Photos & Videos
                </Typography>
                <Typography variant="body1" component="p" mt={2}>
                  Stay connected by viewing real-time photos and videos of your child's daily activities, allowing you to never miss a precious moment.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#1fb892" />
                <Typography variant="h5" component="h3" fontWeight="bold" mt={2}>
                  Digital Attendance & Check-ins
                </Typography>
                <Typography variant="body1" component="p" mt={2}>
                  Track attendance, authorize pickups, and monitor check-ins digitally, giving you peace of mind and ensuring your child's safety.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <FontAwesomeIcon icon={faFileAlt} size="3x" color="#1fb892" />
                <Typography variant="h5" component="h3" fontWeight="bold" mt={2}>
                  Comprehensive Daily Reports
                </Typography>
                <Typography variant="body1" component="p" mt={2}>
                  Get detailed daily reports on activities, meals, and naps, keeping you informed about your child's progress through the app with ease.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <FontAwesomeIcon icon={faCreditCard} size="3x" color="#1fb892" />
                <Typography variant="h5" component="h3" fontWeight="bold" mt={2}>
                  Automated Billing & Payment Management
                </Typography>
                <Typography variant="body1" component="p" mt={2}>
                  Manage billing and payments effortlessly, ensuring timely payments and reducing administrative tasks.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box textAlign="center" mb={12}>
            <Typography variant="h4" component="h2" color="primary" fontWeight="bold">
              Transforming Childcare, One Family at a Time
            </Typography>
          </Box>

          <Swiper spaceBetween={10} pagination={{ clickable: true }} breakpoints={{ 640: { slidesPerView: 1, spaceBetween: 20 }, 768: { slidesPerView: 2, spaceBetween: 40 }, 1024: { slidesPerView: 3, spaceBetween: 50 } }}>
            <SwiperSlide>
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center">
                <Avatar sx={{ width: 128, height: 128, bgcolor: 'gray', mb: { xs: 4, md: 0 }, mr: { md: 4 } }}>Parent Image</Avatar>
                <Box textAlign={{ xs: 'center', md: 'left' }}>
                  <Typography variant="h6" component="p" fontWeight="bold">Parent Name: Ankita</Typography>
                  <Typography variant="h6" component="p" fontWeight="bold">Child Class: 1st Grade</Typography>
                  <Paper elevation={1} sx={{ mt: 4, p: 4, borderLeft: 4, borderColor: 'primary.main', bgcolor: 'grey.50' }}>
                    <Typography variant="body1" component="p">
                      Parents receive instant updates on your child's activities, progress, and important notifications like nap times, meals, and assignments, keeping you informed in real-time.
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center">
                <Avatar sx={{ width: 128, height: 128, bgcolor: 'gray', mb: { xs: 4, md: 0 }, mr: { md: 4 } }}>Parent Image</Avatar>
                <Box textAlign={{ xs: 'center', md: 'left' }}>
                  <Typography variant="h6" component="p" fontWeight="bold">Parent Name: Rakesh</Typography>
                  <Typography variant="h6" component="p" fontWeight="bold">Child Class: PlaySchool</Typography>
                  <Paper elevation={1} sx={{ mt: 4, p: 4, borderLeft: 4, borderColor: 'primary.main', bgcolor: 'grey.50' }}>
                    <Typography variant="body1" component="p">
                      Parents receive instant updates on your child's activities, progress, and important notifications like nap times, meals, and assignments, keeping you informed in real-time.
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center">
                <Avatar sx={{ width: 128, height: 128, bgcolor: 'gray', mb: { xs: 4, md: 0 }, mr: { md: 4 } }}>Parent Image</Avatar>
                <Box textAlign={{ xs: 'center', md: 'left' }}>
                  <Typography variant="h6" component="p" fontWeight="bold">Parent Name: Priya</Typography>
                  <Typography variant="h6" component="p" fontWeight="bold">Child Class: Nursery</Typography>
                  <Paper elevation={1} sx={{ mt: 4, p: 4, borderLeft: 4, borderColor: 'primary.main', bgcolor: 'grey.50' }}>
                    <Typography variant="body1" component="p">
                      Parents receive instant updates on your child's activities, progress, and important notifications like nap times, meals, and assignments, keeping you informed in real-time.
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>

          <Box textAlign="center" mb={12}>
            <Typography variant="h4" component="h2" color="primary" fontWeight="bold">
              Empowering Parents, Enriching Lives
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="body1" component="p">
                  90% of Parents feel more informed: After using KidzShala, parents report feeling significantly more engaged in their child's daily activities.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="body1" component="p">
                  Thousands of Educators Approved: KidzShala is highly recommended by educators for improving communication between parents, schools, and children.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="body1" component="p">
                  97% User Recommendation Rate: The majority of parents and educators recommend KidzShala to other families and parents for advanced childcare solutions.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default landing;
