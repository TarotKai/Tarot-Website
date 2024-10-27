export const fetchTarotResult = async (message, needDetail, needCard, cardName) => {
    const apiUrl = 'http://localhost:8001';
    try {
      const response = await fetch(`${apiUrl}/kimi/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'testAccount',
        },
        body: JSON.stringify({ message, needDetail, needCard, cardName}),
      });
  
      if (!response.ok) throw new Error('请求失败，请重试');
  
      return await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  };