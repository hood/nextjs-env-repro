import { Parent } from "../components/Parent";

export default async function Page() {
  return (
    <div>
      <p>nextjs-env-repro</p>

      <section>
        <Parent />
      </section>
    </div>
  );
}

// export const dynamicParams = true;

export const dynamic = "force-dynamic";
