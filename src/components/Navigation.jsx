const Navigation = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img
            className="h-[36px]"
            src="src/assets/greghostinglogo.png"
            alt="logo"
          />
        </a>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get Admission
        </button>
      </div>
    </div>
  );
};

export default Navigation;
