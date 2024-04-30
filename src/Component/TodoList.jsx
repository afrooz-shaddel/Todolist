export default function TodoList({item}){
    return(
        <div   key={item}>
            <input  type="checkbox"/>

          {item}
          
        </div>
    )
}