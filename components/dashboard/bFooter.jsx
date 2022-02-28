import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SchoolIcon from "@mui/icons-material/School";
import styles from "../../styles/nav-bar.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Divider } from "@material-ui/core"
import {
  Facebook,
  GitHub,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { FaCodepen, FaDribbble, FaGooglePlus } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative", // need to set it up explicitly for zIndex to work
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },


  mainContaner: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Box
        style={{
          backgroundColor: "#929fba",
          paddingTop: "50px",
          marginBottom: "10px",
        }}
      >
        <Box
        className={styles.resbtn}
        >
          <Box md={6} sm={12}  style={{ marginRight: "10px", paddingBottom: "2px" }}>
            <button className={styles.footerbtn}>
              <a className={styles.footerbtnspace}> DOWNLOAD MDB</a>
              <SaveAltIcon />
            </button>
          </Box>
          <Box md={6} sm={12} display="flex" pb={2}>
            <button className={styles.footerbtn}>
              <a className={styles.footerbtnspace}> START FREE TUTORIAL</a>
              <SchoolIcon />
            </button>
          </Box>
        </Box>
        <Divider />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            marginTop: "14px",
          }}
        >
          <a
            className={styles.footersec}
            href="https://www.facebook.com/mdbootstrap"
            target="_blank"
          >
            <Facebook />
          </a>

          <a
            className={styles.footersec}
            href="https://twitter.com/MDBootstrap"
            target="_blank"
          >
            <Twitter />
          </a>

          <a
            className={styles.footersec}
            href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4"
            target="_blank"
          >
            <YouTube />
          </a>

          {/* <a
            className={styles.footersec}
            href="https://plus.google.com/u/0/b/107863090883699620484"
            target="_blank"
          >
            <FaGooglePlus />
          </a> */}

          {/* <a
            className={styles.footersec}
            href="https://dribbble.com/mdbootstrap"
            target="_blank"
          >
            <FaDribbble />
          </a> */}

          <a
            className={styles.footersec}
            href="https://pinterest.com/mdbootstrap"
            target="_blank"
          >
            <Pinterest />
          </a>

          <a
            className={styles.footersec}
            href="https://github.com/mdbootstrap/bootstrap-material-design"
            target="_blank"
          >
            <GitHub />
          </a>

          {/* <a
            className={styles.footersec}
            href="http://codepen.io/mdbootstrap/"
            target="_blank"
          >
            <FaCodepen />
          </a> */}
        </Box>
        <Box
          style={{
            backgroundColor: "#757f95",
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginTop: "6px",
          }}
        >
          © 2019 Copyright:
          <a
            className={styles.mdblink}
            href="https://mdbootstrap.com/education/bootstrap/"
            target="_blank"
          >
            {" "}
            MDBootstrap.com{" "}
          </a>
        </Box>
      </Box>
    </footer>
  );
}
