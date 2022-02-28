import Link from "next/link";
import Footer from "./bFooter";
import { Box, Grid, Paper } from "@material-ui/core";
import styles from "../../styles/nav-bar.module.css";

export const MainPage = ({ product }) => {

  return (
    <div >
      <main >
        <div >
          <section>
            <div className={styles.container}>
              <Box
                sx={{ width: "100%" }}
                display="flex"
                justifyContent="space-between"
                style={{ marginTop: "2%" }}
              >
                <Grid
                display="flex"
                justifyContent="space-between"
                  container
                 spacing={4}
                >
                  {products &&
              products.map((p) => {
                return (
                  <Grid  key={p.id}
                   item sm={3} xs={12} className={styles.seccards}>
           <Paper elevation={3} >
                      <Box >
                        <img
                          width="100%"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                          class="card-img-top"
                          alt=""
                        />
                        <a>
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </Box>

                      <div class="card-body text-center">
                        <a href="" class="grey-text">
                          <h5>Shirt</h5>
                        </a>
                        <h5>
                          <strong>
                              Denim shirt
                              <span class="badge badge-pill danger-color">
                                NEW
                              </span>
                          </strong>
                        </h5>

                        <h4 class="font-weight-bold blue-text">
                          <strong>120$</strong>
                        </h4>
                      </div>
                      
                    </Paper>
                    <Button><Link
                      href={{ pathname: `/product/[id]`, query: { id: p.id } }}
                      passHref
                    >
                      <a>
                        <div>
                          <h2>{p.title}</h2>
                          <p>{formatPrices(cart, p.variants[0])}</p>
                        </div>
                      </a>
                    </Link></Button>
                  </Grid>
                  )})}
                  <Grid item sm={3} xs={12} className={styles.seccards}>
                    <Paper elevation={3}>
                      <Box >
                        <img
                          width="100%"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                          class="card-img-top"
                          alt=""
                        />
                      </Box>

                      <div>
                        <a href="" class="grey-text">
                          <h5>Sport wear</h5>
                        </a>
                        <h5>
                          <strong>
                              Sweatshirt
                          </strong>
                        </h5>

                        <h4 class="font-weight-bold blue-text">
                          <strong>139$</strong>
                        </h4>
                      </div>
                      
                    </Paper>
                  </Grid>
                  <Grid item sm={3} xs={12} className={styles.seccards}>
                    <Paper elevation={3}>
                      <Box >
                        <img
                          width="100%"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                          class="card-img-top"
                          alt=""
                        />
                      </Box>

                      <div>
                        <div class="card-body text-center">
                          <a href="" class="grey-text">
                            <h5>Sport wear</h5>
                          </a>
                          <h5>
                            <strong>
                                Grey blouse
                                <span class="badge badge-pill primary-color">
                                  bestseller
                                </span>
                            </strong>
                          </h5>

                          <h4 class="font-weight-bold blue-text">
                            <strong>99$</strong>
                          </h4>
                        </div>
                        
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item sm={3} xs={12} className={styles.seccards}>
                    <Paper elevation={3}>
                      <Box >
                        <img
                          width="100%"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                          class="card-img-top"
                          alt=""
                        />
                      </Box>
                      <div>
                        <div class="card-body text-center">
                          <a href="" class="grey-text">
                            <h5>Outwear</h5>
                          </a>
                          <h5>
                            <strong>
                                Black jacket
                            </strong>
                          </h5>

                          <h4 class="font-weight-bold blue-text">
                            <strong>219$</strong>
                          </h4>
                        </div>
                        
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item sm={3} xs={12} className={styles.seccards}>
                    <Paper elevation={3}>
                      <Box >
                        <img
                          width="100%"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                          class="card-img-top"
                          alt=""
                        />
                      </Box>
                      <div>
                        <div class="card-body text-center">
                          <a href="" class="grey-text">
                            <h5>Shirt</h5>
                          </a>
                          <h5>
                            <strong>
                                Denim shirt
                                <span class="badge badge-pill danger-color">
                                  NEW
                                </span>
                            </strong>
                          </h5>

                          <h4 class="font-weight-bold blue-text">
                            <strong>120$</strong>
                          </h4>
                        </div>
                        
                      </div>
                    </Paper>
                  </Grid>

                  <Grid item sm={3} xs={12} className={styles.seccards}>
                    <Paper elevation={3}>
                      <Box >
                        <img
                          width="100%"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                          class="card-img-top"
                          alt=""
                        />
                      </Box>
                      <div>
                        <div class="card-body text-center">
                          <a href="" class="grey-text">
                            <h5>Sport wear</h5>
                          </a>
                          <h5>
                            <strong>
                                Sweatshirt
                            </strong>
                          </h5>

                          <h4 class="font-weight-bold blue-text">
                            <strong>139$</strong>
                          </h4>
                        </div>
                        
                      </div>
                    </Paper>
                  </Grid>

                  <Grid item sm={3} xs={12} className={styles.seccards}>
                    <Paper elevation={3}>
                      <Box >
                        <img
                          width="100%"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                          class="card-img-top"
                          alt=""
                        />
                      </Box>
                      <div>
                        <div class="card-body text-center">
                          <a href="" class="grey-text">
                            <h5>Sport wear</h5>
                          </a>
                          <h5>
                            <strong>
                              
                                Grey blouse
                                <span class="badge badge-pill primary-color">
                                  bestseller
                                </span>
                             
                            </strong>
                          </h5>

                          <h4 class="font-weight-bold blue-text">
                            <strong>99$</strong>
                          </h4>
                        </div>
                        
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item sm={3} xs={12} className={styles.seccards}>
                    <Paper elevation={3}>
                      <Box >
                        <img
                        width="100%"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                          class="card-img-top"
                          alt=""
                        />
                      </Box>
                      <div>
                        <div class="card-body text-center">
                          <a href="" class="grey-text">
                            <h5>Outwear</h5>
                          </a>
                          <h5>
                            <strong>
                              
                                Black jacket
                              
                            </strong>
                          </h5>

                          <h4 class="font-weight-bold blue-text">
                            <strong>219$</strong>
                          </h4>
                        </div>
                        
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};