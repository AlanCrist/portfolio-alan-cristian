import axios from 'axios';

export const getGpt4GeneratedSummary = async (text: string) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: text,
        max_tokens: 60,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_TOKEN}`,
        },
      }
    );

    const data = response.data;
    return data.choices[0].text.strip();
  } catch (error) {
    console.error(error);
  }
}
