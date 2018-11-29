fetch('https://easy-motion.herokuapp.com/blog', {
        headers:{
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => {
        dispatch(receiveItems(json))
    })
    .catch(err => console.log(err))
