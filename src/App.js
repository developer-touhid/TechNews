import './App.css';
import { SearchBar } from './Components/SearchBar';
import { Stories } from './Components/Stories';
import { Pagination } from './Components/Pagination';

function App() {
  return (
    <>
    <h3>Welcome to news app</h3>
    <SearchBar />
    <Stories />
    <Pagination />
    </>
  );
}

export default App;
