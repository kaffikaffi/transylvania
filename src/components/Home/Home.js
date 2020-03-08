import React from "react";
import { withAuthorization } from "../Session/Session";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>Denne kan kun de som er logget inn se</p>
    </div>
  );
};
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);
