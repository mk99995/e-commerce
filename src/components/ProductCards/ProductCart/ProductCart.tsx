const ProductCard = (props: { name: string; price: number }) => {
  return (
    <>
      <img src="/placeholder.jpg" alt="" />
      <p>{props.name}</p>
      <p>{props.price}€</p>
    </>
  )
}
export default ProductCard
