import CounterSection from '../CounterSection/CounterSection';
import Items from '../Items/Items';
import TopSection from '../TopSection/TopSection';
import './Home.css'

const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <Items></Items>
            <CounterSection></CounterSection>
        </div>
    );
};

export default Home;