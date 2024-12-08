import axios from "axios";
import { useState } from "react";

const useCloudinry = () => {

  const [file, setFile] = useState(null)

  const [imageUrl, setImageUrl] = useState(null)
  const [isLoading, setisLoading] = useState(false)


const uploadFile = async (e) => {
console.log('hello');

    
    const selectedFile = e.target.files[0] 

    if (selectedFile) {

        setisLoading(true)
      setFile(selectedFile);
      const data = new FormData();
      data.append("file", selectedFile);
      data.append("upload_preset", "frist_time_using_cloudinary")
      data.append("cloud_name", "duvhwffmi")

      try {
        const res = await axios.post('https://api.cloudinary.com/v1_1/duvhwffmi/image/upload',data)
        console.log(res.data);

        const url =res.data.secure_url;
       setImageUrl(url);
       console.log("Uploaded Image URL:", url);  
    
    } catch (error) {
        console.error("Error uploading image:", error);
      }

      setisLoading(false)

    }
  }

  return { uploadFile, file, imageUrl,isLoading } 

}

export default useCloudinry