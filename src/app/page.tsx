import Authentication from "@/components/Authentication ";
import CodeExample from "@/components/CodeExample ";
import Endpoints from "@/components/Endpoints ";
import Overview from "@/components/Overview ";
import Pricing from "@/components/Pricing ";
import Tutorial from "@/components/Tutorial ";

export default function Home() {
  return (
    <main className=" items-center justify-between">
      <Overview />
      <Authentication />
      <Endpoints />
      <Tutorial />
      <CodeExample />
      <Pricing  />
      </main>
  );
}
