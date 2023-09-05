import getWikiResults from "@/lib/getWikiResults";
import React from "react";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const displayTerms = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerms} not found`,
    };
  }

  return {
    title: displayTerms,
    description: `Search results for ${displayTerms}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => (
          //   <p key={result.pageid}>{JSON.stringify(result)}</p>
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} not found`}</h2>
      )}
    </main>
  );
  return content;
}
