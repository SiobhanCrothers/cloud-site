import * as React from "react";

import Layout from "../../components/Layout";
import WelcomeRoll from "../../components/WelcomeRoll";

export default class WelcomeIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1
                className="has-text-weight-bold is-size-1"
                style={{
                  boxShadow: "0 0 0 #fff, -0.5rem 0 0 #f65e0a",
                  backgroundColor: "#fff",
                  color: "#f65e0a",
                  padding: "1rem",
                }}
              >
                Welcome to Bravura Cloud
              </h1>
              <WelcomeRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
