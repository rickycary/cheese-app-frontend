import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props){
    const mainPage = useLoaderData()

    return (
        <div>
            <h2>Add a Cheese</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="Cheese Name" />
                <input type="input" name="image" placeholder="Cheese's Image" />
                <input type="input" name="countryOfOrigin" placeholder="Country of Origin" />
                <input type="submit" value="Add Cheese" />
            </Form>

            <h2>Cheeses</h2>
            {mainPage.map(cheese => (
                <div key={cheese._id} className="cheese">
                    <Link to={`/${cheese._id}`}>
                        <h1>{cheese.name}</h1>
                    </Link>
                    <img src={cheese.image} alt={cheese.name} />
                    <h3>{cheese.countryOfOrigin}</h3>
                </div>
            ))}
        </div>
    )
}

export default Index