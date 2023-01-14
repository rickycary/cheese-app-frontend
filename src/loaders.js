const URL = "https://cheese-app-backend-9k4d.onrender.com"

export const cheeseLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const cheese = await response.json()
    return cheese
}