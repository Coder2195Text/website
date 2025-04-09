import { GraphQLClient } from "graphql-request";
import { graphql } from "./generated";

export const hygraph = new GraphQLClient("https://us-east-1.cdn.hygraph.com/content/cl8hzzoiu59rq01tccufrg18c/master");

export const GET_PROJECTS = graphql(`
query GetProject {
  projects {
    id
    title
    coverImage {
      url
    }
    slug
  }
}
`)