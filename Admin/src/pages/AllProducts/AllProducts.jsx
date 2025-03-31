import { useEffect, useState } from 'react';
import './AllProducts.css';
import nav_icon from '../../assets/db'; // Ensure this file exports `edit_icon` & `bin_icon`
import { toast } from 'react-toastify';

const ProductList = ({ token, url }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${url}/api/accessory/list`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]); // Added url as dependency

  const deleteProduct = async (productId) => { // Fixed function name
    try {
      const response = await fetch(`${url}/api/accessory/remove`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Added token for authentication
        },
        body: JSON.stringify({ productId })
      });

      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      if (!data.success) return toast.error(data.message);

      toast.warning(data.message);
      setProducts((prevProducts) => prevProducts.filter(product => product._id !== productId)); // Remove deleted product from state
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img src={product.featuredImage} alt={product.name} className="product-image" />
          <div className="content">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-old-price">₹{product.price.oldPrice}</p>
            <p className="product-new-price">₹{product.price.newPrice}</p>
            <p className="product-tags">{product.tags.join(", ")}</p> {/* Fixed comma issue */}
          </div>
          <div className="product-options">
            <img src={nav_icon.edit_icon} alt="Edit" />
            <img onClick={() => deleteProduct(product._id)} src={nav_icon.bin_icon} alt="Delete" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
