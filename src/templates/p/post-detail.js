import React from 'react';

import Header from '../../components/Header';
import { graphql } from 'gatsby';
import Metadata from '../../components/Metadata';
import Footer from '../../components/Footer';

export const query = graphql`  
  query($slug: String!) {    
    markdownRemark(fields: { slug: { eq: $slug } }) {      
      frontmatter {        
        title        
        date(formatString: "DD MMMM, YYYY")      
        featured { 
          childImageSharp { 
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }      
      }
      timeToRead      
      html    
    }  
  }`;

function postDetail(props) {
  return (
    <>
      <Metadata
        title={props.data.markdownRemark.frontmatter.title}
        description={`${props.data.markdownRemark.frontmatter.title} post detail`}
      />

      <Header />
      <div className="xl:max-w-screen-xl xl:mx-auto mx-6 text-gray-700">

        <main className="max-w-[38rem] mx-auto mt-8 mb-44">
          <h2 className="text-lg font-semibold">{props.data.markdownRemark.frontmatter.title}</h2>
          <div className="text-xs mt-1 mb-3">
            {props.data.markdownRemark.frontmatter.date}{" "}
            <span> | </span> {props.data.markdownRemark.timeToRead} min read
          </div>

          <div
            className=""
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default postDetail;
