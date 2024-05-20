import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SignInWithGitHubButton from "../ui/auth/SigninWithGithubButton";

function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: 400, width: "100%", p: 2 }}>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "25px", md: "3rem", lg: "2.6rem" },
                fontFamily: "times new roman",
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                fontWeight: "bold",
              }}
            >
              Log In
            </Typography>
            <SignInWithGitHubButton />
          </Box>
        </Grid>
        {/*         <Grid item xs={12}>
          <form className="form">
            <div className="form-group">
              <label
                style={{
                  color: "white",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
                  fontSize: "1.3rem",
                }}
                htmlFor="username"
              >
                Username
              </label>
              <TextField
                fullWidth
                id="username"
                variant="outlined"
                margin="normal"
                sx={{
                  bgcolor: "white",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div className="form-group">
              <label
                style={{
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
                  color: "white",
                }}
                htmlFor="password"
              >
                Password
              </label>

              <TextField
                fullWidth
                id="password"
                variant="outlined"
                margin="normal"
                type="password"
                sx={{
                  bgcolor: "white",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
              />
            </div>
             <Button
              component={Link}
              href="/"
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                color: "black",
                fontSize: "1rem",
                bgcolor: "#a9b4d5",
                "&:hover": { bgcolor: "#6d82b7" },
                fontFamily: "times new roman",
              }}
            >
              Log In
            </Button> 
          </form>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default Login;