import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Green Tea',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3',
      description: 'Our signature green tea blend',
      category: 'Green Tea',
    },
    {
      id: 2,
      name: 'Earl Grey',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1628153915053-9a493ee1a27e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Classic black tea with bergamot',
      category: 'Black Tea',
    },
    {
      id: 3,
      name: 'Chamomile',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1602223876962-6b2b349dc239?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Soothing herbal tea',
      category: 'Herbal Tea',
    },
    {
      id: 4,
      name: 'Jasmine Green',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1719004322339-afe59dc291d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Green tea with jasmine flowers',
      category: 'Green Tea',
    },
    {
      id: 5,
      name: 'Peppermint',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1707336666897-fcbfef7bdf56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Refreshing mint tea',
      category: 'Herbal Tea',
    },
    {
      id: 6,
      name: 'English Breakfast',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1635217217664-578a7e17218f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Strong black tea blend',
      category: 'Black Tea',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 4, textAlign: 'center', fontFamily: 'Playfair Display' }}>
        Our Tea Collection
      </Typography>

      {/* Search Bar */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search teas..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Products Grid */}
      <Grid container spacing={4}>
        {products.map((product) => (
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
                <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                  ₹ {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Category: {product.category}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop; 