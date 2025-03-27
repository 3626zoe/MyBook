import ProductItem from './ProductItems';
import products from '../json/books.json'

function ProductList() {
   return (
       <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {products.map((product) => (
               <ProductItem key={product.ID} book={product} />
           ))}
       </div>
   );
}
export default ProductList;
