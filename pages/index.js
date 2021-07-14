import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing Your Order');
    router.push('/product')
  }
    return (
      <>
        <h1>
          Home Page  
        </h1>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <br/>
        <Link href="/product">
          <a>Product</a>
        </Link>
        <br/>
        <button onClick={handleClick}>Place Order</button>
      </>
    )
}
