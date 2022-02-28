import { createClient } from "../utils/client";
import { formatPrices } from "../utils/prices";
import { useContext } from "react";
import StoreContext from "../context/store-context";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import styles from "../styles/nav-bar.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/dashboard/bFooter";
import { Rating } from "@mui/material";

export default function Home({ products }) {
  const { cart } = useContext(StoreContext);

  return (
    <div>
      {/* <CustomerBenefits /> */}
      <Grid container className={styles.heroBox}>
        <Container>
          <Grid item md={6} className={styles.chairImg}>
            <Image src="/chair.png" alt="chair" width={594} height={446} />
          </Grid>
          <Grid className={styles.heroContent} item md={5}>
            <Typography
              sx={{ marginBottom: "12px" }}
              className={styles.dealsText}
              varient="h1"
            >
              HOT DEALS THIS WEEK
            </Typography>
            <Box sx={{ marginBottom: "16px" }}>
              <Typography className={styles.saleText}>
                SALE UP 50% <br /> MODERN FURNITURE
              </Typography>
            </Box>
            <Link href="/product">
              <button className={styles.heroBtn}>
                <Typography varient="h1" className={styles.heroBtnText}>
                  VIEW NOW
                </Typography>
              </button>
            </Link>
          </Grid>
        </Container>
      </Grid>
      <Container>
        <Grid mt={1} container spacing={3}>
          <Grid item md={6}>
            <Box className={styles.vitageProducts}>
              <Box>
                <Image
                  src="/vintagechair.png"
                  alt="chair"
                  width={353}
                  height={353}
                />
              </Box>
              <Box>
                <Box mb={3}>
                  <Typography className={styles.vitageChairText} varient="h1">
                  INY VINTAGE CHAIR
                </Typography>
                </Box>
                
                <Link href="/product">
                  <button className={styles.vintageChairBtn}>
                    <Typography
                      varient="h1"
                      className={styles.vintageChairBtnText}
                    >
                      VIEW DETAILS
                    </Typography>
                  </button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className={styles.terracotta}>
              <Box>
                <Image
                  src="/terracota.png"
                  alt="chair"
                  width={246}
                  height={368}
                />
              </Box>
              <Box>
                <Box mb={3}>
                  <Typography className={styles.vitageChairText} varient="h1">
                  LARGE TERRACOTA
                  <br /> VASE
                </Typography>
                </Box>
                
                <Link href="/product">
                  <button className={styles.vintageChairBtn}>
                    <Typography
                      varient="h1"
                      className={styles.vintageChairBtnText}
                    >
                      VIEW DETAILS
                    </Typography>
                  </button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: "30px" }}>
          <Grid className={styles.decor} item xs={3}>
            <Box className={styles.decorContent}>
              <Box className={styles.decoreText}>
                <Typography varient="h1">DECOR</Typography>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/product">
                  <button className={styles.decorBtn}>
                    <Typography varient="h1" className={styles.decorBtnText}>
                      VIEW DETAILS
                    </Typography>
                  </button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box ml={1}>
              <Box>
                <Image src="/towel.png" alt="towel" width={306} height={422} />
              </Box>
              <Box mt={2}>
                <Link href="/product">
                  <a>
                    <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                  </a>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box ml={1}>
              <Box>
                <Image src="/img1.png" alt="towel" width={306} height={422} />
              </Box>
              <Box mt={2}>
                <Link href="/product">
                  <a>
                    <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                  </a>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box ml={1}>
              <Box>
                <Image src="/img2.png" alt="towel" width={306} height={422} />
              </Box>
              <Box mt={2}>
                <Link href="/product">
                  <a>
                    <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                  </a>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: "30px" }}>
          <Grid item xs={3}>
            <Box ml={1}>
              <Box>
                <Image src="/img3.png" alt="towel" width={306} height={422} />
              </Box>
              <Box mt={2}>
                <Link href="/product">
                  <a>
                    <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                  </a>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box ml={1}>
              <Box>
                <Image src="/img4.png" alt="towel" width={306} height={422} />
              </Box>
              <Box mt={2}>
                <Link href="/product">
                  <a>
                    <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                  </a>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box ml={1}>
              <Box>
                <Image src="/img5.png" alt="towel" width={306} height={422} />
              </Box>
              <Box mt={2}>
                <Link href="/product">
                  <a>
                    <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                  </a>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid className={styles.decor} item xs={3}>
            <Box className={styles.decorContent}>
              <Box className={styles.decoreText}>
                <Typography varient="h1">DECOR</Typography>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="/product">
                  <button className={styles.decorBtn}>
                    <Typography varient="h1" className={styles.decorBtnText}>
                      VIEW DETAILS
                    </Typography>
                  </button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box>
        <Box className={styles.bedSheet}>
          <Grid container>
            <Grid item md={6}>
              <Container>
                <Box className={styles.bedSheetContent}>
                  <Typography varient="h3" className={styles.vitageChairText}>
                    BEDSHEET SETS
                  </Typography>
                  <Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography className={styles.price} varient="h2">
                        $50.00
                      </Typography>
                      <Typography
                        sx={{
                          marginLeft: "6px",
                          textDecoration: "line-through",
                        }}
                        className={styles.discount}
                        varient="h2"
                      >
                        $220.00
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.bedSheetP}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </Box>

                  <button className={styles.vintageChairBtn}>
                    <Typography
                      varient="h1"
                      className={styles.vintageChairBtnText}
                    >
                      VIEW DETAILS
                    </Typography>
                  </button>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Container>
        <Grid container sx={{ marginY: "20px" }}>
          <Grid item md={4}>
            <Box display="flex" alignItems="center">
              <Box>
                <Image src="/towel.png" alt="towel" width={306} height={422} />
              </Box>
              <Box ml={2}>
                <Link href="/product">
                  <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" alignItems="center">
              <Box>
                <Image src="/img26.png" alt="towel" width={306} height={422} />
              </Box>
              <Box ml={2}>
                <Link href="/product">
                  <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" alignItems="center">
              <Box>
                <Image src="/img27.png" alt="towel" width={306} height={422} />
              </Box>
              <Box ml={2}>
                <Link href="/product">
                  <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ marginY: "20px" }}>
          <Grid item md={4}>
            <Box display="flex" alignItems="center">
              <Box>
                <Image src="/img28.png" alt="towel" width={306} height={422} />
              </Box>
              <Box ml={2}>
                <Link href="/product">
                  <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" alignItems="center">
              <Box>
                <Image src="/img29.png" alt="towel" width={306} height={422} />
              </Box>
              <Box ml={2}>
                <Link href="/product">
                  <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" alignItems="center">
              <Box>
                <Image src="/img30.png" alt="towel" width={306} height={422} />
              </Box>
              <Box ml={2}>
                <Link href="/product">
                  <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ marginY: "20px" }}>
          <Grid item md={4}>
            <Box display="flex" alignItems="center">
              <Box>
                <Image src="/img31.png" alt="towel" width={306} height={422} />
              </Box>
              <Box ml={2}>
                <Link href="/product">
                  <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" alignItems="center">
              <Box>
                <Image src="/img32.png" alt="towel" width={306} height={422} />
              </Box>
              <Box ml={2}>
                <Link href="/product">
                  <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" alignItems="center">
              <Box>
                <Image src="/img33.png" alt="towel" width={306} height={422} />
              </Box>
              <Box ml={2}>
                <Link href="/product">
                  <Typography varient="h1">LINEN BEACH TOWEL</Typography>
                </Link>
                <Box
                  mt={2}
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box mt={2}>
                  <Typography className={styles.dealsText} varient="h3">
                    30$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}></Grid>
          <Grid sx={{ marginTop: "60px" }} item md={4}>
            <button className={styles.viewMoreBtn}>
              <Typography varient="h1" className={styles.decorBtnText}>
                LOAD MORE PRODUCTS
              </Typography>
            </button>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>

        <Box></Box>
      </Container>
      <Container sx={{ marginY: "60px" }}>
        <Box display="flex" justifyContent="space-between" alignItem="center">
          <Box>
            <Typography className={styles.vitageChairText} varient="h1">
              SING UP FOR THE NEWSLETTER
            </Typography>
            <p>Subscribe for the latest stories and promotions</p>
          </Box>
          <Box>
            <Paper
              component="form"
              sx={{ display: "flex", alignItems: "center", width: 400 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter your e-mail address"
                inputProps={{ "aria-label": "Enter your e-mail address" }}
              />
              <IconButton
                type="submit"
                sx={{
                  p: "10px",
                  background: "black",
                  color: "aliceblue",
                  borderRadius: "4px",
                }}
                aria-label="search"
              >
                <MailOutline />
              </IconButton>
            </Paper>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
export const getStaticProps = async () => {
  const client = createClient();
  const { products } = await client.products.list();

  return {
    props: {
      products,
    },
  };
};

