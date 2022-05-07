const userInfo = {
    urlUserImg: "assets/img-sidebar/catanacomics1.png",
    userName: "catanacomics",
    userDes: "Catana"
};

const suggestionUserInfo = [
    {
        url: "assets/img-sidebar/badvibesmemes1.png",
        userName: "bad.vibes.memes"
    },
    {
        url: "assets/img-sidebar/chibirdart1.png",
        userName: "chibirdart"
    },
    {
        url: "assets/img-sidebar/razoesparaacreditar1.png",
        userName: "razoesparaacreditar"
    },
    {
        url: "assets/img-sidebar/adorableanimals1.png",
        userName: "adorable_animals"
    },
    {
        url: "assets/img-sidebar/smallcutecats1.png",
        userName: "smallcutecats"
    },
];

function User() {
    return (
        <div class="user">
            <img src={userInfo.urlUserImg} alt="Imagem do usuario" />
            <div class="user-name">
                <h3>{userInfo.userName}</h3>
                <h4>{userInfo.userDes}</h4>
            </div>
        </div>
    );
}

function CreateSuggestionUser(props) {
    return (
        <div class="suggestion-user">
            <div class="suggestion-user-info">
                <img src={props.url} alt={props.userName} />
                <div class="suggestion-user-name">
                    <h3>{props.userName}</h3>
                    <h4>Segue você</h4>
                </div>
            </div>
            <a href="https://www.driven.com.br/">
                <p>Seguir</p>
            </a>
        </div>
    );
}

export default function SideBarFixed() {
    return (
        <div class="sidebar-fixed">
            <User />
            <div class="suggestions">
                <div class="suggestions-see-all">
                    <p>Sugestões para você</p>
                    <p>Ver tudo</p>
                </div>
                {suggestionUserInfo.map(user => <CreateSuggestionUser url= {user.url} userName= {user.userName}></CreateSuggestionUser>)}
                <p class="insta-about">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma </p>
                <p class="insta-register">© 2022 INSTAGRAM FROM META</p>
            </div>
        </div>
    );
}