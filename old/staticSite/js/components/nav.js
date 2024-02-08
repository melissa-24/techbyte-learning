class Nav extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="javascript:void(0);" class="icon" onclick="menu()">
                <i class="fa fa-bars"></i>
            </a>
            <nav id="myNav">
                <a href="./index.html">Home</a>
                <a href="./about.html">About</a>
                <a href="./courses.html">Courses</a>
                <a href="./team.html">Meet the Team</a>
                <a href="./apply.html">Apply</a>
                <a href="https://learn.techbyte-learning.com" target="_blank">School Portal</a>
            </nav>
        </nav>
        `
    }
}
customElements.define("nav-component", Nav)