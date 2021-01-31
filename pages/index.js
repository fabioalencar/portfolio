import Head from "./../components/Config/Head";
import Header from "./../components/Header";
import Slider from "./../components/Slider";
import CaseList from "./../components/CaseList";

export default function Home() {
  return (
    <div className="container">
      <Head title="UX Designer used to work remotely." />
      <Header />
      <Slider />
      <CaseList />
    </div>
  );
}
