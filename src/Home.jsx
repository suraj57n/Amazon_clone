import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
  return (
    <div>
      <div className="home">
        <img 
        className='home_image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
      </div>
      <div className="home_row">
      <Product
      id="21314"
      title="iQOO 12 5G (Legend, 12GB RAM, 256GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera"
      rating={4}
      price="52,999"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNPh8U3GhUjUJO8uAPgyKYkR8L61X-wMKxjxt-xgy6w&s"

      />
       <Product
       id="1234"
      title="Apple 2023 MacBook Pro (14-inch, M3 Pro chip with 11‑core CPU and 14‑core GPU, 18GB Unified Memory, 512GB) - Space Black"
      rating={2}
      price="1,99,900"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjpx1LHsDInaMIFORchrQxKZzV_QWrNCDdNTdrXU3Qg&s"

      />
      </div>
      <div className='home_row'>
      <Product
      id="3245"
      title="Alienware m15 R7 Gaming Laptop"
      rating={5}
      price="1,33,990"
      image="data:image/jpeg;base64,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"

      />
      <Product
      id="4567"
      title="AirPods Pro (2nd generation)"
      rating={4}
      price="19,990"
      image="data:image/webp;base64,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"

      />
      <Product
      id="6789"
      title="Nike Air Force 1 '07"
      rating={4}
      price="52,999"
      image="data:image/jpeg;base64,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"

      />
      </div>
      <div className="home_row">
      <Product
      id="7897"
      title="Fastrack Stunners Quartz Analog Black Dial Stainless Steel Strap Watch for Guys"
      rating={4}
      price=" 2,395.00"
      image="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9a49e46a/images/Fastrack/Catalog/3255NM02_1.jpg?sw=800&sh=800"

      />
      </div>
    </div>
  )
}

export default Home
