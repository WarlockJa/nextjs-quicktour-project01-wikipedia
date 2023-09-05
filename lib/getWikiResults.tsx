const WIKI_SEARCH_URL = "https://en.wikipedia.org/w/api.php?";

const WIKI_SEARCH_URL2 =
  "https://en.wikipedia.org/w/api.php?action=query&generator=search&origin=*&format=json&gsrlimit=20&prop=pageimages|extracts&exchars=100&exintro=true&explaintext=true&exlimit=max&gsrsearch=";

export default async function getWikiResults(searchTerm: string) {
  // wikipedia api request
  // new URLSearchParams does not work with multiple words for whatever reason
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });

  const response = await fetch(WIKI_SEARCH_URL2 + searchTerm);

  return response.json();
}
