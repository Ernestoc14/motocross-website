"use server"

export async function getMotoData() {
  const url = 'https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles?make=Kawasaki&model=Ninja';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '7f84114117msh60749b07331b46ep1a4c46jsn837104533757',
      'x-rapidapi-host': 'motorcycles-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options  );
    const result = await response.json();
    return (result);
  } catch (error) {
    console.error(error);
  }
}