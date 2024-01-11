// import './uploadButton.css';

// export const UploadButton = ({onChange, uploadButtonProps={}}) => {
export const UploadButton = ({uploadButtonProps={}}) => {

  // const handleFileChange = (event) => {
  //   if (onChange) {
  //     onChange(event);
  //   }
  // };

  return (
    <>
      <label htmlFor='file_upload' className='custom_file_upload'>Upload File</label>
      {/* <input type='file' id='file_upload' onChange={handleFileChange} {...uploadButtonProps} /> */}
      <input type='file' id='file_upload' {...uploadButtonProps} />
    </>
  );
};