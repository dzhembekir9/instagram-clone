import Stories from '../../components/Stories/Stories'
import Post from '../../components/Post/Post'
import Sidebar from '../../containers/Sidebar/Sidebar'
import { MainWrapper } from '../../utilities/Main/StyledMainPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Main = ({posts, setPosts}) => {
    
    const url = 'https://instagram-clone-88bb0-default-rtdb.firebaseio.com/.json';

    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        setIsPending(true);
        axios.get(url)
                .then(res => {
                    setPosts(res.data);
                    setIsPending(false);
                })
                .catch(err => {
                    console.log(err);
                });
    }, [url]);
    
    return ( 
        <MainWrapper className="container">
            <div className="col-lg-6">    
                <Stories />
                {!isPending && console.log(Object.values(posts))}
                {!isPending && Object.values(posts).map(x => (
                    <Post username={x.username} url={x.url} description={x.description} profilePic={x.profilePic} key={x.id}/>
                ))}
            </div>
            <div className="col-lg-3">
                <Sidebar />
            </div>
        </MainWrapper>
    );
}
 
export default Main;