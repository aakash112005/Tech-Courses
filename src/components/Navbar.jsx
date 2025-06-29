import { FcLike } from "react-icons/fc";
function Navbar ({setShowLikedOnly}){
    return (
        <div>
             <nav className="bg-blue-900 py-4 flex justify-between items-center">
                  <h1 className="text-3xl font-bold underline text-white text-center no-underline ml-[680px]">Top Courses</h1>
                    <button
                    onClick={() => setShowLikedOnly(true)}
                    className="flex items-center gap-2 border-2 border-white text-white font-medium text-lg px-2 py-1 rounded-md hover:bg-white hover:text-blue-900 transition-all mr-[50px]"
                    >
                   
                   Liked Courses
                   <FcLike className="text-xl" />
                   </button>
       
             </nav>
            
       </div>
      
    )
}
export default Navbar