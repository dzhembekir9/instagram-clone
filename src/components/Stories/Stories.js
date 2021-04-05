import { StoriesWrapper, ProfilePic } from '../../utilities/Stories/StyledStories'
import user from '../../images/user-img.jpg'

const Stories = () => {
    return (
        <StoriesWrapper>
            <div>
                <ProfilePic src={user} alt="user"/>
                <p>user.name</p>
            </div>
            <div>
                <ProfilePic src={user} alt="user"/>
                <p>user.name</p>
            </div>
            <div>
                <ProfilePic src={user} alt="user"/>
                <p>user.name</p>
            </div>
            <div>
                <ProfilePic src={user} alt="user"/>
                <p>user.name</p>
            </div>
            <div>
                <ProfilePic src={user} alt="user"/>
                <p>user.name</p>
            </div>
        </StoriesWrapper>
    );
}
 
export default Stories;