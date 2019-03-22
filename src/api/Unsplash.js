import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID bff7a6b08cbaafc84b4c5e73289b0b608c00d4655c6a6cd931b16322234bdf91"
    }
});