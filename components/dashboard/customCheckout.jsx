import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from "../../styles/nav-bar.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import {
  Card,
  Container,
  createStyles,
  Divider,
  Grid,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = (theme) =>
  createStyles({
    input: {
      "&::placeholder": {
        fontStyle: "italic",
      },
    },
  });

const contries = [
  {
    value: "Choose...",
    //   label: '$',
  },
  {
    value: "United States",
    //   label: '$',
  },
];
const states = [
  {
    value: "Choose...",
  },
  {
    value: "United States",
  },
];

export default function CustomCheckout({products}) {
  const classes = useStyles();
  const [state, setState] = React.useState("Choose...");

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <Box style={{ backgroundColor: "#eeeeee", paddingBottom: "50px" }}>
      <Container fixed>
        <Typography
          style={{
            paddingTop: "54px",
            paddingBottom: "38px",
            fontWeight: "700",
          }}
          align="center"
          variant="h4"
        >
          Checkout Form
        </Typography>
        <Grid container spacing={5}>
          <Grid
            item
            style={{ marginTop: "5px" }}
            xs={12}
            md={8}
            sx={{
              "& > :not(style)": {
                m: 1,
              },
            }}
          >
            <Card sx={{ minWidth: 275 }}>
              <Container fixed>
                <Grid
                  container
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 10px",
                  }}
                >
                  <Grid item sm={5} xs={12}>
                    <TextField
                      id="standard-basic"
                      sx={{ m: 1, width: "40ch" }}
                      fullWidth
                      label="First Name"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item sm={5} xs={12}>
                    <TextField
                      id="standard-basic"
                      sx={{ m: 1, width: "40ch" }}
                      fullWidth
                      label="Last Name"
                      variant="standard"
                    />
                  </Grid>
                </Grid>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginY: "5px",
                    }}
                  >
                    <span
                      className={styles.signrate}
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    >
                      @
                    </span>
                    <TextField
                      id="input-with-sx"
                      placeholder="Username"
                      fullWidth
                      variant="standard"
                    />
                  </Box>
                  <Box my={3}>
                    <TextField
                      margin="normal"
                      variant="standard"
                      id="input-with-sx"
                      label="Email (optional)"
                      placeholder="youremail@example.com"
                      fullWidth
                      InputProps={{
                        classes: { input: classes.input },
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Box>

                  <Box my={3}>
                    <TextField
                      margin="normal"
                      variant="standard"
                      id="input-with-sx"
                      label="Address"
                      placeholder="1234 Main St"
                      fullWidth
                      InputProps={{
                        classes: { input: classes.input },
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Box>
                  <Box my={3}>
                    <TextField
                      margin="normal"
                      variant="standard"
                      id="input-with-sx"
                      label="Address 2 (optoonal)"
                      placeholder="Appartment or Suite"
                      fullWidth
                      InputProps={{
                        classes: { input: classes.input },
                      }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Box>
                </Box>
                <Box pb={3} display="flex" justifyContent="space-between">
                  <Box display="inline-grid">
                    <label htmlFor="">Country</label>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      value={state}
                      variant="outlined"
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {contries.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </TextField>
                  </Box>
                  <Box display="inline-grid">
                    <label htmlFor="">State</label>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      value={state}
                      variant="outlined"
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {states.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </TextField>
                  </Box>
                  <Box display="inline-grid">
                    <label htmlFor="">Zip</label>
                    <TextField
                      variant="outlined"
                    ></TextField>
                  </Box>
                </Box>
                <Divider />
                <Box py={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Shipping address is the same as my billing address"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Save this information for next time"
                    />
                  </FormGroup>
                </Box>
                <Divider />
                <Box my={2}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Grid
                  container
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Grid item md={5} xs={12}>
                    <label htmlFor="">Name on card</label>
                    {/* <TextField
                      id="outlined-select-currency-native"
                      variant="outlined"
                      fullWidth
                      helperText="Full name as displayed on card"
                    /> */}
                    <TextField
                      id="filled-password-input"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      helperText="Full name as displayed on card"
                    />
                  </Grid>
                  <Grid item sm={5} xs={12}>
                    <label htmlFor="">Credit card number</label>
                    {/* <TextField
                      id="outlined-select-currency-native"
                      variant="outlined"
                      fullWidth
                    /> */}
                    <TextField
                      id="filled-password-input"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                {/* <Grid  my={2}> */}
                <Box display="felx" justifyContent="space-between">
                  <Box display="inline-grid">
                    <label htmlFor="">Expiration</label>
                    {/* <TextField
                      id="outlined-select-currency-native"
                      variant="outlined"
                    /> */}
                    <TextField
                      id="filled-password-input"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                    />
                  </Box>
                  <Box display="inline-grid">
                    <label htmlFor="">CVV</label>
                    {/* <TextField
                      id="outlined-select-currency-native"
                      variant="outlined"
                    /> */}
                  </Box>
                </Box>
                {/* </Grid> */}
                <Divider />
                <Box my={2}>
                  <Button sx={{ p: 2 }} variant="contained" fullWidth>
                    CONTINUE TO CHECKOUT
                  </Button>
                </Box>
              </Container>
            </Card>
          </Grid>

          <Grid item sm={4}>
            <Box mb={3} display="flex" justifyContent="space-between">
              <Box style={{ color: "#a9a6a6", fontSize: "24px" }}>
                <Typography variant="h5">Your cart</Typography>
              </Box>
              <Box
                style={{
                  backgroundColor: "#a6c",
                  padding: "10px 14px",
                  borderRadius: "50%",
                }}
              >
                <span>3</span>
              </Box>
            </Box>
            <Card>
              <Container>
                <Box display="felx" justifyContent="space-between">
                  <Box>
                    <p>Product name</p>
                    <span>Brief description</span>
                  </Box>
                  <Box>
                    <p>$12</p>
                  </Box>
                </Box>
                <Box display="felx" justifyContent="space-between">
                  <Box>
                    <p>Second product</p>
                    <span>Brief description</span>
                  </Box>
                  <Box>
                    <p>$8</p>
                  </Box>
                </Box>
                <Box display="felx" justifyContent="space-between">
                  <Box>
                    <p>Third item</p>
                    <span>Brief description</span>
                  </Box>
                  <Box>
                    <p>$5</p>
                  </Box>
                </Box>
                <Box display="felx" justifyContent="space-between">
                  <Box>
                    <p>Total(USD)</p>
                  </Box>
                  <Box>
                    <p>$20</p>
                  </Box>
                </Box>
              </Container>
            </Card>
            <Box mt={3}>
              <Card style={{ padding: "7px 5px" }}>
                <TextField
                  id="filled-password-input"
                  type="text"
                  autoComplete="current-password"
                  variant="outlined"
                />
                {/* <TextField
                  variant="outlined"
                  placeholder="Promo code"
                ></TextField> */}
                <Button
                  sx={{ padding: " 16px 44px", backgroundColor: "#aa66cc" }}
                  variant="contained"
                >
                  REDEEM
                </Button>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
