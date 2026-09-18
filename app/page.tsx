export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-6 px-6 py-32 text-center">
        <svg
          className="h-14 w-14 animate-pulse text-zinc-400 dark:text-zinc-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
          />
        </svg>
        <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Under Maintenance
        </h1>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          We&apos;re currently performing scheduled maintenance. We&apos;ll be
          back shortly. Thanks for your patience.
        </p>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s] dark:bg-zinc-600" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s] dark:bg-zinc-600" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 dark:bg-zinc-600" />
        </div>
      </main>
      <p className="absolute bottom-6 text-sm text-zinc-400 dark:text-zinc-600">
        haiucup &middot; Yusup Maulana
      </p>
    </div>
  );
}
