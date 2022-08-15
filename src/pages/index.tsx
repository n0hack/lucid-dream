import Meta from "@lucid-components/Meta";
import { graphql, HeadFC } from "gatsby";
import React from "react";
import styled from "styled-components";

interface Props {
  data: {
    allFile: {
      nodes: {
        publicUrl: string;
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
  return <IndexBlock>IndexPage</IndexBlock>;
};

export default IndexPage;

export const Head = (props: Props) => {
  return <Meta thumbnailUrl={props.data.allFile.nodes[0].publicUrl} {...props.data.site.siteMetadata} />;
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
    allFile(filter: { name: { eq: "og-thumbnail" } }) {
      nodes {
        publicURL
      }
    }
  }
`;
