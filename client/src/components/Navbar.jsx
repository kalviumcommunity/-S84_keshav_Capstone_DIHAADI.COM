import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">DIHAADI.COM</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/freelancers">Freelancers</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
