const fetchApi = async (apiUrl, payload) => (
     await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
        .then(response => (response.json()))
        .catch(error => ({ error }))
)

export {
    fetchApi
}