import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "https://pet-planner-be.onrender.com"

//createAction => create a petplan from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newPetplan = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // send request to backend
    await fetch(URL + "/petplans/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPetplan)
    })

    // redirect back to index page
    return redirect("/")
}

//updateAction => update a petplan from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get petplan id
    const id = params.id

    // construct request body
    const updatedPetplan = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // send request to backend
    await fetch(URL + `/petplans/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPetplan)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => delete a petplan from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get petplan id
    const id = params.id

    // send request to backend
    await fetch(URL + `/petplans/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}