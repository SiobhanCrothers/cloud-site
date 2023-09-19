import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/Layout";
import SearchForm from '../components/searchForm';
import SearchResults from '../components/searchResults';

const Search = ({
  data,
  location
}) => {
    const [results, setResults] = useState([]);
    const searchQuery = new URLSearchParams(location.search).get('keywords') || '';

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.en.index.search(searchQuery);
	const posts = refs.map(({ ref }) => lunr.en.store[ref]);
	setResults(posts);
        });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search]);
    return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <section className="section">
        <div className="container">
          <div className="content">
            <SearchForm query={searchQuery} />
            <SearchResults
              query={searchQuery}
              results={results}
            />
          </div>
        </div>
      </section>
    </Layout>
    );
};

export default Search;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

