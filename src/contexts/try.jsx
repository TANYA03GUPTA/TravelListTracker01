{
  /*
    import {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
  } from "react";
  
  const BASE_URL = "http://localhost:8000";
  const CitiesContext = createContext();
  
  function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});
  
    useEffect(function () {
      async function fetchCities() {
        try {
          setIsLoading(true);
          const res = await fetch(`${BASE_URL}/cities`);
          const data = await res.json();
          setCities(data);
        } catch {
          alert("base url not working !!");
        } finally {
          setIsLoading(false);
        }
      }
      fetchCities();
    }, []);
  
    const getCity = useCallback(async function getCity(id) {
      if (Number(id) === currentCity.id) return;
      console.log(id);
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        console.log("Getcity returns : ", data);
        setCurrentCity(data);
      } catch (err) {
        alert("base url not working !!");
        console.error("Error fetching city: ", err);
      } finally {
        setIsLoading(false);
      }
    }, []);
  
    async function createCity(newCity) {
      console.log("inside create city function");
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`, {
          method: "POST",
          body: JSON.stringify(newCity),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data);
        setCities((cities) => [...cities, data]);
      } catch {
        alert("There was error creating data !!");
      } finally {
        setIsLoading(false);
      }
    }
  
    async function deleteCity(id) {
      console.log("inside create city function");
      try {
        setIsLoading(true);
        await fetch(`${BASE_URL}/cities/${id}`, {
          method: "DELETE",
        });
  
        setCities((cities) => cities.filter((city) => city.id !== id));
      } catch {
        alert("There was error DELETing data !!");
      } finally {
        setIsLoading(false);
      }
    }
  
    return (
      <CitiesContext.Provider
        value={{
          cities,
          isLoading,
          currentCity,
          getCity,
          createCity,
          deleteCity,
        }}
      >
        {children}
      </CitiesContext.Provider>
    );
  }
  
  function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined)
      throw new Error("CitiesContext was used outside scope.");
  
    return context;
  }
  
  export { CitiesProvider, useCities };
  
  */
}
