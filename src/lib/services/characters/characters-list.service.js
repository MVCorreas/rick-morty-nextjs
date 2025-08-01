"use server";
import { apiCall } from "@/lib/services/api";

export async function charactersListService() {
  return await apiCall({
    path: `/api/characters`,
    method: "GET",
  });
}
