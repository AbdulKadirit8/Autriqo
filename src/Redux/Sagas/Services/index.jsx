
// Create record :used when payload does'n contain any files
export async function createRecord(collection, action) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...action.payload })
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

// Create record :used when payload contain any files
export async function createMultipartRecord(collection, action) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
            },
            body: action.payload
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

// Get record :used when payload does'n contain any files
export async function getRecord(collection, action) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}


// Update record :used when payload does'n contain any files
export async function updateRecord(collection, action) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${action.payload.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...action.payload })
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

// Update record :used when payload contain any files
export async function updateMultipartRecord(collection, action) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${action.payload.get("id")}`, {
            method: "PUT",
            headers: {
            },
            body: action.payload
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}


// Update record :used when payload does'n contain any files
export async function deleteRecord(collection, action) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${action.payload.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}