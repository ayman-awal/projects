const API_URL = 'https://staging-be-ecom.techserve4u.com';

export const loginUser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response.data)
    if (response.ok) {

      const data = await response.json();
      //localStorage.setItem('token', token);
      return data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const registerUser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const verifyEmail = async (otp, email) => {
  try {
    const response = await fetch(`${API_URL}/api/user/verifyotp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ otp, email }), // Include both otp and email in the request body
    });
    
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Email verification failed');
    }
  } catch (error) {
    console.error('Verification error:', error);
    throw error;
  }
};

/*
export const getUserInfo = async (token) => {
  try {
    const response = await fetch(`${API_URL}/api/user/verify`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch user info');
    }
  } catch (error) {
    console.error('User info error:', error);
    throw error;
  }
};
*/
