import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black/5 via-background to-background">
        <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center pt-12 md:pt-24 lg:pt-32 pb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              ISEA Conference 2025
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              International Symposium on Engineering and Architecture
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Calendar className="mr-1 h-4 w-4" />
              September 15-17, 2025
            </div>
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <MapPin className="mr-1 h-4 w-4" />
              Chennai, India
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row justify-center">
            <Button size="lg" className="min-w-[200px]" asChild>
              <Link href="/registration">Register Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px]"
              asChild
            >
              <Link href="/submission">Submit Paper</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About the Conference
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Advancing Engineering & Architecture
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join us for three days of innovative research presentations,
                keynote speeches, and networking opportunities in the fields of
                engineering and architecture.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Expert Speakers</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Learn from industry leaders and renowned academics
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Technical Sessions</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Multiple tracks covering cutting-edge research
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Important Dates
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mark your calendar for these key deadlines
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Paper Submission</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                May 15, 2025
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Acceptance Notification</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                July 1, 2025
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Early Registration</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                August 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Call for Papers
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Submit Your Research
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We invite submissions in all areas of engineering and
                architecture, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                <li>Sustainable Architecture</li>
                <li>Smart Infrastructure</li>
                <li>Environmental Engineering</li>
                <li>Urban Planning</li>
                <li>Construction Technology</li>
              </ul>
              <Link href="/submission">
                <Button className="mt-4">Submission Guidelines</Button>
              </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg"
                alt="Conference presentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
