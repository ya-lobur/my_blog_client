import React, { FunctionComponent, useState } from 'react';
import { Button, Space, Upload } from "antd";
import { UploadFile } from "antd/es/upload/interface";
import { UploadOutlined } from "@ant-design/icons";

interface IImageFromUploader {
    onFileChange: React.Dispatch<React.SetStateAction<File | null>>
}

const ImageFromUploader: FunctionComponent<IImageFromUploader> = (props) => {
    const { onFileChange } = props;

    const [fileList, setFileList] = useState<Array<UploadFile<any>>>([]);

    function onChangeHandler({ file, fileList }) {
        setFileList(fileList);
        onFileChange(file);
    }


    function beforeUpload(file) {
        const isImage = file && file['type'].split('/')[0] === 'image';
        if (!isImage) {
            console.error('You can only upload image file!');
        }
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
            console.error('Image must smaller than 5MB!');
        }
        return isImage && isLt5M;
    }


    return (

        <Space>
            <Upload
                fileList={fileList}
                onChange={onChangeHandler}
                maxCount={1}
                listType="picture"
                beforeUpload={() => false} // пришлось сделать так, чтобы само по себе изображение не отправлялось
                accept={'image/*'}
            >
                <Button icon={<UploadOutlined/>}>
                    {fileList.length ? 'Изменить' : 'Загрузить картинку'}
                </Button>

            </Upload>
        </Space>
    );
}

export default ImageFromUploader;