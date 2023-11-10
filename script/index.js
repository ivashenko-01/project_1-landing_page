// import Footer from "./Footer";

// function App() {
//     return (
//         `
//         ${Footer()}
//         `
//     )
// }

function Footer() {
    return (
        `<footer class="footer">
        <div class="container">

            <div class="footer__wrapper">
                <a class="footer__text" href="#">Условия использования</a>
                <a class="logo" href="#"><img src="images/atom.svg" alt="Логотип"></a>
                <a class="phone" href="#">+7 977 777 77 77</a>
            </div>

        </div>
    </footer>`
    )
}

const root = document.getElementById('root');

const button = document.getElementById('123');

button.onclick = function() {
    root.innerHTML += Footer();
}