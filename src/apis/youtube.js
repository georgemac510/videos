import axios from 'axios';

const KEY='AIzaSyCU8lQxdnmfH6HhWY8WdDrpnGEsB85k2FY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
