"use client"

import React, { useState } from 'react';
import { products } from "../../data/index";
import { Box, Button, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';




export default function QuantityButton() {


    const basePrice: number = products.length > 0 ? products[0].price : 0;
    const [quantity, setQuantity] = useState(1);
  // function för increment
    const incrementQuantity = () => {
      setQuantity(quantity + 1);
    };
  // function för decrement
    const decrementQuantity = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };
  
    // Function to calculate the total price based on quantity
    const calculateTotalPrice = (): number => {
      return basePrice * quantity;
    };
    return ( 
        <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '2px' }}>
          <IconButton color="primary" aria-label="decrement" onClick={decrementQuantity}>
            <RemoveIcon />
          </IconButton>
          <Button variant="contained" color="primary">
            <Typography component="span">{quantity}</Typography>
          </Button>
          <IconButton color="primary" aria-label="increment" onClick={incrementQuantity}>
            <AddIcon />
          </IconButton>
        </Box>

        {/* Displays total price på sidan */}
        <Box>
          <Typography variant="h6">Total Price: {calculateTotalPrice()}kr</Typography>
        </Box>

       
      </Box>
     );
}