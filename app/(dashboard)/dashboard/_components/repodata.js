import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { format } from "date-fns/format";
import { AntennaIcon, BoxIcon, EyeIcon } from "lucide-react";

export default function RepoData({ repos, value }) {
  return (
    <>
      <Card className="lg:fixed lg:w-[600px]">
        <CardTitle className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start text-center lg:text-left gap-4">
          <Image
            src={repos[value].owner.avatar_url}
            width={200}
            height={200}
            alt={repos[value].name}
            className="border-4 border-slate-800 rounded-full"
          />

          <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start space-y-4">
            <h2 className="text-white capitalize">{repos[value].name}</h2>

            <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
              <CardDescription>
                <span className="text-white">Created:</span>
                {format(new Date(repos[value].created_at), "dd MMMM yyyy")}
              </CardDescription>
              <CardDescription>
                <span className="text-white">Updated:</span>
                {format(new Date(repos[value].updated_at), "dd MMMM yyyy")}
              </CardDescription>
            </div>
          </div>
        </CardTitle>

        <CardContent className="mt-4">
          {repos[value].description ? (
            <CardDescription>{repos[value].description}</CardDescription>
          ) : null}
        </CardContent>

        <CardContent className="flex flex-wrap items-start justify-start gap-4">
          <CardDescription className="flex items-center justify-start gap-2">
            <EyeIcon />
            {repos[value].watchers_count} watchers
          </CardDescription>

          <CardDescription className="flex items-center justify-start gap-2">
            <AntennaIcon />
            {repos[value].forks_count} forks
          </CardDescription>

          <CardDescription className="flex items-center justify-start gap-2">
            <BoxIcon />
            {repos[value].size} kb
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
