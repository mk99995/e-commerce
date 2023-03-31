const ProductCard = (props: { name: string; price: number }) => {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.price}€</p>
    </>
  )
}
export default ProductCard
