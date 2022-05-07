const infosStories = [
    {
        img: "/assets/stories/9gag.png",
        title: "Mateus"
    },
    {
        img: "/assets/stories/meowed1.png",
        title: "meowed"
    },
    {
        img: "/assets/stories/barked1.png",
        title: "barked"
    },
    {
        img: "/assets/stories/nathan1.png",
        title: "nathanwpyle..."
    },
    {
        img: "/assets/stories/waw1.png",
        title: "wawawiwac..."
    },
    {
        img: "/assets/stories/respondeai1.png",
        title: "respondeai"
    },
    {
        img: "assets/stories/filomoderna1.png",
        title: "filomoderna"
    },
    {
        img: "assets/stories/memeriagourmet1.png",
        title: "memeriago."
    },
    {
        img: "assets/stories/9gag.png",
        title: "9gag"
    },
];

function CreateStorie(props) {
    return (
        <div class="content">
            <div class="img-container">
                <img src={props.urlImg} alt={props.title} />
            </div>
            <div class="text-container">
                {props.title}
            </div>
        </div>
    );
}

export default function Stories() {
    return (
        <div class="stories">
            <div class="story-container">
                {infosStories.map(storie => <CreateStorie title={storie.title} urlImg={storie.img}></CreateStorie>)}
            </div>
            <div class="button-stories">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}