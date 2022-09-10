import { useEffect, useState } from "react";
import Filter from "./Component/filter";
import Tag from "./Component/tag";
import { DrawsResult } from "./__typescript/draw";

export const API_ENDPOINT = "http://127.0.0.1:8000/api";

const App = () => {
  const [drawsResult, setDrawsResult] = useState<null | DrawsResult>(null);

  useEffect(() => {
    const fetchDraws = async () => {
      try {
        const res = await fetch(`${API_ENDPOINT}/draws`);

        const data = (await res.json()) as DrawsResult;

        setDrawsResult(data);
      } catch (e: unknown) {
        console.log(e);
      }
    };

    fetchDraws();
  }, []);

  if (!drawsResult) return <div className="my-6 mx-auto">Loading...</div>;

  return (
    <div className="container mx-auto my-6">
      <div className="bg-white flex flex-col border border-zinc-100 py-6 lg:px-10 px-4 rounded-lg shadow-sm">
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Résultats du tirage au sort
          </h1>
          <span className="text-slate-400">{drawsResult.drawn_at}</span>
        </div>

        <div className="flex lg:justify-end justify-center">
          <Filter
            drawResult={drawsResult}
            updateDrawResult={setDrawsResult}
            types={[
              {
                name: "Boules",
                value: "balls",
              },
              {
                name: "Etoiles",
                value: "stars",
              },
            ]}
          />
        </div>

        <table className="border-collapse table-auto w-full text-sm my-2">
          <thead>
            <tr>
              <Tag type="th">Type</Tag>
              <Tag type="th">Valeur</Tag>
            </tr>
          </thead>
          <tbody>
            {[drawsResult.balls, drawsResult.stars].map((draws, i) =>
              draws?.map(({ value, type, id }) => (
                <tr key={id}>
                  <Tag type="td">{type === "number" ? "Boule" : "Etoile"}</Tag>
                  <Tag type="td">{value}</Tag>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <ul className="mt-4 flex lg:flex-row flex-col lg:justify-end justify-center items-center gap-x-4 gap-y-2">
          <li>
            <strong>Somme de boules </strong>: {drawsResult.ballsValue}{" "}
          </li>

          <li>
            <strong>Somme des étoiles </strong>: {drawsResult.starsValue}{" "}
          </li>

          <li>
            <strong>Combinaison :</strong> {drawsResult.combinaison}{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
