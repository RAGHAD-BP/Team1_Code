document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault(); 


    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

   
     if (!username || !password) {
        alert("Please fill all fields");
        return;
     } 

    try {
        const response = await fetch("https://team1-code.onrender.com/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.message === "saved") {
            window.location.href = "home.html"; 
        } else {
            alert("Error saving data");
        }
    } catch (err) {
        alert("Connection error");
    }
});



