"use client";

import { foo } from "../utilities/foo";

export const Child = () => {
  const uselessData = useUselessData();

  return (
    <div>
      <p>Child</p>
      <p>{foo("child")}</p>
    </div>
  );
};

function useUselessData() {
  return 1234;
}
