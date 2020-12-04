import React, { useState } from "react";
import { Router } from "react-router-dom";
import { Container } from "@material-ui/core";
import clsx from "clsx";
import history from "./history";
import Header from "../components/Header";
import Footer from "../components/Footer";
import routes from "../routes";
import useStyles from "./style";

const App = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  return (
    <Router history={history}>
      <div className={classes.root}>
        <Header setOpen={setOpen} open={open} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Container
            disableGutters
            maxWidth={false}
            className={classes.mainContent}
          >
            {routes}
          </Container>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
