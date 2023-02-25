import { Link } from "react-router-dom";
import './App.css'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShop} from "@fortawesome/free-solid-svg-icons"
import {faShoePrints} from "@fortawesome/free-solid-svg-icons"

export function MainNavBar(){
    return <header className="header">
        <nav className="nav">
            <span id='logo'>
                <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                <p id='logo_word'>Shop</p>
                <FontAwesomeIcon icon={faShoePrints}></FontAwesomeIcon>
            </span>
            <ul id='list_sections'>
                <li className="Phone-hidden"><Link className="link" to={"/"}>Home</Link></li>
                <li ><Link className="link" to={"/ShoesPage"}>ShoesPage</Link></li>
                <li className="Phone-hidden"><Link className="link" to={"/NewArrivals"}>new arrivals</Link></li>
                <li className="Phone-hidden"><Link className="link" to={"/aboutUs"}>About Us</Link></li>
            </ul>
        </nav>
    </header>
}
{/* <nav >
          <span id='logo'>
            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
            <p id='logo_word'>Shop</p>
            <FontAwesomeIcon icon={faShoePrints}></FontAwesomeIcon>
          </span>
        <ul >
          <li><a>mainPage</a></li>
          <li><a>ShoesPage</a></li>
          <li><a>new arrivals</a></li>
          <li><a>About Us</a></li>
        </ul>
      </nav> */}