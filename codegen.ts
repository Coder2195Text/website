
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://us-east-1.cdn.hygraph.com/content/cl8hzzoiu59rq01tccufrg18c/master",
  documents: ["src/graphql/**/*.ts"],
  generates: {
    "src/graphql/generated/types.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    },
    "src/graphql/generated/": {
      preset: "client"

    }
  }
};

export default config;
