import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      name: 'Classic Green Tea',
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3',
      description: 'Our signature green tea blend',
    },
    {
      id: 2,
      name: 'Earl Grey',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3',
      description: 'Classic black tea with bergamot',
    },
    {
      id: 3,
      name: 'Chamomile',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3',
      description: 'Soothing herbal tea',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          backgroundImage: 'url(https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        />
        <Container>
          <Box sx={{ position: 'relative', color: 'white', textAlign: 'center' }}>
            <Typography variant="h2" component="h1" sx={{ mb: 2, fontFamily: 'Playfair Display' }}>
              Welcome to Tèva
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Discover the perfect blend of tradition and taste
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/shop')}
              sx={{ backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.dark' } }}
            >
              Shop Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center', fontFamily: 'Playfair Display' }}>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {product.name}
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Microplastic Awareness Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" sx={{ mb: 3, fontFamily: 'Playfair Display' }}>
                Our Commitment to Sustainability
              </Typography>
              <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                Microplastic-Free Tea Bags
              </Typography>
              <Typography paragraph>
                At Tèva, we're committed to protecting our environment and your health. That's why we've eliminated microplastics from our tea bags.
              </Typography>
              <Typography paragraph>
                Traditional tea bags often contain plastic that releases microplastics into your tea and eventually into our environment. Our innovative, plant-based tea bags are:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" paragraph>
                  100% biodegradable and compostable
                </Typography>
                <Typography component="li" paragraph>
                  Free from microplastics and harmful chemicals
                </Typography>
                <Typography component="li" paragraph>
                  Made from sustainable, renewable materials
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => navigate('/about')}
                sx={{ mt: 2 }}
              >
                Learn More About Our Mission
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  bgcolor: 'white',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" color="primary" gutterBottom>
                  Did You Know?
                </Typography>
                <Typography paragraph>
                  A single plastic tea bag can release billions of microplastic particles into your cup of tea. These particles can accumulate in our bodies and the environment.
                </Typography>
                <Typography paragraph>
                  By choosing Tèva's microplastic-free tea bags, you're making a conscious choice for your health and the planet.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 