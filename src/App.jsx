import Staging from './components/stagingBlock/Staging/Staging';
import Offer from './components/offerBlock/Offer/Offer';
import Advantages from './components/advantagesBlock/Advantages/Advantages';
import Description from './components/descriptionBlock/Description/Description';

function App() {
  return (
    <div className="pt-[20px] 2xl:pt-[100px] pb-[80px]">
      <Offer />
      <Advantages />
      <Description />
      <Staging />
    </div>
  );
}

export default App;
