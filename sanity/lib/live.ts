import { client } from "./client";

export const sanityFetch = client.fetch.bind(client);
