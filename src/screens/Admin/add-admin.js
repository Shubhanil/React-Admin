import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//import Container from '@mui/material/Container';
//import CssBaseline from '@mui/material/CssBaseline';

/*custom Styles*/
import "./style.css";

const theme = createTheme();

const AddAdmin = () => {
  return (
    <React.Fragment>
      <Container fixed>
        <Box component="form" noValidate sx={{ mt: 3 }} className="container">
          <Grid container spacing={2}>
            <Grid item xs={4} sm={4}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Conatct No"
                name="phone"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                fullWidth
                name="confirm_password"
                label="Confirm Password"
                type="password"
                id="confirm_password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                fullWidth
                name="city"
                label="City Name"
                type="text"
                id="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select"
                >
                  <MenuItem value={1}>West Bengal</MenuItem>
                  <MenuItem value={2}>Himachal Pradesh</MenuItem>
                  <MenuItem value={2}>Arunachal Pradesh</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="address"
                label="Address"
                type="text"
                id="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select"
                >
                  <MenuItem value={10}>India</MenuItem>
                  <MenuItem value={11}>Pakistan</MenuItem>
                  <MenuItem value={12}>Australia</MenuItem>
                  <MenuItem value={13}>Nepal</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select"
                >
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={0}>De-active</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AddAdmin;
