import { useState } from "react";
// import "./components/SearchBar.css";
// import "./components/SearchResultsList.css";
// import "./components/SearchResult.css";
import { FaSearch } from "react-icons/fa";
import "./App.css";
// import { SearchBar } from "./components/SearchBar";
// import { SearchResultsList } from "./components/SearchResultsList";


function App() {

    const styles = {

      inputwrapper: {
        width: "100%",
        height: "2.5rem",
        border: "none",
        borderRadius: "10px",
        padding: "0 15px",
        boxShadow: "0px 0px 8px #ddd",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
      },
      
      input: {
        backgroundColor: "transparent",
        border: "none",
        height: "100%",
        fontSize: "1.25rem",
        width: "100%",
        marginLeft: "5px",
        outline: "none",
        ':focus': {
          outline: "none",
        }
      },

      searchIcon: {
        color: "royalblue",
      },

      searchResult: {
        padding: "10px 20px",
        ":hover":{
          backgroundColor: "#efefef",
        },
      },

      resultsList: {
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 8px #ddd",
        borderRadius: "10px",
        marginTop: "1rem",
        maxHeight: "300px",
        overflowY: 'auto',
    },

    App: {
      backgroundColor: "#eee",
      width: "100vw",
      height: "100vh",
  },

  searchBarContainer: {
      paddingTop: "20vh",
      width: "40%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: "200px",
  },

    };

  const [results, setResults] = useState([]);

  const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
  
    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) => {
            return (value && user && user.name && user.name.toLowerCase().includes(value));
          });
          setResults(results);
        });
    };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  
    return (
      <div style={styles.inputwrapper}>
        <FaSearch style={styles.searchIcon} />
        <input placeholder="Type to search..." value={input} style={styles.input} 
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  };

  const SearchResultsList = ({ results }) => {
    return (
      <div style={styles.resultsList}>
        {results.map((result, id) => {
          return <SearchResult result={result.name} key={id} />;
        })}
      </div>
    );
  };

  const SearchResult = ({ result }) => {
    return (
      <div style={styles.searchResult} onClick={(e) => alert(`You selected ${result}!`)}>
        {result}
      </div>
    );
  };
  


  return (
    <div style={styles.App}>
      <div style={styles.searchBarContainer}>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;
