import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import words from "./words";
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));



export default function WordCloud() {
    const classes = useStyles();
    const resizeStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "0",
        background: "#ffffff"
        
      };
      const options = {
        
        enableTooltip: true,
        deterministic: true,
        fontFamily: "impact",
        fontSizes: [5, 80],
        fontStyle: "normal",
        fontWeight: "normal",
        padding: 0,
        rotations: 2,
        rotationAngles: [0],
        scale: "linear",
        spiral: "rectangular",
        transitionDuration: 1000
      };
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar className="test" position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Les mots clés 
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            
             
            <div>
          <Resizable
            defaultSize={{
              width: "auto",
              height: 700,
            }}
            style={resizeStyle}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <ReactWordcloud options={options} words={words} />
            </div>
          </Resizable>
        </div>
            
          </div>
         
        </main>
      
        
      </React.Fragment>
    );
  }
