const BASE_URL = "https://dinosaur-facts-api.shultzlab.com/dinosaurs";

export async function getDinosaurs() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch dinosaurs");
  }

  return await response.json();
}

export async function getDinosaurByName(name) {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch dinosaur");
  }

  const data = await response.json();
  return data.find(dino => dino.name === name);
}