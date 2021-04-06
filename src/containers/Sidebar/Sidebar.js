import user from '../../images/user-img.jpg'
import { Wrapper, UserWrapper, SuggestionsWrapper, FooterWrapper, Button } from '../../utilities/Sidebar/StyledSidebar'

const Sidebar = () => {
    return (
        <Wrapper>
            <UserWrapper>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={user} alt="user-profile" style={{width: '50px', height: '50px', borderRadius: '100px'}}/>
                    <div>
                        <div>user.name</div>
                        <div style={{color: '#8e8e8e', fontSize: '15px'}}>User Name</div>
                    </div>
                </div>
                <Button>Switch</Button>
            </UserWrapper>

            <SuggestionsWrapper>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{color: '#8e8e8e'}}>Suggestions for you</p>
                    <div style={{fontSize: '12px', fontWeight: 'bold'}}>See all</div>
                </div>
                <UserWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={user} alt="user-profile" style={{width: '30px', height: '30px', borderRadius: '100px'}}/>
                        <div>
                            <div>user.name</div>
                            <div style={{color: '#8e8e8e', fontSize: '12px'}}>Suggested for you</div>
                        </div>
                    </div>
                    <Button>Follow</Button>
                </UserWrapper>
                <UserWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={user} alt="user-profile" style={{width: '30px', height: '30px', borderRadius: '100px'}}/>
                        <div>
                            <div>user.name</div>
                            <div style={{color: '#8e8e8e', fontSize: '12px'}}>Suggested for you</div>
                        </div>
                    </div>
                    <Button>Follow</Button>
                </UserWrapper>
                <UserWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={user} alt="user-profile" style={{width: '30px', height: '30px', borderRadius: '100px'}}/>
                        <div>
                            <div>user.name</div>
                            <div style={{color: '#8e8e8e', fontSize: '12px'}}>Suggested for you</div>
                        </div>
                    </div>
                    <Button>Follow</Button>
                </UserWrapper>
                <UserWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={user} alt="user-profile" style={{width: '30px', height: '30px', borderRadius: '100px'}}/>
                        <div>
                            <div>user.name</div>
                            <div style={{color: '#8e8e8e', fontSize: '12px'}}>Suggested for you</div>
                        </div>
                    </div>
                    <Button>Follow</Button>
                </UserWrapper>
                <UserWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={user} alt="user-profile" style={{width: '30px', height: '30px', borderRadius: '100px'}}/>
                        <div>
                            <div>user.name</div>
                            <div style={{color: '#8e8e8e', fontSize: '12px'}}>Suggested for you</div>
                        </div>
                    </div>
                    <Button>Follow</Button>
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
                    <p style={{textTransform: 'uppercase'}}>&copy; 2021 Instagram from Facebook</p>
                </div>
            </FooterWrapper>
        </Wrapper>
    );
}
 
export default Sidebar;