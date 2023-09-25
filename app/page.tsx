import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import HeavyComponent from "./components/HeavyComponent";

export default async function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <main>
      {/* <h1>{session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">users</Link>
      <ProductCard /> */}
      {/* <Image src={} alt="" /> */}
      <HeavyComponent />
    </main>
  );
}
