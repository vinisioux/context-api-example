import './App.css'
import { ShopProvider } from './context';
import { ShopComponent } from './ShopComponent';

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <ShopComponent />
      </ShopProvider>
    </div>
  )
}

export default App
