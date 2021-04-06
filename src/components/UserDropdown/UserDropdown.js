import user from '../../images/account.png'
import switchAcc from '../../images/switch.png'
import save from '../../images/save.png'
import settings from '../../images/options.png'
import { Wrapper } from '../../utilities/UserDropdown/StyledUserDropdown'

const UserDropdown = () => {
    return (
        <Wrapper>
            <div>
                <div>
                    <img src={user} alt="profile" style={{width: '20px'}}/>
                </div>
                <div>Profile</div>
            </div>
            <div>
                <div>
                    <img src={save} alt="saved" style={{width: '20px'}}/>
                </div>
                <div>Saved</div>
            </div>
            <div>
                <div>
                    <img src={settings} alt="settings" style={{width: '20px'}}/>
                </div>
                <div>Settings</div>
            </div>
            <div>
                <div>
                    <img src={switchAcc} alt="switch" style={{width: '20px'}}/>
                </div>
                <div>Switch Accounts</div>
            </div>
            <div style={{padding: '10px 15px', borderTop: '1px solid #dbdbdb'}}>Log Out</div>
        </Wrapper>
    );
}
 
export default UserDropdown;