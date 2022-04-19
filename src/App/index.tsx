import { Review } from '../Review';
import { getApiData } from '../api';
import './app.css';

const App = () => {
  const review = getApiData();

  return (
    <div className="app">
      <Review {...review} />
    </div>
  );
};

export default App;
