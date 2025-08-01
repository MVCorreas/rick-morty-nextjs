"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiCall = async ({ path, method, data, headers = {} }) => {
  const resp = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });

  if (resp.status === 200) {
    return await resp.json();
  } else {
    throw new Error("Failed to fetch data");
  }
};
