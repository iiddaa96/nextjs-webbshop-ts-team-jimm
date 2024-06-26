import { db } from "@/prisma/db";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import Image from "next/image";
import Car from "./assets/car.jpg";
import MiddleImage from "./assets/palms.jpg";
import CardsHeader from "./ui/CardsForHomepage/CardsHeader";

export default async function HomePage() {
  const products = await db.product.findMany({
    orderBy: { id: "desc" },
  });

  const cardStyle = { width: 280, height: 310 }; // Fasta dimensioner för kort

  return (
    <main>
      <Box
        sx={{
          width: "95%",
          justifyContent: "center",
          position: "relative",
          margin: "20px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <div
          style={{
            width: "90vw",
            height: "60vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={MiddleImage}
            alt="Stor Bild"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </Box>
      {/* Kort för syns skull */}
      <Grid container spacing={2} justifyContent="center">
        <Grid sx={{ marginBottom: "24px" }} item>
          <Card sx={{ ...cardStyle, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1487977352961-6c1d15aa87c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ ...cardStyle, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1606459881381-2240e5f87bd4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ ...cardStyle, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1557434440-d4d48e6578b5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ ...cardStyle, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1613519144618-270608d80459?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "82%",
          justifyContent: "center",
          position: "relative",
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "90vw",
            height: "60vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={Car}
            alt="Stor Bild"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </Box>
      {/* Kort som leder till kategorierna */}
      <CardsHeader />
    </main>
  );
}
