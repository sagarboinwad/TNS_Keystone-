function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// PROFILE IMAGE UPLOAD
document.getElementById("profile-img").addEventListener("change", function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        document.getElementById("image-preview").innerHTML =
            `<img src="${event.target.result}">`;
    };

    if (file) reader.readAsDataURL(file);
});

// ADD NEW PROJECT
function addProject() {
    let container = document.getElementById("projects-container");
    let div = document.createElement("div");
    div.classList.add("project-input");

    div.innerHTML = `
        <label>Project Title:</label>
        <input type="text" class="project-title">

        <label>Project Description:</label>
        <textarea class="project-desc"></textarea>
    `;
    container.appendChild(div);
}

// GENERATE PORTFOLIO
function generatePortfolio() {
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let about = document.getElementById("about").value;
    let skills = document.getElementById("skills").value.split(",");
    let img = document.querySelector("#image-preview img");

    let titles = document.querySelectorAll(".project-title");
    let descs = document.querySelectorAll(".project-desc");

    let html = `
        <div style="text-align:center;">
            ${img ? `<img src="${img.src}" class="portfolio-photo">` : ""}
            <h1>${name}</h1>
            <h3 style="color:gray;">${profession}</h3>
        </div>

        <p>${about}</p>

        <h2>Skills</h2>
        ${skills.map(s => `<span class="skills-badge">${s.trim()}</span>`).join("")}

        <h2>Projects</h2>
    `;

    titles.forEach((t, i) => {
        html += `
            <div class="project-card">
                <h3>${t.value}</h3>
                <p>${descs[i].value}</p>
            </div>
        `;
    });

    document.getElementById("portfolio-output").innerHTML = html;
}
