import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
function Header() {
  const [{basket}]=useStateValue();
  console.log(basket)
  return (
   
    <div className="header">
      <Link to="/">
      <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
      </Link>

      <div className="header_search">
      <input type="" className="header_searchInput" />
      <SearchIcon className="header_searchIcon"/>
      </div>
      <div className="header_nav">
        <Link to="/login" className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Hello</span>
        <span className="header_optionLineTwo">sign in</span>
        </div>
        </Link>
        <Link to="/login" className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Return</span>
        <span className="header_optionLineTwo">& orders</span>
        </div>
        </Link>
        <Link to="/login" className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo">prime</span>
        </div>
        </Link>
        <Link to="/checkout">
          <div className="header_optionBasket">
           <ShoppingBasketIcon/>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>      
    </div>
  )
}

export default Header
