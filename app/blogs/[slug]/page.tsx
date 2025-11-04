import Image from "@/components/Image";
import Typography from "@/components/Typography";
import { singlePostQuery } from "@/lib/queries";
import { client } from "@/lib/sanity.client";
import { PortableText } from "next-sanity";

interface Props {
  params: { slug: string };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = await client.fetch(singlePostQuery, { slug });

  if (!blog) return <div className="container mx-auto">Blog not found.</div>;

  return (
    <div className="container mx-auto px-4 sm:px-0">
      <Image
        src={blog.mainImage}
        alt={blog.title}
        className="h-[600px] w-full rounded-xl mb-6 object-cover object-top"
      />
      <Typography variant="h3" className="font-bold">
        {blog.title}
      </Typography>
      <Typography variant="h6" className="font-bold mb-6">
        {blog.author.name}
      </Typography>
      <div className="flex flex-col gap-6">
        <PortableText value={blog.body} />
      </div>
    </div>
  );
}
