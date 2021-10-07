import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
  
    // Only on initial render
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);
  
    // New term -> API Call -> Update states
    const search = async (term) => {
      const res = await youtube.get('/search', {
        params: { q: term }
      });
      
      setVideos(res.data.items);
    };

    return [videos, search];
}

export default useVideos;