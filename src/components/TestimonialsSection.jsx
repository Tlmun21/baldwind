import { useState, useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Bataa",
    image: "https://www.standup.com.au/wp-content/uploads/2023/11/Batbileg-Battsengel_2023.jpg",
    text: "Tereer Comedian buguud halit html css eer code bichchihdeg",
  },
  {
    id: 2,
    name: "Dorjoo",
    image: "https://i1.sndcdn.com/avatars-000085485354-12q3gq-t1080x1080.jpg",
    text: "Tsergees halagdhaasaa umnu dargiinhaa com deer code bichij sursan",
  },
  {
    id: 3,
    name: "Hulan",
    image: "https://www.pressreporter.com/sites/pressreporter.etypegoogle5.com/files/styles/article420/public/field/image/hulan_murray_photo_web.jpg?itok=bKlgOdZY",
    text: "Dorjoogiin Darga",
  },
  {
    id: 4,
    name: "Buudii",
    image: "https://i1.sndcdn.com/artworks-000328293708-660d5b-t500x500.jpg",
    text: "Butelgui Buduun huuhed ajee",
  },
  {
    id: 5,
    name: "Tuguldur",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cDZocgwWRn5Fth_zqHcCs8iZ5B1QTnNGwg&s",
    text: "Tereer eruugeeree hun zodoj alj baisan",
  },
  {
    id: 6,
    name: "Munkh-Uils",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEBSCVRGi6GDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686484127961?e=2147483647&v=beta&t=1sG0Dv6hgzV8UyX04mgGDYke3FSt612MVsOLo79Tjtg",
    text: "Harvardiin tugsugch",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-16 px-4 max-w-4xl mx-auto overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What our happy clients say</h2>
        <p className="text-gray-600">Things that make it the best place to start trading</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${testimonials.length * 100}%` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 px-4 md:px-6 lg:px-8"
              style={{ width: "100%" }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white"
          >
            <BsChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white"
          >
            <BsChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

