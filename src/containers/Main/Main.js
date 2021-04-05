import Stories from '../../components/Stories/Stories'
import Post from '../../components/Post/Post'
import Sidebar from '../../containers/Sidebar/Sidebar'
import { MainWrapper } from '../../utilities/Main/StyledMainPage'
import 'bootstrap/dist/css/bootstrap.min.css'

const Main = () => {
    return ( 
        <MainWrapper className="container">
            <div className="col-lg-6">    
                <Stories />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <div className="col-lg-3">
                <Sidebar />
            </div>
        </MainWrapper>
    );
}
 
export default Main;