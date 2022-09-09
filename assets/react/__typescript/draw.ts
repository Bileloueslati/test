export type Draw = {
  id: number;
  type: "number" | "special";
  value: string;
  draw_index: number;
};

export type DrawsResult = {
  eid: string;
  stars?: Draw[];
  balls?: Draw[];
  drawn_at: string;
  ballsValue: number;
  starsValue: number;
  combinaison: number;
};
