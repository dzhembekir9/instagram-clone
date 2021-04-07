import { useState } from 'react';
import { Wrapper } from '../../utilities/Create/StyledCreate'
import CreateStory from '../../components/CreateStory/CreateStory'
import CreatePost from '../../components/CreatePost/CreatePost'

const Create = () => {

    const [isCreateStoryOpen, setIsCreateStoryOpen] = useState(false);
    const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [stories, setStories] = useState([]);

    return (
        <Wrapper>
            <div onClick={() => {
                isCreateStoryOpen ? setIsCreateStoryOpen(false) : setIsCreateStoryOpen(true);
                setIsCreatePostOpen(false);
            }}>Story</div>

            {isCreateStoryOpen && <CreateStory stories={stories} setStories={setStories}/>}

            <div onClick={() => {
                isCreatePostOpen ? setIsCreatePostOpen(false) : setIsCreatePostOpen(true);
                setIsCreateStoryOpen(false);
            }} style={{borderTop: '1px solid #ececec'}}>Post</div>

            {isCreatePostOpen && <CreatePost posts={posts} setPosts={setPosts}/>}
        </Wrapper>
    );
}
 
export default Create;