import { useState } from "react";
import { useProductStore } from "../../../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  // Handler for adding the product
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    // Reset product fields after addition
    setNewProduct({ name: "", price: "", image: "" });

    if (!success) {
      alert(`Error: ${message}`);
    } else {
      alert(`Success: ${message}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Create a New Product</h1>
      </div>

      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full p-3 border border-gray-900 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-gray-900"
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="w-full p-3 border border-gray-900 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-gray-900"
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="w-full p-3 border border-gray-900 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-gray-900"
          />

          <button
            onClick={handleAddProduct}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
