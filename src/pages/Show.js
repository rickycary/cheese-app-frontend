import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const cheese = useLoaderData()

    return (
        <div className="cheese">
            <h1>{cheese.name} Cheese</h1>
            <img src ={cheese.image} alt={cheese.name} />
            <h3>{cheese.countryOfOrigin}</h3>

            <h2>Update {cheese.name} Cheese</h2>
            <Form action={`/update/${cheese._id}`} method="post">
                <input type="input" name="name" placeholder="Update Name"/>
                <input type="input" name="image" placeholder="Cheese picture"/>
                <input type="input" name="countryOfOrigin" placeholder="Location"/>
                <input type="submit" value={`Update Cheese`} />
            </Form>
            <h2>Delete the Cheese</h2>
            <Form action ={`/delete/${cheese._id}`} method="post">
                <input type="submit" value={`Delete ${cheese.name}`} />
            </Form>
        </div>
    )
  }
  
  export default Show