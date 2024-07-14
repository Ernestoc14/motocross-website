"use server"

import { toast } from "sonner";

export async function getMotoData({ Make, Model }: { Make: string, Model: string }) {
  const url =
    `https://motorcycle-specs-database.p.rapidapi.com/make/${Make}/model/${Model}`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "620e7b4c35msh85deae73d14589cp1e3be7jsnc7196bcee00c",
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
      'X-RapidAPI-Key': '620e7b4c35msh85deae73d14589cp1e3be7jsnc7196bcee00c',
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
