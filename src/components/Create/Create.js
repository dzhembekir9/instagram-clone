import { useState } from 'react';
import { Wrapper } from '../../utilities/Create/StyledCreate'
import CreateStory from '../../components/CreateStory/CreateStory'

const Create = () => {

    const [isCreateStoryOpen, setIsCreateStoryOpen] = useState(false);
    const [isCreatePost, setIsCreatePostOpen] = useState(false);

    return (
        <Wrapper>
            <div onClick={() => {
                isCreateStoryOpen ? setIsCreateStoryOpen(false) : setIsCreateStoryOpen(true);
                setIsCreatePostOpen(false);
            }}>Story</div>

            {isCreateStoryOpen && <CreateStory />}

            <div onClick={() => {

            }} style={{borderTop: '1px solid #ececec'}}>Post</div>
        </Wrapper>
    );
}
 
export default Create;