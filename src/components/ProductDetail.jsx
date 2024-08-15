function ProductDetail({ productInfo }) {
    return (
      <ul style={{ textAlign: 'left' }}>
        <li>Name: {productInfo.name}</li>
        <li>Binomial Name: {productInfo.binomialName}</li>
        <li>Price: {productInfo.price} €</li>
        <li>Waterings per week: {productInfo.wateringsPerWeek}</li>
        <li>Fertilizer: {productInfo.fertilizerType}</li>
        <li>Height: {productInfo.heightInCm} cm</li>
      </ul>
    )
}

export default ProductDetail;

