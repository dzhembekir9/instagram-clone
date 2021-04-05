import user from '../../images/user-img.jpg'
import { Wrapper, UserWrapper, SuggestionsWrapper, FooterWrapper } from '../../utilities/Sidebar/StyledSidebar'

const Sidebar = () => {
    return (
        <Wrapper>
            <UserWrapper>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={user} alt="user-profile" style={{width: '50px', height: '50px', borderRadius: '100px'}}/>
                    <div>
                        <p>user.name</p>
                        <p>User Name</p>
                    </div>
                </div>
                <p>Switch</p>
            </UserWrapper>

            <SuggestionsWrapper>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{color: '#8e8e8e'}}>Suggestions for you</p>
                    <p>See all</p>
                </div>
                <UserWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={user} alt="user-profile" style={{width: '50px', height: '50px', borderRadius: '100px'}}/>
                        <div>
                            <p>user.name</p>
                            <p>Suggested for you</p>
                        </div>
                    </div>
                    <p>Follow</p>
                </UserWrapper>
                <UserWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={user} alt="user-profile" style={{width: '50px', height: '50px', borderRadius: '100px'}}/>
                        <div>
                            <p>user.name</p>
                            <p>Suggested for you</p>
                        </div>
                    </div>
                    <p>Follow</p>
                </UserWrapper>
                <UserWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={user} alt="user-profile" style={{width: '50px', height: '50px', borderRadius: '100px'}}/>
                        <div>
                            <p>user.name</p>
                            <p>Suggested for you</p>
                        </div>
                    </div>
                    <p>Follow</p>
                </UserWrapper>
            </SuggestionsWrapper>

            <FooterWrapper>
                <div style={{display: 'flex'}}>
                    <p>About</p>
                    <p>Help</p>
                    <p>Press</p>
                    <p>API</p>
                    <p>Jobs</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
                <div style={{display: 'flex'}}>
                    <p>Locations</p>
                    <p>Top Accounts</p>
                    <p>Hashtags</p>
                    <p>Language</p>
                </div>
                <div>
                    <p>2021 Instagram from Facebook</p>
                </div>
            </FooterWrapper>
        </Wrapper>
    );
}
 
export default Sidebar;