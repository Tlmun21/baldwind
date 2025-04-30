import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-24">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
            Future of support with new shape
          </h2>
          <p className="text-gray-600 text-lg mb-4 md:w-4/5">
            Discuss your goals, determine success metrics, identify problems
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">UX design content strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Development bring</span>
            </div>
          </div>
          <button className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full">
            Get started
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white max-w-72 rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href={service.link}
                className="text-indigo-600 font-medium"
              >
                LEARN MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

