
function App (){
    let name = "Blog Post"
    let content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero provident neque illo optio ab iusto repudiandae beatae aliquam ex eaque quis laudantium cupiditate perspiciatis, ratione repellat iste recusandae eligendi quidem?"
    const coments = [
        {id:1, coment: "connent one"},
        {id:2, coment: "connent two"},
        {id:3, coment: "connent three"},
    ]
    
    return(
       <div className="container">
         <h1>{name}</h1>
         <p>{content}</p>
         <h3>Comments no : {coments.length}</h3>
         <ul>
            {coments.map((ele)=>(
                <li key={ele.id}>{ele.coment}</li>
            ))}
         </ul>
       </div>
    )
}

export default App;