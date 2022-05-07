export default function Header (){
    return (
        <header>
            <div class="cabecalho">
                <div class="cabecalho-esquerda">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="mini-borda"></div>
                    <img src="/assets/logo-insta.png" alt="Logo do Instagram"/>
                </div>
                <img class="logo-mobile" src="assets/logo-insta.png" alt="Logo do Instagram mobile"/>
                <input type="text" placeholder="Pesquisar"/>
                <div class="cabecalho-direita">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </header>
    );
}