import { useDropzone } from "react-dropzone";

interface DragDropType { 
    onDrop : any,
    accept : string 
}
  
const Dropzone = ({ onDrop, accept }: DragDropType) => {
    // Initializing useDropzone hooks with options
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept
    });
  
    /* 
      useDropzone hooks exposes two functions called getRootProps and getInputProps
      and also exposes isDragActive boolean
    */
  
    return (
      <div {...getRootProps()}>
        <input className="dropzone-input" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <p className="dropzone-content">
              Drag 'n' drop some files here, or click to select files
            </p>
          )}
        </div>
      </div>
    );
  };
  
  export default Dropzone;