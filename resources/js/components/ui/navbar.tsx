import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">My Landing Page</div>
            <div className="flex items-center space-x-4">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Dropdown label="System Kits" options={['Kit 1', 'Kit 2', 'Kit 3']} />
                <Link to="/how-it-works" className="hover:text-gray-300">How It Works</Link>
                <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
                <Link to="/blog" className="hover:text-gray-300">Blog / Insights</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/free-audit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Start / Free Audit</Link>
                <Link to="/login" className="hover:text-gray-300">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;