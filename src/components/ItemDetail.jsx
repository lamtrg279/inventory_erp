import { MdDeleteForever } from "react-icons/md";

const ItemDetail = ({ items = [], onDelete }) => {
  return (
    <div className="pt-20 flex justify-center items-center gap-1 flex-col">
      {items.map((item) => (
        <div key={item.id} className="flex items-center">
          <div className="inline-grid h-15 p-3 m-2 gap-x-3 border border-gray-300 rounded-lg shadow-sm bg-white  grid-cols-[1fr_auto_auto] items-center hover:shadow-md transition-shadow">
            <p className="text-gray-800 font-medium truncate w-32 px-4">
              {item.name}
            </p>
            <p className="text-gray-600 font-semibold text-center w-14">
              {item.quantity}
            </p>
            <p className="text-gray-500 text-center w-14">{item.unit}</p>
          </div>
          <button
            className="flex justify-center p-1 rounded-full hover:bg-red-100 transition shadow-sm hover:shadow-md"
            onClick={() => onDelete(item.id)}
          >
            <MdDeleteForever className="w-8 h-8 text-red-500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
