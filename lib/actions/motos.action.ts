"use server"

export async function getMotoData({ Make, Model }: { Make: string, Model: string }) {
  const url =
    `https://motorcycle-specs-database.p.rapidapi.com/make/${Make}/model/${Model}`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7f84114117msh60749b07331b46ep1a4c46jsn837104533757",
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
      'X-RapidAPI-Key': '7f84114117msh60749b07331b46ep1a4c46jsn837104533757',
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