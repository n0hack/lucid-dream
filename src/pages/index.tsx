import React from "react";
import Meta from "@lucid-components/Meta";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "@lucid-components/Layout";

interface Props {
  data: {
    allFile: {
      nodes: {
        publicURL: string;
      }[];
    };
    site: {
      siteMetadata: {
        author: string;
        description: string;
        siteUrl: string;
        title: string;
      };
    };
  };
}

const IndexBlock = styled.div`
  color: red;
`;

const IndexPage = ({}: Props) => {
  return (
    <Layout>
      <img src="./images/bg-main.jpg" style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
    </Layout>
  );
};

export default IndexPage;

export const Head = (props: Props) => {
  return <Meta thumbnailUrl={props.data.allFile.nodes[0].publicURL} {...props.data.site.siteMetadata} />;
};

export const getQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
      }
    }
    allFile(filter: { name: { eq: "og-thumb" } }) {
      nodes {
        publicURL
      }
    }
  }
`;
