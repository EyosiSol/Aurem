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
  console.log(`url:`, baseUrl);

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
