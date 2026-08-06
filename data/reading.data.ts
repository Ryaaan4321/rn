export interface BlogEntry {
  url: string;
  title: string;
  description: string;
  image: string;
  siteName: string;
  favicon: string;
}

export const blogsRead: BlogEntry[] = [
  {
    url: "https://www.mongodb.com/docs/manual/sharding/#std-label-sharding-background",
    title: "Sharding - Database Manual - MongoDB Docs",
    description: "Scale MongoDB deployments horizontally. Use sharding to distribute data across multiple machines, supporting large datasets and high throughput operations.",
    image: "https://www.mongodb.com/docs/assets/meta_generic.png",
    siteName: "mongodb.com",
    favicon: "https://www.google.com/s2/favicons?domain=mongodb.com&sz=64",
  },
  {
    url: "https://www.bmc.com/blogs/mongodb-sharding-explained/",
    title: "MongoDB Sharding: Concepts, Examples & Tutorials",
    description: "",
    image: "https://s7280.pcdn.co/wp-content/uploads/2019/04/mongodb-guide-300x150.jpg.optimal.jpg",
    siteName: "BMC Blogs",
    favicon: "https://www.google.com/s2/favicons?domain=bmc.com&sz=64",
  },
  {
    url: "https://levelup.gitconnected.com/complete-guide-to-building-authorization-systems-using-rbac-rebac-and-abac-0a2ce5311d25",
    title: "Complete Guide to Building Authorization Systems using RBAC, ReBAC and ABAC",
    description: "Learn how to build RBAC, ReBAC, ABAC Authorization models with OpenFGA by building a Github clone",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*TFDiNouzU_a8wiyHRiaUMA.jpeg",
    siteName: "Medium",
    favicon: "https://www.google.com/s2/favicons?domain=levelup.gitconnected.com&sz=64",
  },
  {
    url: "https://github.com/animir/node-rate-limiter-flexible/wiki/Fixed-Window-rate-limiting-algorithm-explained",
    title: "Fixed Window rate limiting algorithm explained",
    description: "Atomic and non-atomic counters and rate limiting tools. Limit resource access at any scale. - animir/node-rate-limiter-flexible",
    image: "",
    siteName: "GitHub",
    favicon: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
  },
  {
    url: "https://datatracker.ietf.org/doc/html/rfc6750#section-2.1",
    title: "RFC 6750: The OAuth 2.0 Authorization Framework: Bearer Token Usage",
    description: "This specification describes how to use bearer tokens in HTTP requests to access OAuth 2.0 protected resources. Any party in possession of a bearer token a bearer can use it to get access to the associated resources (without demonstrating possession of a cryptographic key). To prevent misuse, bearer tokens need to be protected from disclosure in storage and in transport. [STANDARDS-TRACK]",
    image: "https://static.ietf.org/dt/12.69.0/ietf/images/ietf-logo-card.png",
    siteName: "IETF Datatracker",
    favicon: "https://www.google.com/s2/favicons?domain=datatracker.ietf.org&sz=64",
  },
];