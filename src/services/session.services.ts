import { SessionUser } from '@/types/definitions';
import axios from 'axios';

const expectedUser = {
  email: 'bemaster@gmail.com',
  password: 'bemaster123',
};

interface RandomUserResponse {
  results: {
    picture: {
      medium: string;
    };
  }[];
}

export async function loginService({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<SessionUser> {
  // Simulate credentials validation
  const isUserValid =
    email === expectedUser.email && password === expectedUser.password;

  if (!isUserValid) throw new Error('Wrong credentials');

  try {
    // Get a random picture
    const { data } = await axios.get<RandomUserResponse>(
      'https://randomuser.me/api/?inc=picture',
    );

    const firstResult = data.results[0];

    // Simulate a user session response
    return {
      id: '1',
      username: 'bemaster',
      picture: firstResult.picture.medium,
    };
  } catch (error) {
    throw new Error('We had a problem trying to log you in, please try again');
  }
}
