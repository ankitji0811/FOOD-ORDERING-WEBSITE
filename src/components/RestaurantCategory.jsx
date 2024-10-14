import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, showItem, handleShowItem } = props;

  //   console.log(data);

  const handleShow = () => {
    handleShowItem();
  };

  return (
    <div className="max-w-5xl mx-auto my-4 rounded-xl p-8 shadow">
      <div
        className="flex justify-between border-b border-black py-1 cursor-pointer"
        onClick={handleShow}
      >
        <div className="font-semibold">
          {data?.title} ({data?.itemCards?.length})
        </div>
        <button className="bg-transparent outline-none border-none text-xl mr-2">
          ⬇️
        </button>
      </div>
      {showItem && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
