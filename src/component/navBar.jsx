import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <h3>TodoApp</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
