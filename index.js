const header = `<nav class="nav border-bottom bg-body-tertiary">
        <a class="nav-link" aria-current="page" href="index.html" style="color: aliceblue; font-weight: 500;">Home</a>
        <a class="nav-link" href="resume.html">Resume</a>
        <a class="nav-link" href="contact.html">Contact</a>
        <a class="nav-link" href="projects.html">Projects</a>
        <a class="nav-link" href="https://github.com/BearWithMe18">Github</a>
        <a class="nav-link" href="https://www.linkedin.com/in/noah-leach-79650116b">LinkedIn</a>
    </nav>`

document.getElementById("header").insertAdjacentHTML('afterbegin', header);