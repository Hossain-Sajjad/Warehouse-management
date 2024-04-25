// import CounterSection from "../CounterSection/CounterSection";
import Items from "../Items/Items";
import MiddleSection from "../MiddleSection/MiddleSection";
import TopSection from "../TopSection/TopSection";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <TopSection></TopSection>
      <MiddleSection></MiddleSection>
      <Items></Items>
      {/* <CounterSection></CounterSection> */}
    </div>
  );
};

export default Home;
