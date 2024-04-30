
import Home from "./Home";
export default function ProductShop(){
 
   const data = [
     { id: 1, name: 'Item 1', category: 'Category A' },
     { id: 2, name: 'Item 2', category: 'Category B' },
  
   ];
 
   return (
     <div>
       <h1>Your App</h1>
       <Home data={data} />
     </div>
   );
 }
 
