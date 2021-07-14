import Link from "next/link"

function ProductList({ productId = 100}) {
    return (
        <>
        <Link href="/">
            <a>Home</a>
        </Link>
         <h3>
             <Link href="/product/1">
                 <a>Product 1</a>
             </Link>
         </h3>
         <h3>
             <Link href="/product/2">
                 <a>Product 2</a>
             </Link>
         </h3>
         <h3>
             <Link href="/product/3">
                 <a>Product 3</a>
             </Link>
         </h3> 
         <h3>
             <Link href={`/product/${productId}`} replace>
                 <a>Product {productId}</a>
             </Link>
         </h3> 
        </>
    )
}

export default ProductList
