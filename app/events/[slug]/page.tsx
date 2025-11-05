import Container from "@/components/Container";
import { singleEventQuery } from "@/lib/queries";
import { client } from "@/lib/sanity.client";
import { PortableText } from "next-sanity";

interface Props {
  params: { slug: string };
}

export default async function EventPost({ params }: Props) {
  const { slug } = await params;
  const event = await client.fetch(singleEventQuery, { slug });

  return (
    <Container>
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <div className="flex flex-col gap-6">
          <PortableText value={event.body} />
        </div>
      </div>
    </Container>
  );
}
