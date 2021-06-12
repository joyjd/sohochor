import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import { getCustomStyle } from "./../../../util";
import "./style.scss";

const Alma = () => {
  const cls = getCustomStyle({
    root: {
      background: "rgba(255,255,255,0.8)",
      padding: "10px",
      boxShadow: "0 0 5px 10px rgba(255,255,255,0.8)",
    },
  })();
  return (
    <Container maxWidth='xl' disableGutters={true}>
      <div className='parallax'>
        <div className='holder'>
          <Paper
            classes={{
              root: cls.root, // className name, e.g. `classes-nesting-root-x`
            }}
          >
            <p className='popout'>
              <span>A</span>
              <span>l</span>
              <span>m</span>
              <span>a</span>
              &nbsp;
              <span>M</span>
              <span>a</span>
              <span>t</span>
              <span>e</span>
              <span>r</span>
            </p>
            The main ideology and the wisdom of understanging the power of giving away for the betterment of humanity was incepted in the minds at the very roots of childhood since the starting of our school days at Ramakrishna Mission, Narendrapur. Hence the ideology of Sohochor is very closely knitted with the principles of our alma mater , our school.
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Alma);
