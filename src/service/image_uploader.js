class ImageUploader {
    //Userにファイルを引数でもらってサーバーにアップロードしURLをレタンする
    async imgUpload() {
        const formData = new FormData();
        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/demo/image/upload", {
                method: "POST",
                body: formData
              })
            const result = await response.json();  
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ImageUploader;