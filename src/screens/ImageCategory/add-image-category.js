import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";

/*custom Styles*/
import "./style.css";

const theme = createTheme();

const AddImageCategory = () => {
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
                label="Category Name"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="address"
                label="Description"
                type="text"
                id="address"
                autoComplete="address"
              />
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

export default AddImageCategory;
