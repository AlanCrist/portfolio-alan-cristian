import { fetchTechNews, fetchProgrammingTips } from "./services/devto";
import { Article } from "./types";
import HomeClient from "./components/HomeClient";

function mapArticles(
  data: { title: string; description: string; url: string; cover_image: string | null; social_image: string; published_at: string; tag_list: string[]; user: { name: string; profile_image: string } }[]
): Article[] {
  return data.map((a) => ({
    title: a.title,
    description: a.description,
    url: a.url,
    cover_image: a.cover_image,
    social_image: a.social_image,
    published_at: a.published_at,
    tag_list: a.tag_list,
    author: a.user.name,
    author_image: a.user.profile_image,
  }));
}

export default async function Home() {
  let techNews: Article[] = [];
  let tips: Article[] = [];

  try {
    const [newsData, tipsData] = await Promise.all([
      fetchTechNews(),
      fetchProgrammingTips(),
    ]);
    techNews = mapArticles(newsData);
    tips = mapArticles(tipsData);
  } catch (error) {
    console.error("Failed to fetch articles:", error);
  }

  return <HomeClient techNews={techNews} tips={tips} />;
}
