"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCustomer } from "../context/PaymentContext";
import { createOrder } from "../endpoints/order-endpoints";
import { updateProductInventory } from "../endpoints/product-endpoints";
import { CartItem } from "../zod-validation/products";
import { customerSchema } from "../zod-validation/users";

export type CustomerInfo = z.infer<typeof customerSchema>;

export default function InputPayment() {
  const router = useRouter();
  const { setCustomer } = useCustomer();

  const form = useForm<CustomerInfo>({ resolver: zodResolver(customerSchema) });

  const handleSubmit = (customer: CustomerInfo) => {
    const cartData: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCustomer(customer);

    createOrder(customer, cartData);

    router.push("/confirmation");
    updateProductInventory(cartData);
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      {/* Rubrik och icon för inputfälten */}
      <Typography variant="h6" gutterBottom>
        <LocalShippingIcon sx={{ marginRight: "8px" }} />
        Leverans address
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* Textfält för namn och efternamn */}
            <TextField
              id="outlined-error"
              label="Fullständiga namn"
              {...form.register("fullname")}
              error={Boolean(form.formState.errors.fullname)}
              helperText={form.formState.errors.fullname?.message}
              variant="outlined"
              fullWidth
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för adress */}
            <TextField
              id="filled-error"
              label="Address"
              {...form.register("street")}
              error={Boolean(form.formState.errors.street)}
              helperText={form.formState.errors.street?.message}
              variant="filled"
              fullWidth
              autoComplete="street-address"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för zip */}
            <TextField
              id="outlined-error-helper-text"
              label="Post nummer"
              {...form.register("zip")}
              error={Boolean(form.formState.errors.zip)}
              helperText={form.formState.errors.zip?.message}
              variant="outlined"
              fullWidth
              autoComplete="postal-code"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för stad */}
            <TextField
              id="filled-error-helper-text"
              label="Stad"
              {...form.register("city")}
              error={Boolean(form.formState.errors.city)}
              helperText={form.formState.errors.city?.message}
              variant="filled"
              fullWidth
              autoComplete="address-level2"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för email */}
            <TextField
              id="standard-error"
              label="Email"
              {...form.register("email")}
              error={Boolean(form.formState.errors.email)}
              helperText={form.formState.errors.email?.message}
              variant="standard"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={6}>
            {/* Textfält för mobil */}
            <TextField
              id="standard-error-helper-text"
              label="Mobil nummer"
              {...form.register("phone")}
              error={Boolean(form.formState.errors.phone)}
              helperText={form.formState.errors.phone?.message}
              variant="standard"
              fullWidth
              autoComplete="tel"
            />
          </Grid>
        </Grid>
        {/* Knapparna cancel och continue */}
        <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
          <Button
            component={Link}
            href="/"
            variant="contained"
            color="primary"
            sx={{
              width: "30%",
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "darkgrey",
              },
            }}
          >
            Avbryt
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: "30%",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "darkgrey",
              },
            }}
          >
            Bekräfta
          </Button>
        </Box>
      </form>
    </Box>
  );
}
