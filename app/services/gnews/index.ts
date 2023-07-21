import axios from 'axios';

export const fetchNewsFromGNews = async () => {
    const response = await axios.get(`https://gnews.io/api/v4/top-headlines?lang=en&q=technology&apikey=${process.env.NEXT_PUBLIC_GNEWS_TOKEN}`);
    console.log(response);
    return response.data.articles.map(article => ({ title: article.title, summary: article.description, content: article.content }));
  };