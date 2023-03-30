const ProductCard = (props: { name: string }) => {
  return (
    <>
      <p>{props.name}</p>
      <p>{(Math.random() * 10 * Math.random()).toFixed(2)}€</p>
    </>
  )
}
export default ProductCard
