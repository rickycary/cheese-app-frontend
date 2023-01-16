import { useLoaderData } from "react-router-dom"

function Show(props) {
    const cheese = useLoaderData()

    return (
        <div className="cheese">
            <h1>{cheese.name}</h1>
        </div>
    )
  }
  
  export default Show