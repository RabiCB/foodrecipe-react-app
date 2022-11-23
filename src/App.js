
import { useEffect,useState } from 'react';
import './App.css';
import Recipecard from './Recipecard';
import Loader from './Loader';
import {FaSearch} from 'react-icons/fa'

const apiURl="https://www.themealdb.com/api/json/v1/1/search.php?s="
function App() {

  const [isLoading,setLoading]=useState(false)
   const [query,setQuery]=useState("");
   const [recipes,setRecipes]=useState([]);
  

   useEffect(()=>{
    searchReciepe()
   },[])
   const searchReciepe=async()=>{
    setLoading(true);
    const apiurl=apiURl + query
    const res= await fetch(apiurl)
    const data= await res.json();
    setRecipes(data.meals);
    console.log(data)
    setLoading(false);
   }

  const handleSubmit=(e)=>{
    e.preventDefault();
    searchReciepe();
    setQuery("");
  }
  return (
    <div className="App">
      <div className='Navbar'>
        <h3>FRF</h3>
        <form className='input-box' onSubmit={handleSubmit}>
        <input type="text" name="search" value={query} onChange={(e)=>setQuery(e.target.value)}  placeholder='search'/>
        <FaSearch type="submit" onClick={handleSubmit} value="search" className="icon"/>
        </form>
      </div>
      {isLoading?<Loader/>:''}
      {recipes?
         recipes.map((recipe)=>{
             return <Recipecard key={recipe.idMeal} recipe={recipe}/>
         }):'Not found sorry'
      }
     
    </div>
  );
}

export default App;
