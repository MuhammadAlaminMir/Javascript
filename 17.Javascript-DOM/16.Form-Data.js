let form = document.getElementById("from");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let fromData = {};
    [...this.elements].forEach((el) => {
        if (el.type !== "submit") {
            isValid = validator(el);
            if (isValid) {
                formData[el.name] = el.value;
            } else {
                el.classList.add("is-invalid");
                alert(`${el.name} is Required`);
            }
        }
    });
    if (isValid) {
        console.log(fromData);
        this.reset();
    }
});

function validator(el) {
    if (!el.value) {
        return false;
    }
}
