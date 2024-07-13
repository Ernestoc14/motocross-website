"use server"

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

export async function handleButtonClick(makeName: string, modelName: string) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({ makeName: makeName, modelName: modelName });
  var requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "https://2t69hj7kyd.execute-api.us-west-2.amazonaws.com/dev",
      requestOptions
    );
    const result = await response.json();
    console.log(result.body)
    alert(result.body);
  } catch (error) {
    console.log("error", error);
  }
};