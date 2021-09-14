import { useState, useEffect } from "react";
import VoluntaryMenu from "../../components/voluntaryMenu";
import api from "../../services/api";
import { BiMenuAltLeft } from "react-icons/bi";
import { Container } from "./styles";
import { useHistory } from "react-router";

interface Institution {
  name: string;
  address: string;
  id: number;
}

const InstitutionSearch = () => {
  const history = useHistory();

  const [searched, setSearched] = useState<string>("");
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [results, setResults] = useState<Institution[]>([]);
  const [visible, setVisible] = useState(false);
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

  const showMenu = () => {
    setVisible(true);
  };

  const handleInstituteDetails = (id: number) => {
    history.push(`/institution/${id}`);
  };

  return (
    <Container>
      <VoluntaryMenu visible={visible} setVisible={setVisible} />
      <BiMenuAltLeft className="Open" onClick={showMenu} />
      <div className="search-container">
        <div className="search-input">
          <input
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            placeholder="Nome da Instituição..."
          />
          <button onClick={() => showSearchResults(searched)}>Pesquisar</button>
        </div>
        <div className="list-container">
          <ul>
            {isSearched
              ? results?.map((inst, index) => {
                  return (
                    <li key={index}>
                      <span onClick={() => handleInstituteDetails(inst.id)}>
                        {inst.name}
                      </span>{" "}
                      <br />
                      <span>{inst.address}</span>
                      <hr />
                    </li>
                  );
                })
              : institutions?.map((inst, index) => {
                  return (
                    <li key={index}>
                      <span onClick={() => handleInstituteDetails(inst.id)}>
                        {inst.name}
                      </span>{" "}
                      <br />
                      <span>{inst.address}</span>
                      <hr />
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default InstitutionSearch;
