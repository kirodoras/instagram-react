import Stories from "./Stories";
import Posts from "./Posts";
import SideBarFixed from "./SideBarFixed";

export default function Main() {
    return (
        <main>
            <div className="conteudo">
                <div className="bar">
                    <Stories />
                    <Posts />
                </div>
                <div className="sidebar">
                    <SideBarFixed />
                </div>
            </div>
        </main>
    );
}