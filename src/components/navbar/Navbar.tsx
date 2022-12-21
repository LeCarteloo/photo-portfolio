import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <nav className="flex justify-between text-lg md:py-8 py-4 md:px-12 px-4">
          <Link to="/" className="uppercase">
            <div className="flex gap-4">
              <span className="text-neutral-300">Name Surname</span>
              {!isMenuOpen ? (
                <span className="text-gray-500 md:block hidden">
                  Director of photography
                </span>
              ) : null}
            </div>
          </Link>
          <button onClick={handleMenu} className="strike-anim">
            MENU
          </button>
        </nav>
      </header>
      <Menu
        isOpen={isMenuOpen}
        setIsOpen={(state: boolean) => setIsMenuOpen(state)}
      />
    </>
  );
};

export default Navbar;
