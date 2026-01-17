
import { useParams } from "react-router-dom";


const UserPage:React.FC=()=>{
  const { username } = useParams();
    return<>
    <h2 className="text-center text-4xl font-bold">Hello {username}</h2>    
    </>
}

export default UserPage;