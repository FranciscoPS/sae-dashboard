import { Card } from "@/components/Card";

export default function Home() {
  return (
    <>
      <Card className="mx-auto max-w-lg">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          The greatest of all time (in tennis)
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-900 dark:text-gray-50">
          Roger Federer's unparalleled combination of skill, longevity, and
          versatility has led him to hold numerous records, including the most
          Grand Slam singles titles.
        </p>
        <p className="mt-2 hidden text-sm leading-6 text-gray-900 sm:block dark:text-gray-50">
          His graceful and effortless style of play, combined with his
          sportsmanship and impact on the global tennis community, solidify his
          legacy as the greatest tennis player of all time.
        </p>
      </Card>
    </>
  );
}
