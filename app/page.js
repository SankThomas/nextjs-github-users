import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default function Page() {
  const { userId } = auth();

  return (
    <>
      <header className="flex flex-wrap items-center justify-between p-4">
        <Button variant="outline">GitHub Users Dashboard</Button>

        <ul className="flex items-center justify-center gap-4">
          {!userId ? (
            <>
              <li>
                <Button variant="outline">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </li>
              <li>
                <Button variant="secondary">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Button variant="secondary">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </li>
          )}
        </ul>
      </header>

      <section className="relative max-w-4xl mx-auto text-white text-center py-36 space-y-8">
        <div className="absolute -z-10 bg-pink-400 w-40 h-40 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 bg-blue-400 w-40 h-40 blur-[100px]"></div>

        <h1 className="font-bold text-4xl lg:text-6xl">
          Github Users Dashboard
        </h1>
        <p className="text-slate-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero
          commodi porro nihil dignissimos ducimus ipsam officia rem quas iste?
        </p>

        <ul className="flex items-center justify-center gap-4">
          {!userId ? (
            <>
              <li>
                <Button variant="outline">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </li>
              <li>
                <Button variant="secondary">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Button variant="secondary">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
