import './index.css'

const logoimg =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
const alt = 'website logo'

const Header = () => (
  <div>
    <div className="headrecontlarger">
      <img src={logoimg} alt={alt} className="logoimgpxlrg" />
      <div className="ulbuttoncontainer">
        <ul className="ulcontainer">
          <li className="listy">Home</li>
          <li className="listy">Products</li>
          <li className="listy">Cart</li>
        </ul>
        <button type="button" className="lgbuttonsty">
          Logout
        </button>
      </div>
    </div>

    <div className="smcont">
      <div className="logologutcont">
        <img src={logoimg} alt={alt} className="logoimgpxsm" />
        <button type="button" className="logoutbutton">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="navlogout"
          />
        </button>
      </div>

      <div className="iconscont">
        <button type="button" className="iconbutton">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="iconsty"
          />
        </button>

        <button type="button" className="iconbutton">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="iconsty"
          />
        </button>

        <button type="button" className="iconbutton">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="iconsty"
          />
        </button>
      </div>
    </div>
  </div>
)

export default Header
