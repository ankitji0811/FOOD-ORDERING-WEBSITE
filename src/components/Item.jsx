import { ITEM_IMG_URL } from "../utils"


const Item = (props) => {
    const {imageId} = props.itemData;
  return (
    <div className="flex flex-col items-center cursor-pointer">
        <img className="min-w-36 max-w-36" src={ITEM_IMG_URL + imageId}/>
        {/* <span className="font-semibold text-xl mt-4 text-gray-500 text-center">Pizza</span> */}
    </div>
  )
}

export default Item