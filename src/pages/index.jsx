import Banner from "../components/Banner";
import Header from "../components/Header";


export default function Home() {
  return (
    <>
      <Header/>
      <section className="relative z-[-1]">
        <Banner/>
      </section>
    </>
  )
}
