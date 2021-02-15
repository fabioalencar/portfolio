import Head from "./../components/Config/Head";
import Header from "./../components/Header";
import Banner from "./../components/Banner";
import CaseList from "./../components/CaseList";

export default function Home() {
  return (
    <div className="container">
      <Head title="Fábio Alencar - Senior Product Designer and Frontend Developer." />
      <Header />
      <Banner />
      <CaseList />
    </div>
  );
}
