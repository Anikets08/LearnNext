
import router, { useRouter } from 'next/router'


export default function Home() {
  return (
   <div className="home">
     <h1 className="title">Hello World</h1>
     <style jsx>{
       `
       .title{
         color:grey;
       }
       `
     }</style>
     <button onClick={()=>router.push({pathname:'/nextpage'})}>Click Me</button>
     <button onClick={()=>router.reload()}>Refresh Page</button>
   </div>
   
  )
}
