import axios from 'axios';
import {ProfileViewT} from '../../utility/types/type';

export const fetchGithubProfile = async ({
  handleResponse,
  handleError,
  username,
}: ProfileViewT) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    if (response.status === 200) {
      //   console.log('Response from Github', response);
      handleResponse(response.data);
    } else {
      handleError(null);
      //   alert('User not found');
    }
  } catch (error) {
    handleError('User not found');
    // console.error('Error fetching data:', error);
  }
};
