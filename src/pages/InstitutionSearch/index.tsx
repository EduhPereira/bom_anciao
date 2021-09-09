import { useState, useEffect } from "react";
import api from "../../services/api";

interface Institution {
  name: string;
  address: string;
}
const InstitutionSearch = () => {
  const [searched, setSearched] = useState<string>("");
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [results, setResults] = useState<Institution[]>([]);

  const [institutions, setInstitutions] = useState<Institution[]>([]);
  useEffect(() => {
    api
      .get(`/users?type=Institution`)
      .then((res) => setInstitutions(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (searched === "") {
      setIsSearched(false);
    }
  }, [searched]);

  const showSearchResults = (searched: string) => {
    api
      .get(`/users?type=Institution&&name_like=${searched}`)
      .then((res) => {
        console.log(res);
        setIsSearched(true);
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <input
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        placeholder="Pesquisar..."
      />
      <button onClick={() => showSearchResults(searched)}>Pesquisar</button>
      <div className="list-container">
        <ul>
          {isSearched
            ? results?.map((inst, index) => {
                return (
                  <li key={index}>
                    <span>{inst.name}</span> <br />
                    <span>{inst.address}</span>
                  </li>
                );
              })
            : institutions?.map((inst, index) => {
                return (
                  <li key={index}>
                    <span>{inst.name}</span> <br />
                    <span>{inst.address}</span>
                  </li>
                );
              })}
        </ul>
      </div>
    </>
  );
};

export default InstitutionSearch;
