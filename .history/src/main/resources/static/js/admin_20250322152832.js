console.log("Hello from admin.js");
document.querySelector(#image_file_input).addEventListener("change", function(event)  {
    let file event.target.files[0];
    let reader = new FileReader();
    reader.onload = function() {
        document.querySelector("#image_preview").setAttribute("src", reader.result);
    };
    reader.readAsDataURL(file);
});
