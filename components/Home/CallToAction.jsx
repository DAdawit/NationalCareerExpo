import Image from "next/image";

const CallToAction = () => {
  const styles2 = {
    backgroundImage: `url('/happyPepole.jpg')`,
    backgroundSize: "cover",
  };
  return (
    <section className="mt-16">
      <div
        className="bg-fixed bg-cover bg-center pb-7 h-96 flex justify-center items-center"
        style={styles2}
      >
        <div className="grid grid-cols-1 max-w-3xl mx-auto gap-y-8 ">
          <div className="flex flex-col justify-center mt-10 bg-white opacity-90 p-8">
            <p className="text-3xl font-bold font-sans gridiantText">
              Don&apos;t miss this incredible opportunity to connect, learn, and
              embark on a successful career journey. Join us at the National
              Career Expo 2023 on October 18 and 19, 2022, at Millennium Hall,
              Addis Ababa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
