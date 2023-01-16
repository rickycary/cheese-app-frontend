const URL = "https://cheese-app-backend-9k4d.onrender.com"

export const mainPageLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const mainPage = await response.json()
    return mainPage
}

export const cheeseLoader = async ({params}) => {
    const response = await fetch(URL + "/cheese/" + params.id)
    const cheese = await response.json()
    return cheese
}