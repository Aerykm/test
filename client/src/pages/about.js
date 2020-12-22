import React from 'react';
import SearchForm from '../components/SearchForm';
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";

const About = () => {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything Anime</h1>
        <SearchForm
        />
        <SearchResults />
      </Container>
    </div>
  );
};

export default About;
