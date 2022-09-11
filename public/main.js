async function init(){

    const uploadInput = document.getElementById('upload')
    const fileReader = new FileReader();
    let rustApp = null;

    try{
    rustApp = await import('../pkg');
    }catch(err){
    console.error(err)
    }

    

    fileReader.onloadend = () => {
        let base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,'')
       const greyImg = rustApp.greyScaleImage(base64);
       document.getElementById('new-img').setAttribute('src',greyImg);

    }

    uploadInput.addEventListener('change',() => {
        fileReader.readAsDataURL(uploadInput.files[0])
    })

}

init();
