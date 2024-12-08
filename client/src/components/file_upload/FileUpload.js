import { useEffect, useState } from "react";
import '../../assets/styles/FileUpload.css';
import FileCards from './FileCard';
import UploadArea from './UploadArea';

function FileUpload({ id }) {
    const [length, setLength] = useState(0);
    const [files, setFiles] = useState(["text.txt"]);

    useEffect(() => {
        const storedFiles = localStorage.getItem("files");
        if (storedFiles) {
            const parsedFiles = JSON.parse(storedFiles);
            setFiles(parsedFiles);
            setLength(parsedFiles.length);
        }
    }, [length]);

    return (
        <div 
            className="file-upload-container d-flex justify-content-center align-items-center" 
            id="file-upload"
        >
            <div 
                className="content-container rounded-4" 
                style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.78)',
                    width: '80%', // Điều chỉnh chiều rộng phù hợp
                    maxWidth: '800px', // Giới hạn chiều rộng tối đa
                    padding: '20px', // Padding hợp lý
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Thêm bóng để nổi bật
                    borderRadius: '15px' // Bo góc hợp lý
                }}
            >
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <div className="big-text fw-bold">
                            Tải tài liệu
                        </div>
                        <div className="text my-2">
                            Tải tài liệu bạn muốn in
                        </div>
                    </div>
                </div>
                <div 
                    className="row d-flex justify-content-center align-items-center" 
                >
                    <UploadArea setLength={setLength} uploadText="Chọn tài liệu ở đâu" />
                    {files.length > 0 && (
                        <div 
                            className="col-12 col-md-6 mt-4 mt-md-0" 
                            id="list-files"
                            style={{ 
                                padding: '0 10px'
                            }}
                        >
                            <div className="text-2 fw-bold mb-3">
                                Tài liệu đã tải
                            </div>
                            <FileCards files={files} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FileUpload;
