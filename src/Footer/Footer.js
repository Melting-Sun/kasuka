import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ad adipisicing velit nostrud magna cillum. Cillum aute laboris minim excepteur occaecat reprehenderit veniam. Deserunt non sit sit consequat.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ipsum esse sint aliquip velit.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: elotfi51@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"created by "}
              <Link color="inherit" href="https://github.com/Melting-Sun">
                Erfan Lotfi
              </Link>{" "}
              
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
