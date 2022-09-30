import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const Navbar = ()=> {
    return (
        <div expand="lg" variant="light" bg="light">
          <div>
            <button href="#">Almacen</button>
            <button href="#">Perfumeria</button>
            <button href="#">Higiene</button>
          </div>
          <CartWidget/>
        </div>
    );
}

export default Navbar;