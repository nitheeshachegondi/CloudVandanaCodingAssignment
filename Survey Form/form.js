function validateAndShowPopup() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderCheckboxes = document.getElementsByName("gender");
    const genderValues = Array.from(genderCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dob || country === "" || genderValues.length === 0 || !profession || !email || !mobile) {
        alert("Please fill out all fields and select a country and gender.");
        return;
    }

    document.getElementById("selectedFirstName").textContent = firstName;
    document.getElementById("selectedLastName").textContent = lastName;
    document.getElementById("selectedDOB").textContent = dob;
    document.getElementById("selectedCountry").textContent = country;
    document.getElementById("selectedGender").textContent = genderValues.join(", ");
    document.getElementById("selectedProfession").textContent = profession;
    document.getElementById("selectedEmail").textContent = email;
    document.getElementById("selectedMobile").textContent = mobile;

    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}
