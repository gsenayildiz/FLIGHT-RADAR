import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, error, flights } = useSelector(
    (store) => store.flightReducer
  );
  return (
    <header>
      <div>
        <img src="/plane-logo.png" alt="plane-logo" />
        <h2>Flight Radar</h2>
      </div>
      <h3>
        {isLoading
          ? "Search for flights..."
          : error
          ? "Error:" + error
          : `${flights.length}  Flights Found`}
      </h3>
    </header>
  );
};

export default Header;
