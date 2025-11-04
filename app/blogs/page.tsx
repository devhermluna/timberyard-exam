import { client } from "@/lib/sanity.client";
import { allPostsQuery } from "@/lib/queries";
import Typography from "@/components/Typography";
import Card from "@/components/Card";

export default async function BlogsPage() {
  const blogs = await client.fetch(allPostsQuery);

  return (
    <div className="container mx-auto px-4 sm:px-0">
      <Typography variant="h3" className="text-3xl font-bold mb-6">
        Blogs
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: any) => (
          <Card
            key={blog._id}
            link={`/blogs/${blog.slug.current}`}
            title={blog.title}
            image={blog.mainImage}
          >
            <Typography variant="body" className="mt-2 text-gray-600">
              {blog.author.name}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
}
