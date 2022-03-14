import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)


  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_addresses=0xDBCB648212d4311dc6604B5C6Cdee54fB0e1631b&order_direction=asc&offset=0&limit=20')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [] )

  return (<div className='app'>
    <Header />
    {
      punkListData.length > 0 && (
      <>
      <Main selectedPunk={selectedPunk} punkListData={punkListData} />
      <Punklist 
      punkListData={punkListData} 
      setSelectedPunk={setSelectedPunk}/>
      </>
      )
    }
    
    </div> 
    
)
}

export default App;
