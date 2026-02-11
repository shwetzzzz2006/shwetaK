// ---------- REGISTER USER ----------
const form = document.getElementById("regForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check for duplicate email
        let emailExists = users.some(user => user.email === email);

        if (emailExists) {
            alert("Email already registered!");
            return;
        }

        users.push({
            name: name,
            email: email,
            password: password
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("User Registered Successfully!");

        form.reset();
    });
}


// ---------- DISPLAY USERS ----------
const tableBody = document.getElementById("userTable");

if (tableBody) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.forEach(user => {
        let row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
            </tr>
        `;

        tableBody.insertAdjacentHTML("beforeend", row);
    });
}
