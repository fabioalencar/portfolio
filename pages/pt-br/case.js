import Head from "./../../components/config/Head";
import Header from "./../../components/Header";
import Banner from "./../../components/Banner";

export default function Home() {
  return (
    <div className="container">
      <Head title="Case pt" />
      <Header />
      <Banner />
    </div>
  );
}