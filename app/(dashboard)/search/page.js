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
import RepoData from "../dashboard/_components/repodata";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [repos, setRepos] = useState();
  const [value, setValue] = useState(0);
  const [user, setUser] = useState("bradtraversy");

  async function getRepos() {
    try {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=10&sort=updated`
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

  function handleSearchUser(e) {
    e.preventDefault();

    getRepos();
  }

  return (
    <>
      <section>
        <h1 className="text-4xl lg:text-5xl text-white font-bold mb-8">
          Search page
        </h1>

        <form onSubmit={handleSearchUser} className="mb-8 flex gap-2">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a GitHub username"
            required
            maxLength={56}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="py-2 px-4 text-sm bg-slate-900 border-2 border-slate-800 rounded-lg w-1/2 text-white"
          />
          <Button variant="secondary">Search</Button>
        </form>

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
                    <CardTitle className="flex flex-col lg:flex-row items-center justify-start">
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
