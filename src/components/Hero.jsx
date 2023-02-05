import React from "react";

const Hero = () => {
  return (

    <>
    <div className=" xl:flex justify-between mt-[200px] mb-[100px] md:flex justify-between mt-[200px] mb-[100px] sm:block mx-0 my-0 ">
        <h1 className="text-xl mt-[150px] ml-[100px]  font-extrabold font-mono hover:translate-x-1 px-5"> 
            KABABJEEZ GOAT FARM
        </h1>
        <img className=" mx-[100px]  border-solid shadow-2xl rounded-md sm:mx-0 my-0 block " src="https://ichef.bbci.co.uk/news/976/cpsprodpb/22B5/production/_116758880_b3d77d04-9c88-49fd-aa4e-894210fb4452.jpg" alt="goat pic" />
    </div>
    </>
  );
};

export default Hero;
