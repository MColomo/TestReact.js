function Product({ productInfo }) {
    return (
      <article key={productInfo.id}>
        <h2>{productInfo.binomialName}</h2>
        <img src={productInfo.imgUrl} />
        <h3>{productInfo.name} {productInfo.price}€ </h3>  
      </article>
    )
}

export default Product;

