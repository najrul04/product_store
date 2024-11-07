import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "./../../../store/product";
import ProductCard from "./../../ProductCard/ProductCard";

const Home = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	console.log("products", products);

	return (
		<div className="max-w-7xl mx-auto py-12 px-4">
			<div className="flex flex-col items-center space-y-8">
				<h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-center">
					Current Products 🚀
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>

				{products.length === 0 && (
					<p className="text-xl text-center font-bold text-gray-500">
						No products found 😢{" "}
						<Link to="/createpage">
							<span className="text-blue-500 hover:underline">Create a new product</span>
						</Link>
					</p>
				)}
			</div>
		</div>
	);
};
export default Home;
