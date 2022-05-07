import Stories from "./Stories";
import Posts from "./Posts";
import SideBarFixed from "./SideBarFixed";

export default function Main() {
    return (
        <main>
            <div class="conteudo">
                <div class="bar">
                    <Stories />
                    <Posts />
                </div>
                <div class="sidebar">
                    <SideBarFixed />
                </div>
            </div>
        </main>
    );
}