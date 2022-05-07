import React from 'react';

const infosPosts = [
    {
        userImg: "assets/img-posts-user/meowed2.png",
        userName: "mateus",
        urlContent: "assets/img-posts/gato-telefone1.png",
        urlLikedByUser: "assets/img-posts-user/respondeai2.png",
        nameLikedByUser: "respondeai",
        numberOfLikes: "101.523"
    },
    {
        userImg: "assets/img-posts-user/meowed2.png",
        userName: "meowed",
        urlContent: "assets/img-posts/dog1.png",
        urlLikedByUser: "assets/img-posts-user/respondeai2.png",
        nameLikedByUser: "respondeai",
        numberOfLikes: "10.523"
    },
    {
        userImg: "assets/img-posts-user/meowed2.png",
        userName: "meowed",
        urlContent: "assets/img-posts/gato-telefone1.png",
        urlLikedByUser: "assets/img-posts-user/respondeai2.png",
        nameLikedByUser: "respondeai",
        numberOfLikes: "1.523"
    },   
];

function CreatePost(props) {
    //LOGIC
    const [like, setLike] = React.useState(false);
    const [color, setColor] = React.useState('');

    function teste (){
        if(like){
            setColor('');
            setLike(false);
            console.log('2');
        }else{
            setColor('red');
            setLike(true);
            console.log('1');
        }
    }

    //UI
    return (
        <div className="post">
            <div className="header-post">
                <div className="user-post">
                    <img src={props.urlUserImg} alt={props.userName} />
                    {props.userName}
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div className="img-post" onClick={teste}>
                <img src={props.urlContent} width="100%" alt="{props.userName}"></img>
            </div>
            <div className="footer-post">
                <div className="interaction-post">
                    <div>
                        <ion-icon name="heart-outline" class={color}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div className="info-post">
                    <img src={props.urlLikedByUser} alt="respondeai2" />
                    <span>Curtido por <strong>{props.nameLikedByUser}</strong> e <strong>outras {props.numberOfLikes} pessoas</strong></span>
                </div>
            </div>
        </div>
    );
}

export default function Posts() {
    return (
        <div className="posts">
            {infosPosts.map(post => <CreatePost userName= {post.userName} urlUserImg= {post.userImg} urlContent={post.urlContent} urlLikedByUser={post.urlLikedByUser} nameLikedByUser={post.nameLikedByUser} numberOfLikes={post.numberOfLikes}></CreatePost>)}
        </div>
    );
}