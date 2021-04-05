import { NavbarWrapper, InputWrapper, Input } from '../../utilities/Navbar/StyledNavbar'
import home_white from '../../images/home-white.png'
import send_white from '../../images/send-white.png'
import explore_white from '../../images/explore-white.png'
import like_white from '../../images/like-white.png'
import user from '../../images/user.png'
import search from '../../images/search.png'

const Navbar = () => {

    const imgStyle = {
        width: '25px',
        marginRight: '20px'
    }

    return (
        <NavbarWrapper>
            <div style={{fontFamily: 'sans-serif', fontSize: '25px'}}>Instagram</div>
            <InputWrapper>
                <img src={search} style={{width: '10px'}}/>
                <Input placeholder="Search"/>
            </InputWrapper>
            <div>
                <img style={imgStyle} src={home_white} alt="home"/>
                <img style={imgStyle} src={send_white} alt="send"/>
                <img style={imgStyle} src   ={explore_white} alt="explore"/>
                <img style={imgStyle} src={like_white} alt="like"/>
                <img style={{width: '25px'}} src={user} alt="user"/>
            </div>
        </NavbarWrapper>
    );
}
 
export default Navbar;  