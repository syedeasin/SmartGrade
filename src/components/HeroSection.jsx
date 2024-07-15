const HeroSection = () => {
  return (
    <div
      className="container mx-auto flex flex-col lg:flex-row bg-cover bg-center justify-center items-center font-sans"
      style={{
        // backgroundImage: "url('/path-to-background-image.jpg')",
        height: "calc(90vh - 80px)",
      }}
    >
      <div className="flex-1 w-3/4 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-sans">
          The best platform to enroll in your special course
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Our Instructor Team recommends techniques and products we actually
          like and use. Try subscribing to get tips from our professional
          coaches!
        </p>

        <button
          type="button"
          className="mt-6 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Subscribe For Free Education Tips
        </button>
        <p className="mt-2 text-gray-600">Join Thousands of New Subscribers</p>
      </div>
      <div className="flex-1 flex justify-center items-center p-6 lg:p-12">
        <img
          src="src/assets/heroImage.png"
          alt="Course Image"
          className="max-w-[900px] w-[2500px] h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
