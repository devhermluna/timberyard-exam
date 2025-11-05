import { client } from "@/lib/sanity.client";
import { allEventsQuery } from "@/lib/queries";
import moment from "moment";
import Typography from "@/components/Typography";
import Card from "@/components/Card";
import Container from "@/components/Container";

export default async function EventsPage() {
  const events = await client.fetch(allEventsQuery);

  return (
    <Container>
      <div className="container mx-auto px-4 sm:px-6">
        <Typography variant="h3" className="text-3xl font-bold mb-6">
          Events
        </Typography>
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
      </div>
    </Container>
  );
}
