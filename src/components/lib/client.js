import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "29vcg0r5",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
