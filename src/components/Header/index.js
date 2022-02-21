import './styles.scss';
import Search from "../../components/Search";
import Navigation from "../../components/Navigation";

function Header() {
  return (
      <header className="header">
        <Search/>
        <Navigation/>
      </header>
  );
}

export default Header;
