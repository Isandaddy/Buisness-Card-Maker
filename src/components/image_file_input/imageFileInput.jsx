import React, { memo, useRef, useState } from 'react';
import styles from './imageFileInput.module.css';


//利用者から名前をもらう imageがアップロードされたら更新してくれるコールバック
const ImageFileInput = memo(({imageUploader, name, onFileChange}) => {
    const inputRef = useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const [loading, setLoading] = useState(false);

    const onChange = async (event) => {
        setLoading(true);
        //fileをアップロードしに転送
        const uploaded = await imageUploader.uploder(event.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
        
    };

    return (
        <div className={styles.contain}>
            <input ref={inputRef} className={styles.input} type="file" accept="image/*" name='file' onChange={onChange} />
            {/* inputをcssで操作する事が難しいためbuttonで操作しクリックする効果を得る */}
            {!loading && (<button className={`${styles.button} ${name ? styles.pink : styles.gray}`} onClick={onButtonClick}>
                {name || 'No File'}
            </button>)}
            {loading && <div className={styles.loading}></div>}
        </div>
    );
});

export default ImageFileInput;