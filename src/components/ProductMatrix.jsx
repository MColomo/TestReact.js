import Product from './Product'

function ProductMatrix({ allProducts, nColumns }) {
    const matrix = splitProducts(allProducts, nColumns);
    return (
      <div>
        {matrix.map((row, rowIndex) => ( 
          <div key={rowIndex} 
          style={{ display: 'flex', marginBottom: '10px' }}
          >
            {row.map((item, colIndex) => ( 
              <div
                key={colIndex}
                style={{
                  padding: '10px'
                }}
              >
                {<Product 
                  productInfo={item}/>}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
}
  
function splitProducts(products, nColumns)
{
const matrix = [];
for (let i = 0; i < products.length; i += nColumns) {
    matrix.push(products.slice(i, i + nColumns));
}
return matrix;
}

  export default ProductMatrix;