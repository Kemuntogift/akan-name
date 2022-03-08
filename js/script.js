const myForm = document.getElementById("myForm");
let day = ["Sunday", "Monday ", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

myForm.addEventListener("submit", (e) => {
    const choice = dateChoice(e.target);
    let selectedDate = new Date(choice.get("date"));
    if (choice.get("gender") == "male") {
        document.getElementById("output").innerHTML =
            "Your Akan name would be " + maleNames[selectedDate.getDay()];
    } else {
        document.getElementById("message").innerHTML =
            "Your Akan name would be " + femaleNames[selectedDate.getDay()];
    }
});
