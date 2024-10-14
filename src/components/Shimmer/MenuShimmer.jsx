const MenuShimmer = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="w-full mx-auto h-5 bg-gray-100 m-5"></div>
      <div className="flex flex-col w-30 h-40 bg-gray-100"></div>

      <div className="w-full mx-auto h-5 bg-gray-100 m-5"></div>

      <div className="flex flex-col gap-y-5">
        <div className="w-full h-32 bg-gray-100"></div>
        <div className="w-full h-32 bg-gray-100"></div>
        <div className="w-full h-32 bg-gray-100"></div>
        <div className="w-full h-32 bg-gray-100"></div>
        <div className="w-full h-32 bg-gray-100"></div>
        <div className="w-full h-32 bg-gray-100"></div>
      </div>
    </div>
  );
};

export default MenuShimmer;
