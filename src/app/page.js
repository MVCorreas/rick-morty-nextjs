import { charactersListService } from "@/lib/services/characters/characters-list.service";

const data = await charactersListService();
console.log("Data from charactersListService:", data);
const character1 = data.data[1].name;


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <h1>{character1}</h1>
    </div>
  );
}
