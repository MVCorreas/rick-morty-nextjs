import { charactersListService } from "@/lib/services/characters/characters-list.service";
import Image from "next/image";

export default async function CharacterCard() {
  const data = await charactersListService();
  const characters = data.data;

  return (
    <>
      <h2 className="font-bold text-lg mt-4">Characters</h2>
      {characters.map((character, index) => (
        <div
          key={character.id || index}
          className="w-1/4 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300 p-2 flex flex-col h-full"
          data-test="character-card"
        >
          <div className="p-4 flex flex-col flex-1">
            <h1
              className="font-semibold text-sm text-colour-primary flex-1 mr-2"
              data-test="character-name"
            >
              {character.name}
            </h1>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
          </div>
        </div>
      ))}
    </>
  );
}
