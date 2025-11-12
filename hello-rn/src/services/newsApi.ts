import axios from 'axios';
import { Article } from '../types/news';
import {API_KEY} from '@env'

const KEY = 'API_KEY';
const BASE_URL = API_KEY;

export const getTopHeadlines = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'us',
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};