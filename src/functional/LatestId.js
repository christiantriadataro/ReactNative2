// LatestIdComponent.js

import axios from 'axios';

const LatestId = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/accounts/'); // Replace with your API endpoint
        const data = response.data;

        // Find the highest id using the reduce function
        // const maxId = data.reduce((max, item) => {
        //     return item.id > max ? item.id : max;
        // }, -1);

        return maxId;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default LatestId;
