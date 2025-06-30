
import Navbar from "./components/Navbar.jsx";
import Filter from "./components/Filter.jsx";
import Cards from "./components/Cards.jsx";
import Spinner from "./components/Spinner.jsx";
import { filterData, apiUrl } from "./data.jsx";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const [category,setCategory] = useState(filterData[0].title)
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedCourses,setLikedCourses] = useState([]);
  const [showLikedOnly, setShowLikedOnly] = useState(false);

  // Fetch Data from the url and set state
  useEffect(() => {
    async function fetchData() {
        setLoading(true);
      try {
        console.log("Fetching from:", apiUrl);
        const res = await fetch(apiUrl)
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const output = await res.json();
        console.log("Fetched data:", output.data);
        setCourses(output.data);
      } catch (err) {
        console.error("Fetch failed:", err);
        setError("Failed to load courses.");
        toast.error("problem faced");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);


  return (
    
    <div className="flex flex-col bg-blue-600  ">
       {/* Navbar section */}
      <div >
      <Navbar setShowLikedOnly={setShowLikedOnly}/>
      </div>
     
      <div
        className="bg-bgDark2 min-h-screen">
        {
          // check weather Likedpage is true or not 
          showLikedOnly ? (
        //  if true display the liked courses page 
        <div className="flex  flex-col justify-center py-4 items-center">
          <h1 className="text-center text-2xl font-bold underline text-white text-center no-underline  ">All Courses You Liked</h1>
          <div className="flex flex-row space-between">
          <button
          className=" mt-[20px] w-[180px] bg-blue-900 font-bold text-xl text-white font-semibold border-2 border-white px-4 py-2 rounded-md hover:bg-opacity-70 transition-all"
          onClick={() => {
            setShowLikedOnly(false);
            // setCategory("All");
          }}> ← Back Courses</button>

          <button 
          className=" ml-[10px] mt-[20px] w-[200px] bg-blue-900 font-bold text-xl text-white 
           font-semibold border-2 border-white px-4 py-2 rounded-md hover:bg-opacity-70 transition-all"
          onClick={()=>{
          setLikedCourses([])
          likedCourses.length ?
          toast.warning("All like removed"):
          toast.success("No Liked Course Left")
          }}>Remove All Likes</button>
         </div>
        </div>) 
      // If false display the normal home page 
        :(
       // filter section where all category are present
      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
       )
      }


       {/* this was the course section wher all courses are present  */}
       <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
        {
          loading ? (<Spinner />) : ( <Cards courses={courses} category={category} likedCourses={likedCourses} setLikedCourses={setLikedCourses}
          showLikedOnly={showLikedOnly}/>)
        }
      </div>
     </div>


    
       
     </div>
  );
}

export default App;
