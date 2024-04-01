"use server";
export async function getQuestionData() {
  const res = await fetch(" https://the-trivia-api.com/v2/questions");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
