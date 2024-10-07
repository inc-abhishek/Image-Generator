import axios from "axios";
import React, { useState } from "react";

function Image() {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  // console.log(text);
  async function query(data) {
    // console.log(data);
    if(data!=""){
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        {
          inputs: data,
        },
        {
          headers: {
            Authorization: `Bearer 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`,
          },
  
          responseType: "blob",
        }
      );
      // const result = await response.json();
      // const text = await responseType.text();
      console.log(response);
      const imageUrl = URL.createObjectURL(response.data);
      console.log(imageUrl);
      setImage(imageUrl);
      console.log(text);
    }else{
      alert("Image Ka Name To De Yaar");
    }
    
  }
  
  return (
    <div className="w-2/5 mx-auto shadow-lg border mt-10 pb-4 bg-blue-300">
       <div className="flex flex-col gap-3 ">
       <p className=" font-medium text-2xl mb-2 text-center pt-2 text-blue-500">Geek Image </p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="border border-slate-600 mx-auto w-1/2 py-2 px-4 " placeholder="Enter text !"
      />
      <button onClick={() => query(text)} className="bg-blue-400 py-2 px-6 font-medium mb-3 w-44 m-auto hover:bg-black-200 hover:text-white">Click Me</button>
       </div>
      <div>
      <img src={image} alt="" className="w-full  "  />
      </div>
    </div>
    
  );
}

export default Image;
