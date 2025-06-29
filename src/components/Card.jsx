 import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";
function Card ({course,likedCourses,setLikedCourses}){

    
       
    let likedcourses1 = likedCourses;
    let setLikedCourses1 = setLikedCourses;
    function clickHandler(){
       if(likedcourses1.includes(course.id)){
        //pehle se like hua pada tha
        setLikedCourses1((prev)=> prev.filter((cid)=>(cid !== course.id)));
        toast.warning("like removed");
       }
       else{
        //phle se like nahi hai ye course
        //inserst karna h ye course liked courses me
        if(likedcourses1.length === 0){
            setLikedCourses1([course.id]);
        }
        else{
            //non-empty phele se
            setLikedCourses1((prev)=>[...prev,course.id]);
        }
        toast.success("Liked Successfully");
        console.log("liiked");
        
       }
    }
    return (
       <div className="w-[300px] bg-blue-900 bg-opacity-80 rounded-md overflow-hidden">
           
           <div className="relative">
            <img src={course.image.url} alt="" />
           


            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-17px] grid place-items-center">
                <button onClick={clickHandler}>
                    {
                       ! likedcourses1.includes(course.id) ?
                        (<FcLikePlaceholder fontSize = "1.75rem"/>):
                        ( <FcLike fontSize = "1.75rem"/> )
                    
                     
                    }
                </button>
            </div>

            </div>
         

           <div className="p-4">
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className="mt-2 text-white ">
                {
                course.description.length >100 ?
                (course.description.substr(0,100)+"..."):
                (course.description)
                }
                </p>
           </div>



       </div>
    )
}
export default Card