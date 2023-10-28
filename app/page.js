import Converter from "@/components/Converter";

export default function Home() {

  return (
    <div className='w-full h-[100vh] m-0'>
      <div className='w-[30%] h-[70vh] mx-auto pt-20'>
        <p className='text-4xl font-bold text-center my-4'>Currency Converter</p>
        <p className="text-justify text-lg w-[70%] mx-auto mb-8">Stay informed with real-time exchange rates and customized rate alerts</p>
        <Converter />
      </div>
    </div>
  );
}

