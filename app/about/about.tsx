import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function StrengthIntro() {
  return (
    <div className="bg-black p-4 sm:p-8 flex items-center justify-center">
      <Card className="w-full max-w-7xl bg-black text-white overflow-hidden border-2 border-gray-600">
        <CardContent className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Meet the Strength overlords.
              </h1>
              <div className="space-y-4 text-gray-300">
                <p>
                  Gautam & Ravi didn&apos;t plan to start Strength—it kind of tackled them first.
                  One rooftop football match, a lot of passes, and a debate about sports
                  and connection led to an idea: why isn&apos;t there a single place for every
                  sports enthusiast to connect, compete, and celebrate? And just like
                  that, Strength was born.
                </p>
                <p>
                  Whether you&apos;re an athlete, a fan, or someone who just loves debating
                  Ronaldo vs. Messi, Strength is your all-in-one sports haven. It&apos;s where
                  pickup games meet global tournaments, stats meet stories, and
                  everyone gets a chance to showcase their passion. Join us in rewriting
                  the playbook for sports communities, one goal (or airball) at a time.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/assets/about.png"
                alt="Strength team members looking at plans"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
