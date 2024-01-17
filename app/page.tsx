import Hero from "@/components/shared/Hero";
import Topics from "@/components/shared/Topics";

export default function Home() {
  return (
    <div className=" mt-24 flex justify-between max-tablet:flex-col gap-16 max-tablet:gap-10">
      <Hero />
      <Topics />
    </div>
  );
}
