export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  social_image: string;
  published_at: string;
  tag_list: string[];
  user: {
    name: string;
    profile_image: string;
  };
}

export async function fetchTechNews(): Promise<DevToArticle[]> {
  const res = await fetch(
    "https://dev.to/api/articles?tag=technology&top=1&per_page=6",
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) throw new Error("Failed to fetch tech news");
  return res.json();
}

export async function fetchProgrammingTips(): Promise<DevToArticle[]> {
  const res = await fetch(
    "https://dev.to/api/articles?tag=tutorial&top=1&per_page=6",
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) throw new Error("Failed to fetch programming tips");
  return res.json();
}
