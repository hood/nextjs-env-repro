import { foo } from "../utilities/foo";
import { Child } from "./Child";

export const Parent = async () => {
  const uselessData = await getData();

  return (
    <div>
      <p>Parent</p>
      <p>{foo("parent")}</p>

      <Child />
    </div>
  );
};

async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1_000);
  });
}
