import { Link , useNavigate} from "react-router-dom"
import './Home1.css';
import './bg 2.jpeg'
function Home1() {
    const navigate = useNavigate()
  return (
    <div>
      <div className="nav-bar"> <button className="add-btn"> <Link to='/form'>Sign in</Link></button></div>
      
        <div className="banner" onClick={()=>navigate('/card')}>
            <p className="fontsize">CSE</p>
        </div>
    </div>
  )
}

export default Home1