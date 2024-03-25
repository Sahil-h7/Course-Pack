import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData , apiUrl} from "./data";
import Spinnner from "./components/Spinner";
import {toast} from "react-toastify";

const App = () => {

  const [courses,setCourses] = useState(filterData);
  const [apiresult,setApiresult] = useState([]);
  const [loading , setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  
    async function fetchData () {

      setLoading(true);
      try{
      const result = await fetch(apiUrl);
      const output = await result.json();

      setApiresult(output.data);
      
      }
      catch{
        toast.error("Error 404")
      }
      setLoading(false);
    }
    
  useEffect(() =>{
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar/>
      </div>
    
      <div className="bg-bgDark2">
        <div>
          
          <Filter 
            courses={courses}
            category={category}
            setCategory={setCategory}

          />
        </div>  

        <div className="w-11/12 max-w-[1200px] 
            mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinnner/> : <Cards apiresult={apiresult} category={category}/>}
        </div>
      </div>
  </div>
);
};

export default App;
