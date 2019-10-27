import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column floated='right'>
              <Button>Login</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default NavBar;
