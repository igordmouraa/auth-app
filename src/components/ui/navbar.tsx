// components/Navbar.tsx
import Link from 'next/link';
import { FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Auth
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/sobre" className="text-white hover:text-gray-300">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" className="text-white hover:text-gray-300">
              Contato
            </Link>
          </li>
          <li>
          <Link href="/signIn" className="text-white hover:text-gray-300 flex items-center">
          <FaSignInAlt className="mr-2" />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
