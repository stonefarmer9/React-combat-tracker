import axios from 'axios'; 

const CONDITIONS_ENDPOINT = 'https://api.open5e.com/conditions/'

export const getConditions = async function () {
    let conditionsList;
    try {
        await axios.get(CONDITIONS_ENDPOINT)
            .then((res) => {
                conditionsList = res.data.results;
            })

    } catch (error) {
            console.log(error);
    };
    return conditionsList;
}
