import type {ReactElement} from 'react';
import Image from 'next/image';
import {fetchContent} from '@croct/plug-next/server';
import {renderInlineCode} from '@/components/next15-homepage';

export default async function Next15HomepageV2(): Promise<ReactElement> {
  const {content} = await fetchContent('next15-homepage@2');

  return (
    <>
      <h1 className="max-w-md text-center text-3xl font-semibold leading-10 tracking-tight text-black sm:text-left dark:text-zinc-50">
        {content.title}
      </h1>
      <ol className="flex max-w-md list-inside list-decimal flex-col gap-3 text-center text-lg leading-8 text-zinc-600 sm:text-left dark:text-zinc-400">
        {content.instructions.map((step, index) => (
          <li key={index} className="tracking-[-.01em]">
            {renderInlineCode(step)}
          </li>
        ))}
      </ol>
      <div className="flex w-full flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto"
          href={content.primaryButton.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert h-[14px] w-4"
            src="/vercel.svg"
            alt=""
            width={16}
            height={14}
          />
          {content.primaryButton.label}
        </a>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto"
          href={content.secondaryButton.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.secondaryButton.label}
        </a>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full px-5 underline-offset-4 transition-colors hover:underline sm:w-auto"
          href={content.ter.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.ter.Label}
        </a>
      </div>
    </>
  );
}

/**
 * Placeholder with the same footprint as the content,
 * streamed in the static shell while the slot is fetched.
 */
export function Next15HomepageV2Skeleton(): ReactElement {
  return (
    <>
      <div className="h-10 w-72 max-w-full animate-pulse rounded bg-black/[.06] dark:bg-white/[.08]" aria-hidden="true" />
      <div className="flex w-full max-w-md flex-col items-center gap-3 sm:items-start" aria-hidden="true">
        <div className="h-6 w-80 max-w-full animate-pulse rounded bg-black/[.06] dark:bg-white/[.08]" />
        <div className="h-6 w-64 max-w-full animate-pulse rounded bg-black/[.06] dark:bg-white/[.08]" />
      </div>
      <div className="flex w-full flex-col gap-4 sm:flex-row" aria-hidden="true">
        <div className="h-12 w-full animate-pulse rounded-full bg-black/[.06] sm:w-[158px] dark:bg-white/[.08]" />
        <div className="h-12 w-full animate-pulse rounded-full bg-black/[.06] sm:w-[158px] dark:bg-white/[.08]" />
        <div className="h-12 w-full animate-pulse rounded-full bg-black/[.06] sm:w-[158px] dark:bg-white/[.08]" />
      </div>
      <span className="sr-only">Loading…</span>
    </>
  );
}
