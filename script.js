const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dept = document.getElementById("department").value;

    if (name === "" || email === "" || dept === "") {
        alert("All fields are required");
        return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${dept}</td>
    `;
    table.appendChild(row);

    form.reset();
});
