import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <h1>LETS GOOOO</h1>
      {/* header */}
      <Header />
    </div>
  );
}
