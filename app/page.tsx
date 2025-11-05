import { client } from "@/lib/sanity.client";
import { lastSixPostsQuery, lastThreeEventsQuery } from "@/lib/queries";
import Carousel from "../components/Carousel";
import Typography from "@/components/Typography";
import Card from "@/components/Card";
import moment from "moment";
import Container from "@/components/Container";

export default async function Home() {
  const posts = await client.fetch(lastSixPostsQuery);
  const events = await client.fetch(lastThreeEventsQuery);

  return (
    <Container>
      <main className="container mx-auto">
        <div className="px-4 sm:px-6">
          <Carousel slides={posts} className="mb-6 sm:mb-20" />
          <section>
            <Typography variant="body" className="text-2xl! sm:text-3xl! font-bold mb-2 sm:mb-6">Events</Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event: any) => (
                <Card
                  key={event._id}
                  link={`/events/${event.slug.current}`}
                  title={event.title}
                >
                  <Typography variant="body">
                    {moment(event.startDate).format("MMMM D, YYYY")} -{" "}
                    {moment(event.endDate).format("MMMM D, YYYY")}
                  </Typography>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Container>
  );
}
