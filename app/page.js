
import React from 'react'
import { Button} from '@/components/ui/button'
import Link from 'next/link'
function Home() {
  return (
    <div> 
      <div>Home</div>    
      <Link href={"/create"}>
        <Button>create new</Button>
      </Link>
    </div>
  )
}

export default Home