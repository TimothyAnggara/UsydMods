//Header
import './Header.css'
import me from './Me.png'

//Pure HTML for the header element. 
function Header(props) {
  return (
    <div className="header">
      <div className='headerWrapper'>

      <div class="flex-container">
        <div class="flex-child">
          <div id="ME">
            <img src={me} alt="Italian Trulli"></img>
          </div>
        </div>

        <div id="flexText" class="flex-child">
          <div className='titelWrapper'>
            <h1>William Walker</h1>
            <h2>Stunning, Cunning and our forthcoming</h2>
          </div>
        </div>
      </div>





      </div>
    </div>
  );
}

export default Header;
