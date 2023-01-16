import { useLoaderData } from "react-router-dom"

function Show(props) {
    const cheese = useLoaderData()

    return (
        <div className="cheese">
            <h1>{cheese.name}</h1>
            <img src ={cheese.image} alt={cheese.name} />
            <h3>{cheese.countryOfOrigin}</h3>
        </div>
    )
  }
  
  export default Show