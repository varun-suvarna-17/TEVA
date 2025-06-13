import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
 // adjust the path as needed

const About = () => {
  const teamMembers = [
    {
      name: 'Soniya Kolvekar',
      role: 'Founder & Tea Master',
      image: '/img/Soniya.jpg',
      bio: 'With over 15 years of experience in tea blending, Sarah brings her passion for creating the perfect cup.',
    },
    {
      name: 'Varun Suvarna',
      role: 'Head of Operations',
      image: '/img/Varun.jpg',
      bio: 'Michael ensures that every aspect of our tea production meets the highest standards of quality.',
    },
    {
      name: 'Sharov Vijith Kumar',
      role: 'Customer Experience',
      image: '/img/Sharov.jpg',
      bio: 'Emma leads our customer service team, making sure every tea lover has an exceptional experience.',
    },
    {
      name: 'Sarang Pradeep',
      role: 'Customer Experience',
      image: '/img/sarang.jpg',
      bio: 'Emma leads our customer service team, making sure every tea lover has an exceptional experience.',
    },
    {
      name: 'Sejal Nair',
      role: 'Product Manager',
      image: '/img/Sejal.jpg',
      bio: 'Emma leads our customer service team, making sure every tea lover has an exceptional experience.',
    },
    {
      name: 'Preetham Das',
      role: 'Marketing Manager',
      image: '/img/Preetham.jpg',
      bio: 'Emma leads our customer service team, making sure every tea lover has an exceptional experience.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontFamily: 'Playfair Display' }}>
            Our Story
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Crafting exceptional tea experiences since 2010
          </Typography>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" sx={{ mb: 3, fontFamily: 'Playfair Display' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              At the heart of our mission is a commitment to protecting health and the planet-one cup at a time. As a team of passionate students, we've developed an innovative, plastic-free dissolvabe tea pod that eliminates the need for traditional tea bags, which often release harmful micropplastics when brewed.
            </Typography>
            <Typography variant="body1" paragraph>
              By combining <strong>natural ingredients with sustainable design,</strong> we aim to make tea not just a beverage, but a conscious, eco-friendly choice. Through this solutiobn, we strive to promote zero waste living, reduce hidden plastic exposure, and contribute to a healthier planet.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3"
              alt="Tea plantation"
              sx={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center', fontFamily: 'Playfair Display' }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid item key={member.name} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 