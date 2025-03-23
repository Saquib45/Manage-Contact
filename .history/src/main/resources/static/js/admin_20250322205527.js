console.log("Hello from admin.js");
document.querySelector("#image_input").addEventListener("change", function(event) {
    let file = event.target.files[0]; // ✅ Corrected syntax
    //if (!file) return; // Prevent errors if no file is selected

    let reader = new FileReader();
    reader.onload = function() {
        document.querySelector("#upload_image_preview").setAttribute("src", reader.result);
    };
    reader.readAsDataURL(file);
});

