/*  
- a base function that handles any kind of api requests
- it takes a Url, a Method and Data both Method and Data being optional because they vary based on the Request type
- handled by try catch block where it handles any kind of request gracefylly 
- the return has message and reponse type that will help when integrating a pop up that we can show the user an interface that something faild
*/

const apiUrl = process.env.BASE_URL;

interface CustomError {
  message: string;
  response: {
    data: unknown;
  };
}

const apiCall = async ({
  url,
  method = 'GET',
  data = [],
}: {
  url: string;
  method?: string;
  data?: unknown;
}) => {
  const baseUrl = apiUrl;

  try {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined,
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData?.error.message || 'Something went wrong');
    }
    return responseData;
  } catch (error: unknown) {
    const errorMessage =
      (error as CustomError)?.message || 'An unexpected error occurred';
    return {
      error: {
        title: 'Error!',
        description: errorMessage,
        duration: 3000,
      },
    };
  }
};

export default apiCall;
