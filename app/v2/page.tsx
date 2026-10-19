import {Suspense} from "react";
import Image from "next/image";
import Next15HomepageV2, {Next15HomepageV2Skeleton} from "@/components/next15-homepage-v2";

export default function HomeV2() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between gap-12 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        {/* The slot content is personalized per request, so it streams in behind the static shell */}
        <Suspense fallback={<Next15HomepageV2Skeleton />}>
          <Next15HomepageV2 />
        </Suspense>
      </main>
    </div>
  );
}
