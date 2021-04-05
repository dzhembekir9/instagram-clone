import user from '../../images/user-img.jpg'
import post from '../../images/post-img.jpg'
import menu from '../../images/post-menu.png'
import like_white from '../../images/like-white.png'
import comment from '../../images/comment.png'
import send from '../../images/send-white.png'
import save from '../../images/save.png'
import emoji from '../../images/emoji.png'
import { PostWrapper, UserInfo, Logos, CommentWrapper } from '../../utilities/Post/StyledPost'

const Post = () => {
    return (
        <div>
            <PostWrapper>
                <UserInfo>
                    <div style={{display: 'flex'}}>
                        <img src={user} alt="user" style={{width: '40px', height: '40px', borderRadius: '100px', marginRight: '15px', alignSelf: 'center'}}/>
                        <p>user.name</p>
                    </div>
                    <img src={menu} alt="menu" style={{width: '15px', marginRight: '5px'}}/>
                </UserInfo>
                <div>
                    <img src={post} alt="post" style={{width: '100%'}}/>
                </div>
                <div style={{marginLeft: '10px'}}>    
                    <Logos>
                        <div>
                            <img src={like_white} alt="like" style={{width: '27px'}}/>
                            <img src={comment} alt="comment" style={{width: '27px'}}/>
                            <img src={send} alt="send" style={{width: '27px'}}/>
                        </div>
                        <img src={save} alt="save" style={{width: '27px', marginRight: '10px'}}/>
                    </Logos>
                    <div>
                        <p style={{fontWeight: 'bold', fontSize: '15px'}}>10,992 likes</p>
                        <p>user.name: Maç hakkındaki görüşlerinizi paylaşın.
                            🆚Süper Lig'in 32. haftasında Galatasaray, deplasmanda Atakaş Hatayspor'a 3-0 mağlup oldu.</p>
                    </div>
                    <div>funda_bektas_1907 @the._.end._.1903 şuanki duruma göre değerlendiriyorum gs nin puan kaybedeceğini hep söylüyordum çünkü 
                        adamlarda defans yok bizim gibiler hep sallantıdalar , inşallah emre belezoğlu forvet sorunumuzu çözer ve işde ozaman asıl feneri izleriz, 
                        hıı bide şans çok önemli sizin bu yıl şansınız da yaver gitti</div>
                </div>
                <CommentWrapper>
                    <div style={{display: 'flex', marginLeft: '10px'}}>
                        <div>
                            <img src={emoji} alt="emoji" style={{width: '30px', marginRight: '15px'}}/>
                        </div>
                        <input type="text" placeholder="Add comment..."  style={{width: '500px', fontSize: '15px'}}/>
                    </div>
                    <div>
                        <p style={{marginRight: '10px', color: '#0095f6'}}>Post</p>
                    </div>
                </CommentWrapper>
            </PostWrapper>
        </div>
    );
}
 
export default Post;