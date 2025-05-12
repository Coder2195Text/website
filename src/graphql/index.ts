import { GraphQLClient } from "graphql-request";
import { graphql } from "./generated";

export const hygraph = new GraphQLClient(
  "https://us-east-1.cdn.hygraph.com/content/cl8hzzoiu59rq01tccufrg18c/master"
);

export const GET_PROJECTS = graphql(`
  query GetProjects {
    projects {
      id
      title
      projectType
      date
      excerpt
      featured
      coverImage {
        url
      }
      slug
    }
  }
`);

export const GET_PROJECT = graphql(`
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
      id
      title
      projectType
      createdAt
      excerpt
      updatedAt
      description {
        markdown
      }
      embed
      link

      coverImage {
        url
      }
      slug
    }
  }
`);

export const GET_PROJECT_METADATA = graphql(`
  query GetProjectMetadata($slug: String!) {
    project(where: { slug: $slug }) {
      id
      title
      createdAt
      excerpt
      coverImage {
        url
      }
      embed
      projectType
    }
  }
`);
