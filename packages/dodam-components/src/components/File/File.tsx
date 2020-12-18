import React, { useRef } from 'react';
import InputBox from '../InputBox';
import Button from '../Button';

export interface FileProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const File = ({ onChange }: FileProps) => {
  const ref = useRef(null);

  const handleClick = () => {
    if (ref) {
      (ref.current as HTMLInputElement).click();
    }
  };
  return (
    <div className="file-wrapper">
      <InputBox onChange={onChange} ref={ref} type="file" />
      <Button onClick={handleClick} size="small">
        파일선택
      </Button>

      <style jsx global>
        {`
          .file-wrapper {
            display: flex;
          }
          .file-wrapper input {
            flex: 6;
            margin-right: 8px;
          }
          .file-wrapper button {
            flex: 1;
            height: 20px;
          }
          .form-control::file-selector-button {
            display: none;
          }
          .form-control::-webkit-file-upload-button {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default File;
