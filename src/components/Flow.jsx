import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/codeImg.webp";
import { checklistItems } from "../constants";
const Flow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Why Use Our {" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
        Tool?
        </span>
        </h2> 
        <div className="flex flex-wrap justify-center mt-7">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="Code"/>
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item,index)=>(
                    <div key={index} className="flex mb-12">
                        <div className="text-green-600 mx-6  h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2/>
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>    
                ))}

            </div>
            
        </div>     
    </div>
  )
}

export default Flow