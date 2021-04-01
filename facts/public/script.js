const uploadImage = document.querySelector("#image");


uploadImage.addEventListener("change", function(e){
    let fileObject = e.target.files[0];
    let formData = new FormData();
    formData.append( 'photo', fileObject );
    axios.post("/uploadImage", formData);
})