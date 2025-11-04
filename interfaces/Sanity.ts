export interface Author {
  name: string;
  bio: SanityBlock[];
  image: SanityImage;
}

export interface SanityImage {
  _type: "image";
  alt?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SanityBlock {
  _key: string;
  _type: "block";
  style: string;
  markDefs: any[];
  children: SanitySpan[];
}

export interface SanitySpan {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}
