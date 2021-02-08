import React, { useRef, useState } from 'react';
import styles from './imageFileInput.module.css';


//利用者から名前をもらう imageがアップロードされたら更新してくれるコールバック
const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    const inputRef = useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const [loading, setLoading] = useState(false);

    const onChange = async (event) => {
        setLoading(true);
        //fileをアップロードしに転送
        const uploaded = await imageUploader.uploder(event.target.files[0]);//
        console.log(uploaded);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
        setLoading(false);
    };

    return (
        <div className={styles.contain}>
            <input ref={inputRef} className={styles.input} type="file" accept="image/*" name='file' onChange={onChange} />
            {/* inputをcssで操作する事が難しいためbuttonで操作しクリックする効果を得る */}
            <button className={styles.button} onClick={onButtonClick}>
                {loading ? 'loading...' :name || 'No File'}
            </button>
        </div>
    );
}

export default ImageFileInput;