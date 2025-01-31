import React from 'react'

function Projects() {
    return (
        <div id='project'>
            <div className='py-16 bg-gray-800'>
                <div className="container mx-auto text-center">
                    <div className="text-3xl font-bold text-yellow-600">
                        Projects
                    </div>
                    <p className=" font-medium text-white mt-4">
                        These are all My projects, I hope you will enjoy with my project. 
                    </p>
                </div>
            </div>

            <div className='container mx-auto flex items-center py-16'>
                <div className="w-1/2 mx-8">
                    <img src="images/project/project_WonderLand.png" alt="project_WonderLand" className='w-auto h-auto rounded-lg'/>
                </div>
                <div className="w-1/2">
                    <div className='font-bold text-2xl mb-4 text-yellow-600'>
                        Project : Wonder Land with C++ Language
                    </div>
                    <div className='font-semibold text-lg text-gray-800 '>
                        This is  a project that I made from GDB Online Website.
                        <br />
                        It's about calculation functions : buy tickets, foods, souvenir and get change.
                        <br />
                        Read More : <a href='https://github.com/WitchapolInaksorn/WonderLand_with_CPP' className='text-blue-400'>Click to go Github </a>
                    </div>
                </div>
            </div>

            <div className='container mx-auto flex items-center py-16'>
                <div className="w-1/2 mx-8">
                    <div className='font-bold text-2xl mb-4 text-yellow-600'>
                        Project : Restaurant with Python Language
                    </div>
                    <div className='font-semibold text-lg text-gray-800 '>
                        This is  a project that I made from GDB Online Website.
                        <br />
                        It's about calculation functions : buy foods, drinks, random foods&drinks and get change.
                        <br />
                        Read More : <a href='https://github.com/WitchapolInaksorn/Restaurant_with_Python' className='text-blue-400'>Click to go Github </a>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="images/project/project_Restaurant.png" alt="project_WonderLand" className='w-auto h-auto rounded-lg'/>
                </div>
            </div>

            <div className='container mx-auto flex items-center py-16'>
                <div className="w-1/2 mx-8">
                    <img src="images/project/project_MathGame.png" alt="project_Hashing" className='w-auto h-auto rounded-lg'/>
                </div>
                <div className="w-1/2 mx-8">
                    <div className='font-bold text-2xl mb-4 text-yellow-600 mx-7'>
                        Project : Hashing with C Language
                    </div>
                    <div className='font-semibold text-lg text-gray-800 mx-7'>
                        This is  a project that I made from Apache NetBeans.
                        <br />
                        It's about calculation functions : Caluculate Number.
                        <br />
                        Read More : <a href='https://github.com/WitchapolInaksorn/Mathgame_with_Java' className='text-blue-400'>Click to go Github </a>
                        </div>
                </div>
            </div>

            <div className="container mx-auto text-center py-16 ">
                <div className='font-bold text-2xl text-yellow-600 mb-4'>
                    Other Projects
                </div>
                <div className='font-semibold text-lg text-gray-800'>
                    <div>
                        These above is a part of my projects 
                    </div>
                    <div className='mb-5'>
                        Read More : 
                        <span className='text-blue-400'>
                            <a href="https://github.com/WitchapolInaksorn?tab=repositories"> Click to fo Github </a>
                        </span>
                    </div>
                </div>
                <div className="container flex justify-center">
                    <img src="images/project/github.png" alt="github" width={900} className='rounded-lg'/>
                </div>
            </div>


        </div>

    )
}

export default Projects