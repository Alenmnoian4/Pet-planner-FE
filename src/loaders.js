// YOUR DEPLOYED API BASE URL
const URL = "https://pet-planner-be.onrender.com"

//indexLoader => get all petplans for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/petplans/")
    const petplans = await response.json()
    return petplans
}

//showLoader => get a single petplan for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/petplans/${params.id}/`)
    const petplan = await response.json()
    return petplan
}