import React from 'react';

function Certificates() {
  return (
    <div id='certificate'>
      <div className='py-16 bg-gray-800'>
        <div className="container mx-auto text-center px-4">
          <div className="text-3xl font-bold text-yellow-600">
            Certificates
          </div>
          <p className="font-medium text-white mt-4">
            These are all My Certificates, let's see my Certificates.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className='container mx-auto flex flex-wrap items-center justify-center gap-8 px-4'>
          <div className="w-full sm:w-1/2 lg:w-[600px] h-[400px]">
            <img src="/images/certificate/certificate_Appsheet.jpg" alt="Appsheet" className='w-full h-full rounded-lg' />
          </div>

          <div className="w-full sm:w-1/2 lg:w-[600px] h-[400px]">
            <img src="/images/certificate/certificate_figma.jpg" alt="Figma" className='w-full h-full rounded-lg' />
          </div>
        </div>

        <div className='container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 mt-8'>
          <div className="w-full lg:w-[600px] h-[500px]">
            <img src="/images/certificate/certificate_Java.jpg" alt="Java" className='w-full h-full rounded-lg' />
          </div>
        </div>

        <div className='container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 mt-8'>
          <div className="w-full sm:w-1/2 lg:w-[600px] h-[400px]">
            <img src="/images/certificate/certificate_Link.jpg" alt="Link" className='w-full h-full rounded-lg' />
          </div>

          <div className="w-full sm:w-1/2 lg:w-[600px] h-[400px]">
            <img src="/images/certificate/certificate_goodStudent.PNG" alt="Good Student" className='w-full h-full rounded-lg' />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Certificates;