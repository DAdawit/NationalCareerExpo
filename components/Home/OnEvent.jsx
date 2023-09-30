import Image from "next/image";

const OnEvent = () => {
  const styles2 = {
    backgroundImage: `url('/event1.jpg')`,
    backgroundSize: "cover",
  };
  return (
    <section className="mt-16">
      <div className="bg-fixed bg-cover bg-center pb-7" style={styles2}>
        <div className="flex flex-col justify-center items-center gap-5 pt-16 ">
          <h1 className="gridiantText text-6xl font-serif font-extrabold">
            {" "}
            On Our Event
          </h1>
        </div>
        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-y-8 ">
          <div className="flex flex-col justify-center mt-10 bg-white opacity-70 p-8">
            <h1 className="text-center text-3xl  mb-3 sm:text-5xl font-medium font-serif text-gray-800 tracking-wider">
              Career Expo
            </h1>
            <p>
              Step into a world where opportunities abound! Experience a
              dynamic, immersive blend of in-person and virtual interactions.
              Engage with leading employer companies, explore a diverse range of
              industries, and uncover hidden gems that align with your passions
              and aspirations.
            </p>
          </div>
          <div className="flex flex-col justify-center mt-10 bg-white opacity-70 p-8">
            <h1 className="text-center text-3xl mb-3 sm:text-5xl font-medium font-serif text-gray-800 tracking-wider">
              Side Events
            </h1>
            <p className="text-gray-800">
              Brace yourself for a series of captivating side events designed to
              ignite your passion, inspire change, and equip you with the skills
              needed to thrive in the digital age. From thought-provoking
              discussions on passion versus profession to harnessing the power
              of social media for career success, each event promises to leave
              you energized and ready to conquer the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnEvent;
