import React from "react";
import Metadata from '../components/Metadata';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <>
      <Metadata
        title="Gatsby.js Blog"
        description="A blog created with Gatsby, GraphQL and TW"
      />

      <div className="xl:max-w-screen-xl xl:mx-auto mx-6 text-gray-700">
        <Header />
        <main>
          <Posts />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
