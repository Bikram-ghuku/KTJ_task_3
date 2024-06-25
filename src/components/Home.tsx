import './styles/Home.css';

const HomePage = () => {
  return (
    <div className="home-main">
      <header className="home-header">
        <h1>Welcome to My Expense Tracker</h1>
        <p>Keep track of your expenses easily and efficiently.</p>
      </header>
      <section className="home-content">
        <h2>Features</h2>
        <ul>
          <li>Track your expenses and income</li>
          <li>Organize your transactions by category</li>
          <li>View detailed logs of your financial activity</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
