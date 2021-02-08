class ImageUploader {
    //Userにファイルを引数でもらってサーバーにアップロードしURLをレタンする
    async uploder(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", "docs_upload_example_us_preset" );
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