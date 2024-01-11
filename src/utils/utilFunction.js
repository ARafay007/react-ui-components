export const randomKey = () => Math.random().toString(36).slice(2);

export const getAndDeleteFetcher = async (URL) => {
  try{
    const resp = await fetch(URL);
    const data = await resp.json();
    return data;
  }
  catch(error){
    console.log(error);
    throw error.message || error;
  }
};

export const postPutPatchFetcher = async (URL, httpMethod, payload) => {
  try{
    const resp = await fetch(URL, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    });
    const data = await resp.json();
    return data;
  }
  catch(error){
    console.log(error);
    throw error.message || error;
  }
}