import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <Grid>
        </Grid>
        <h1>Welcome to TutorMe</h1>
        <p>Sign up with your NYU ID below</p>
        <Button color="green">Sign up</Button>
      </div>
    );
  }
}

export default LandingPage;
