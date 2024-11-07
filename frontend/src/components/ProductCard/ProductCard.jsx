import { useProductStore } from "./../../store/product";
import { useState } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { deleteProduct, updateProduct } = useProductStore();

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		alert(success ? `Success: ${message}` : `Error: ${message}`);
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		setIsModalOpen(false);
		alert(success ? "Product updated successfully" : `Error: ${message}`);
	};

	return (
		<div className="shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-white dark:bg-gray-800">
			<img
				src={product.image}
				alt={product.name}
				className="h-48 w-full object-cover"
			/>

			<div className="p-4">
				<h3 className="text-lg font-bold mb-2">{product.name}</h3>
				<p className="text-xl font-semibold text-gray-600 mb-4">${product.price}</p>

				<div className="flex space-x-2">
					<button
						onClick={() => setIsModalOpen(true)}
						className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600"
					>
						✏️ Edit
					</button>
					<button
						onClick={() => handleDeleteProduct(product._id)}
						className="text-white bg-red-500 p-2 rounded-full hover:bg-red-600"
					>
						🗑️ Delete
					</button>
				</div>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="bg-black opacity-50 absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
					<div className="bg-white rounded-lg p-6 z-10 max-w-md w-full">
						<h3 className="text-lg font-bold mb-4">Update Product</h3>
						<div className="space-y-4">
							<input
								type="text"
								placeholder="Product Name"
								className="w-full px-4 py-2 border rounded"
								value={updatedProduct.name}
								onChange={(e) =>
									setUpdatedProduct({ ...updatedProduct, name: e.target.value })
								}
							/>
							<input
								type="number"
								placeholder="Price"
								className="w-full px-4 py-2 border rounded"
								value={updatedProduct.price}
								onChange={(e) =>
									setUpdatedProduct({ ...updatedProduct, price: e.target.value })
								}
							/>
							<input
								type="text"
								placeholder="Image URL"
								className="w-full px-4 py-2 border rounded"
								value={updatedProduct.image}
								onChange={(e) =>
									setUpdatedProduct({ ...updatedProduct, image: e.target.value })
								}
							/>
						</div>
						<div className="flex justify-end space-x-2 mt-4">
							<button
								className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
								onClick={() => handleUpdateProduct(product._id, updatedProduct)}
							>
								Update
							</button>
							<button
								className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
								onClick={() => setIsModalOpen(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

// Define PropTypes for ProductCard
ProductCard.propTypes = {
	product: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired,
};

export default ProductCard;
