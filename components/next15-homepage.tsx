import type {ReactElement, ReactNode} from 'react';
import Image from 'next/image';
import {fetchContent} from '@croct/plug-next/server';

/**
 * Renders the text between backticks as inline code,
 * e.g. "Get started by editing `app/page.tsx`."
 */
export function renderInlineCode(text: string): ReactNode[] {
  return text.split('`').map((part, index) => (
    index % 2 === 1
      ? (
        <code
          key={index}
          className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] font-semibold text-black dark:bg-white/[.08] dark:text-zinc-50"
        >
          {part}
        </code>
      )
      : part
  ));
}

export default async function Next15Homepage(): Promise<ReactElement> {
  const {content} = await fetchContent('next15-homepage@1');

  return (
    <>
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
      </div>
    </>
  );
}

/**
 * Placeholder with the same footprint as the content,
 * streamed in the static shell while the slot is fetched.
 */
export function Next15HomepageSkeleton(): ReactElement {
  return (
    <>
      <div className="flex w-full max-w-md flex-col items-center gap-3 sm:items-start" aria-hidden="true">
        <div className="h-6 w-80 max-w-full animate-pulse rounded bg-black/[.06] dark:bg-white/[.08]" />
        <div className="h-6 w-64 max-w-full animate-pulse rounded bg-black/[.06] dark:bg-white/[.08]" />
      </div>
      <div className="flex w-full flex-col gap-4 sm:flex-row" aria-hidden="true">
        <div className="h-12 w-full animate-pulse rounded-full bg-black/[.06] sm:w-[158px] dark:bg-white/[.08]" />
        <div className="h-12 w-full animate-pulse rounded-full bg-black/[.06] sm:w-[158px] dark:bg-white/[.08]" />
      </div>
      <span className="sr-only">Loading…</span>
    </>
  );
}
