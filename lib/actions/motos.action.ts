"use server"

import { toast } from "sonner";

export async function getMotoData({ Make, Model }: { Make: string, Model: string }) {
  const url =
    `https://motorcycle-specs-database.p.rapidapi.com/make/${Make}/model/${Model}`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fecf07d38dmshfd72a9487e6306fp111022jsn45da8bbfecda",
      "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getMotoImage({ articleID }: { articleID: number }) {
  const url = `https://motorcycle-specs-database.p.rapidapi.com/article/${articleID}/image/link`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fecf07d38dmshfd72a9487e6306fp111022jsn45da8bbfecda',
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
