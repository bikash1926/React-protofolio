import React from 'react'

const About = () => {
    const aboutItems = [
        {
          label: 'Project done',
          number: 10
        },
        {
          label: 'Years of experience',
          number: 1
        }
      ];
  return (
    <section id='about'  className="section">

    <div className="container">
        <div className="bg-zinc-800 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb4
             md:mb-8 md:text-xl md:max-w-[60ch]">
          Welcome! I'm Bikash, a skilled web developer passionate about designin
          g visually captivating and fully optimized websites. By blending innovat
          ion with tech
          nical proficiency, I bring your ideas to life as exceptional digital experienc
          es that shine in both style and functionality.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-7">
                {
                    aboutItems.map(({ label, number}, key) =>(
                    <div key={key}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-bold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                        </div>
                        <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                    ))
                }

                {/* <img src="images/logo.svg" 
                alt="" 
                height={30}
                width={30}
                className='ml-auto md:w-[40px] md:h-[40px]' /> */}
            </div>
        </div>
    </div>
    </section>
  )
}

export default About

