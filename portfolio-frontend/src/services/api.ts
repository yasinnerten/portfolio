// Basic API configuration
const api = {
  get: async (url: string) => {
    const response = await fetch(url);
    return response.json();
  },
  
  post: async (url: string, data: any) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
};

export default api; 