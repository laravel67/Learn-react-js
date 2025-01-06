export default function Product({ product })
{
    return (
        <>
            <h3 className="">{product.id} : {product.name}</h3>
            <p className="">{product.price}</p>
        </>
    )
}