type userType = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type response = {
  token: string;
  user: userType;
  status: {
    message: string;
  };
};

type signUp = {
  name: string;
  email: string;
  password: string;
};

type login = {
  email: string;
  password: string;
};

export { userType, response, signUp, login };
