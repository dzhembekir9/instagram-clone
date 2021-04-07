import axios from 'axios'
import { useState } from 'react'
import uuid from 'react-uuid'
import { useHistory } from 'react-router-dom'

const CreatePost = ({posts, setPosts}) => {

    const defaultProfile = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const inputStyle = {
        width: '100%'
    }

    const handleCreatePost = () => {
        const newId = uuid();
        
        if (posts.username && posts.description && posts.url) {
            setIsPending(true);
            
            axios({
                method: 'post',
                url: 'https://instagram-clone-88bb0-default-rtdb.firebaseio.com/.json',
                data: {
                  username: posts.username,
                  url: posts.url,
                  description: posts.description,
                  profilePic: posts.profilePic || defaultProfile,
                  id: newId
                }
            }).then(() => {
                setIsPending(false);
                history.go(0);
            })
        }
        else {
            alert('Please, fill in all fields (except: profile picture)');
        }
        
    }

    return (
        <div>
            <label htmlFor="user-name">username: </label>
            <input onChange={e => setPosts({...posts, username: e.target.value})} style={inputStyle} type="text"/>
            <label htmlFor="profile-pic">profile-pic url: </label>
            <input onChange={e => setPosts({...posts, profilePic: e.target.value})} style={inputStyle} type="text"/>
            <label htmlFor="img">Image url: </label>
            <input onChange={e => setPosts({...posts, url: e.target.value})} style={inputStyle} type="text"/>
            <label htmlFor="description">Description: </label>
            <input onChange={e => setPosts({...posts, description: e.target.value})} style={inputStyle} type="text"/>

            {!isPending && <button onClick={handleCreatePost} style={{margin: '10px'}}>Create</button>}
            {isPending && <button disabled>Creating post</button>}
        </div>
    );
}
 
export default CreatePost;