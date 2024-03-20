import { zodResolver } from "@hookform/resolvers/zod";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {
  Box,
  Button,
  FormHelperTextProps,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCustomer } from "../context/PaymentContext";

// Skapar schema för inputfälten
const stringSchema = z.string();
const numberSchema = z.number();

// Error meddelande för inputfälten om man skriver fel
const customerSchema = z.object({
  name: z.string(),

  lastname: z.string(),

  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters long" }),

  zip: z.coerce
    .number()
    .min(5, { message: "Zipcode must be at least 5 digits long" }),

  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" }),

  email: z.string().email({ message: "Invalid email format" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long" }),
});

export type CustomerInfo = z.infer<typeof customerSchema>;

// Hantering av inputfält och formulärdata
export default function InputPayment() {
  const [formData, setFormData] = useState<CustomerInfo>({
    name: "",
    lastname: "",
    address: "",
    zip: "" as any,
    city: "",
    email: "",
    phone: "",
  });

  const router = useRouter();
  const { setCustomer } = useCustomer();

  const form = useForm<CustomerInfo>({ resolver: zodResolver(customerSchema) });

  const handleSubmit = (customer: CustomerInfo) => {
    console.log(customer);
    setCustomer(customer);
    router.push("/confirmation");
  };

  return (
    <Box
      data-cy="customer-form"
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
        Shipping Address
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-name-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-name" }}
              id="outlined-error"
              label="Name"
              {...form.register("name")}
              error={Boolean(form.formState.errors.name)}
              helperText={form.formState.errors.name?.message}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-lastname-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-lastname" }}
              id="outlined-error"
              label="Lastname"
              {...form.register("lastname")}
              error={Boolean(form.formState.errors.lastname)}
              helperText={form.formState.errors.lastname?.message}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-address-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-address" }}
              id="filled-error"
              label="Address"
              {...form.register("address")}
              error={Boolean(form.formState.errors.address)}
              helperText={form.formState.errors.address?.message}
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-zipcode-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-zipcode" }}
              id="outlined-error-helper-text"
              label="Zip"
              {...form.register("zip")}
              error={Boolean(form.formState.errors.zip)}
              helperText={form.formState.errors.zip?.message}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-city-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-city" }}
              id="filled-error-helper-text"
              label="City"
              {...form.register("city")}
              error={Boolean(form.formState.errors.city)}
              helperText={form.formState.errors.city?.message}
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-email-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-email" }}
              id="standard-error"
              label="Email"
              {...form.register("email")}
              error={Boolean(form.formState.errors.email)}
              helperText={form.formState.errors.email?.message}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              FormHelperTextProps={
                { "data-cy": "customer-phone-error" } as FormHelperTextProps
              }
              inputProps={{ "data-cy": "customer-phone" }}
              id="standard-error-helper-text"
              label="Mobile"
              {...form.register("phone")}
              error={Boolean(form.formState.errors.phone)}
              helperText={form.formState.errors.phone?.message}
              variant="standard"
              fullWidth
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
            Cancel
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
            Continue
          </Button>
        </Box>
      </form>
    </Box>
  );
}
