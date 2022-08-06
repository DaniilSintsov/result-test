import './App.css'
import Staging from './components/Staging'
import Offer from './components/Offer'
import Advantages from './components/Advantages'
import Description from './components/Description'

function App() {
  return (
    <div className="pt-[20px] 2xl:pt-[100px] pb-[80px]">
      <Offer/>
      <Advantages/>
      <Description/>
      <Staging/>
    </div>
  )
}

export default App
