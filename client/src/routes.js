import React from "react"
import { Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
    </div>
  )
}

export default Routes;
