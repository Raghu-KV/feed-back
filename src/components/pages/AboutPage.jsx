import Card from "../shared/Card";
import React from "react";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card darkMode={false}>
      <h1>Trsting Router</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        fuga dolor perferendis officia nostrum, ipsam officiis sunt deleniti?
        Ullam commodi voluptatum ipsa natus nam. Veritatis rem et fugiat
        delectus dignissimos!
      </p>
      <p>
        <Link to="/">back to home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
