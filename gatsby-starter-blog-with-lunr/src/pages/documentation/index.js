import * as React from "react";

import Layout from "../../components/Layout";
import DocRoll from "../../components/DocRoll";

export default class DocIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
	      <h1
                className="has-text-weight-bold is-size-1"
                style={{
                  boxShadow: "0.5rem 0 0 #fff, -0.5rem 0 0 #f65e0a",
                  backgroundPosition: "center center",
                  backgroundColor: "#fff",
                  color: "#f65e0a",
                  padding: "1rem",
                }}
              >
                Documentation
              </h1>
              <DocRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
