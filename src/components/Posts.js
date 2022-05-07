const infosPosts = [
    {
        userImg: "assets/img-posts-user/meowed2.png",
        userName: "mateus",
        urlContent: "assets/img-posts/gato-telefone1.png",
        urlLikedByUser: "assets/img-posts-user/respondeai2.png",
        nameLikedByUser: "respondeai"
    },
    {
        userImg: "assets/img-posts-user/meowed2.png",
        userName: "meowed",
        urlContent: "assets/img-posts/dog1.png",
        urlLikedByUser: "assets/img-posts-user/respondeai2.png",
        nameLikedByUser: "respondeai"
    },
    {
        userImg: "assets/img-posts-user/meowed2.png",
        userName: "meowed",
        urlContent: "assets/img-posts/gato-telefone1.png",
        urlLikedByUser: "assets/img-posts-user/respondeai2.png",
        nameLikedByUser: "respondeai"
    },   
];

function CreatePost(props) {
    return (
        <div class="post">
            <div class="header-post">
                <div class="user-post">
                    <img src={props.urlUserImg} alt={props.userName} />
                    {props.userName}
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div class="img-post">
                <img src={props.urlContent} width="100%" autoplay muted loop></img>
            </div>
            <div class="footer-post">
                <div class="interaction-post">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="info-post">
                    <img src={props.urlLikedByUser} alt="respondeai2" />
                    <span>Curtido por <strong>{props.nameLikedByUser}</strong> e <strong>outras 101.523 pessoas</strong></span>
                </div>
            </div>
        </div>
    );
}

export default function Posts() {
    return (
        <div class="posts">
            {infosPosts.map(post => <CreatePost userName= {post.userName} urlUserImg= {post.userImg} urlContent={post.urlContent} urlLikedByUser={post.urlLikedByUser} nameLikedByUser={post.nameLikedByUser}></CreatePost>)}
        </div>
    );
}