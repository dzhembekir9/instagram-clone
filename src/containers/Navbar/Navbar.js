import { NavbarWrapper, InputWrapper, Input } from '../../utilities/Navbar/StyledNavbar'
import home_white from '../../images/home-white.png'
import send_white from '../../images/send-white.png'
import explore_white from '../../images/explore-white.png'
import like_white from '../../images/like-white.png'
import like_dark from '../../images/like-dark.png'
import user from '../../images/user.png'
import search from '../../images/search.png'
import create from '../../images/create.png'
import UserDropdown from '../../components/UserDropdown/UserDropdown'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Create from '../../components/Create/Create'

const Navbar = () => {

    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const imgStyle = {
        width: '25px',
        marginRight: '20px'
    }

    const createPost = () => {
        console.log('hi');
    }

    return (
        <NavbarWrapper>

            <Link to="/">
                <d style={{fontFamily: 'sans-serif', fontSize: '25px'}}>Instagram</d>
            </Link>
            <InputWrapper>
                <img src={search} style={{width: '10px'}}/>
                <Input placeholder="Search"/>
            </InputWrapper>
            <div>
                <Link to="/">
                    <img style={imgStyle} src={home_white} alt="home"/>
                </Link>
                
                <img style={imgStyle} src={send_white} alt="send"/>
                
                <img style={imgStyle} src={explore_white} alt="explore"/>
                
                { isNotificationOpen ? <img onClick={() => {setIsNotificationOpen(false); setIsUserOpen(false)}} style={imgStyle} src={like_dark} alt="like"/> : 
                
                <img onClick={() => {
                        setIsNotificationOpen(true);
                        setIsUserOpen(false);
                        setIsCreateOpen(false);
                    }
                } 
                style={imgStyle}
                src={like_white}
                alt="like"/> }
                
                <img
                onClick={() => {
                        isUserOpen ? setIsUserOpen(false) : setIsUserOpen(true);
                        setIsNotificationOpen(false);
                        setIsCreateOpen(false);
                    }
                }
                style={isUserOpen ? {...imgStyle, border: '1px solid black', borderRadius: '100px', padding: '1px'} : {...imgStyle}}
                src={user}
                alt="user"/>

                <img
                onClick={() => {
                        isCreateOpen ? setIsCreateOpen(false) : setIsCreateOpen(true);
                        setIsNotificationOpen(false);
                        setIsUserOpen(false);
                    }
                }
                style={imgStyle}
                src={create}
                alt="create"/>

                {isUserOpen ? <UserDropdown /> : null}
                {isCreateOpen ? <Create / > : null}
            </div>

        </NavbarWrapper>
    );
}
 
export default Navbar;  