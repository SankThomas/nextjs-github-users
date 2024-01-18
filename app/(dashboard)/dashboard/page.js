"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import RepoData from "./_components/repodata";

export default function Page() {
  const [repos, setRepos] = useState();
  const [value, setValue] = useState(0);

  async function getRepos() {
    try {
      const res = await fetch(
        "https://api.github.com/users/sankthomas/repos?per_page=10&sort=updated"
      );
      const data = await res.json();
      setRepos(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <section>
        <h1 className="text-4xl lg:text-5xl text-white font-bold mb-8">
          Dashboard page
        </h1>

        {repos ? (
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="grid gap-4">
              {repos.map((repo, index) => (
                <>
                  <Card
                    key={repo.id}
                    className={`${
                      value === index && "bg-slate-700"
                    } cursor-pointer hover:bg-slate-800 hidden lg:block`}
                    onClick={() => setValue(index)}
                  >
                    <CardTitle className="flex items-center justify-start">
                      <Image
                        src={repo.owner.avatar_url}
                        width={80}
                        height={80}
                        alt={repo.name}
                        className="rounded-full border-4 border-slate-800"
                      />

                      <CardContent className="space-y-2">
                        <h4 className="text-white text-xl capitalize">
                          {repo.name}
                        </h4>
                        <p className="text-slate-600 text-sm font-normal">
                          {repo.full_name}
                        </p>
                      </CardContent>
                    </CardTitle>
                  </Card>

                  <Sheet className="bg-slate-900">
                    <SheetTrigger>
                      <Card
                        key={repo.id}
                        className={`${
                          value === index && "bg-slate-700"
                        } cursor-pointer hover:bg-slate-800 lg:hidden`}
                        onClick={() => setValue(index)}
                      >
                        <CardTitle className="flex items-center justify-start">
                          <Image
                            src={repo.owner.avatar_url}
                            width={80}
                            height={80}
                            alt={repo.name}
                            className="rounded-full border-4 border-slate-800"
                          />

                          <CardContent className="space-y-2">
                            <h4 className="text-white text-xl capitalize">
                              {repo.name}
                            </h4>
                            <p className="text-slate-600 text-sm font-normal">
                              {repo.full_name}
                            </p>
                          </CardContent>
                        </CardTitle>
                      </Card>
                    </SheetTrigger>
                    <SheetContent className="w-9/12">
                      <SheetHeader>
                        <RepoData repos={repos} value={value} />
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </>
              ))}
            </div>

            <div className="hidden lg:block">
              {repos && <RepoData repos={repos} value={value} />}
            </div>
          </div>
        ) : (
          <h4>Loading...</h4>
        )}
      </section>
    </>
  );
}
