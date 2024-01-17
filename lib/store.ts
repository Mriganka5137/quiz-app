import { create } from "zustand";

interface ScoreInterface {
  score: number;
  setScore: () => void;
}

const useScore = create<ScoreInterface>((set) => ({
  score: 0,
  setScore: () => set((state) => ({ score: state.score + 1 })),
}));

export default useScore;
