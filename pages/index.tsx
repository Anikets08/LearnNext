import router, { useRouter } from 'next/router'

export default function Home() {
  return (
   <div className="home">
     <h1 className="title">Hello World</h1>
     <style jsx>{
       `
       .home{
         height:100vh;
         width:100%;
         display:flex;
         align-items:center;
         justify-content:center;
         color:grey;
         flex-direction:column;
         margin:10px;
        
       },
       button{
        margin:10px;
      }
       `
     }</style>
     <button onClick={()=>router.push({pathname:'/nextpage'})}>Take Me to next page</button>
     <button onClick={()=>router.reload()}>Refresh Page</button>
   </div>
   
  )
}
