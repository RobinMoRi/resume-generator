import axios from 'axios';

export const getHelloWorld = async () => {
    try {
        const response = await axios.get('/api/hello');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
}

