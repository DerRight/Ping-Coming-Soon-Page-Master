function validEmail() {
    const emailInput = document.getElementById("input-email");
    const errorMessage = document.getElementById("error-message");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add("error");
        errorMessage.classList.add("active");
    } else {
        emailInput.classList.remove("error");
        errorMessage.classList.remove("active");
    }
}