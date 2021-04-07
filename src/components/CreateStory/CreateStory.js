const CreateStory = () => {

    const inputStyle = {
        width: '100%'
    }

    const handleCreateStory = () => {
        console.log('story');
    }

    return (
        <div>
            <label htmlFor="user-name">username: </label>
            <input style={inputStyle} type="text"/>
            <label htmlFor="img">Image url: </label>
            <input style={inputStyle} type="text"/>

            <button onClick={handleCreateStory} style={{margin: '10px'}}>Create</button>
        </div>
    );
}
 
export default CreateStory;