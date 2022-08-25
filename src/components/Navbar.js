import { JAnchor } from "./styles/JAnchor.styled";
import { JNav } from "./styles/JNav.styles";

function Navbar(){
    return (
        <JNav>
            <JAnchor 
                mgLeft="100px"
                mgRight="20px"
            >
                Tracka Job
            </JAnchor>
            <JAnchor>Home</JAnchor>
        </JNav>
    )
}

export default Navbar;