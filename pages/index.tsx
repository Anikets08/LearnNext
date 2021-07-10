
import router, { useRouter } from 'next/router'


export default function Home() {
  return (
   <div className="home">
     <h1>Hello World</h1>
     <button onClick={()=>router.push({pathname:'/nextpage'})}>Click Me</button>
     <button onClick={()=>router.reload()}>Refresh Page</button>
   </div>
   
  )
}
