export const allPostsQuery = `
  *[_type == "post"]{
    _id,
    "author": author->{
      name,
      image,
      bio
    },
    title,
    slug,
    mainImage,
    publishedAt
  } | order(publishedAt asc)
`;

export const lastSixPostsQuery = `
  *[_type == "post"] | order(_createdAt desc)[0...5]{
    _id,
    "author": author->{
      name,
      image,
      bio
    },
    title,
    slug,
    mainImage,
    publishedAt
  }
`;

export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    "author": author->{
      name,
      image,
      bio
    },
    title,
    slug,
    mainImage,
    publishedAt,
    body
  }
`;

export const allEventsQuery = `
  *[_type == "event"]{
    _id,
    "author": author->{
      name,
      image,
      bio
    },
    title,
    slug,
    publishedAt,
    startDate,
    endDate,
  } | order(startDate asc)
`;

export const singleEventQuery = `
  *[_type == "event" && slug.current == $slug][0]{
    _id,
    "author": author->{
      name,
      image,
      bio
    },
    title,
    slug,
    publishedAt,
    startDate,
    endDate,
    body,
  }
`;

export const lastThreeEventsQuery = `
  *[_type == "event"] | order(startDate asc)[0...3]{
    _id,
    "author": author->{
      name,
      image,
      bio
    },
    title,
    slug,
    publishedAt,
    startDate,
    endDate,
  }
`;
