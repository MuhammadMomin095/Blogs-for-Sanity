import Footer from './components/Footer';
import {client} from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client"; 

export default async function Home() {
  
    const data = await client.fetch(`*[_type == "blog"]`);
    console.log(data);
    return(
      <div className='bg-gradient-to-r from-[#CCDBE2] via-[#F0FBFA] to-[#CCDBE2]'>
       <div className="px-10">
        <div className=" py-4">
    
        <div className="flex justify-center w-full items-center relative h-96">
         <img
         src="/2.jpg"
         alt="Background"
         className="absolute inset-0 w-full h-full object-cover " style={{ boxShadow: "-20px -20px 40px #203038, 20px 20px 40px #203038"}}
         />
        <div
         className="flex justify-center items-center w-full px-24 bg-black border bg-opacity-70"
         style={{ boxShadow: "20px 20px 40px #907B6C" }}
         >
         <h1 className="text-white absolute font-bold text-center text-6xl">
         AI & MACHINE LEARNING BLOGS
         </h1>
         <p className="text-white text-xl absolute text-center mt-36 mb-4">
          Explore our latest insights, tips, and stories to inspire your journey!
          </p>
          <button className="bg-white absolute text-[#311F19] mt-64 px-6 py-2 rounded-md shadow-lg hover:bg-black hover:text-white transition-all">
           Read More
        </button>
        </div>
</div>


        </div>

        <div className="flex flex-wrap justify-center gap-8 py-12 mt-32">
  {data.map((blog: any, index: number) => (
    <div
      key={index}
      className="flex flex-col  bg-gradient-to-r from-[#578098] via-[#FOFBFA] to-[#578098] rounded-lg border-black border overflow-hidden w-full md:w-[350px] sm:w-96 transition-transform transform duration-300 ease-in-out hover:scale-95" style={{ boxShadow: "-10px -10px 20px #203038, 10px 10px 20px #203038"}}
    >
      <div className="w-full flex justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          {blog.name}
        </h1>
      </div>

      {blog.image?.asset && (
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={urlFor(blog.image).url()}
            alt={blog.name}
            className="w-full h-full object-cover px-2 rounded-3xl"
          />
        </div>
      )}

      <div className="w-full p-4">
        <h2 className="text-black text-sm text-justify">{blog.paragraph}</h2>
      </div>
    </div>
  ))}
</div>
       
    </div>
    <Footer />
    </div>
    

  );
}
