import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const useVerifyUser = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      if (cookies.jwt) {
        try {
          const { data } = await axios.post(
            `http://localhost:3000/`,
            {},
            { withCredentials: true }
          );
          setUser(data.user);
        } catch (error) {
          console.error(error);
        }
      }
    };
    verifyUser();
  }, [cookies]);

  return user;
};

export default useVerifyUser;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';

// const useVerifyUser = () => {
//   const [user, setUser] = useState(null);
//   const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
//   const navigate = useNavigate();

//   useEffect( () => {
//     console.log(cookies);
//     const verifyUser = async () => {
//       if (!cookies.jwt) {
//         const { data } = await axios.post(
//           `http://localhost:3000/`,
//           {},
//           { withCredentials: true }
//         );
//         setUser(data.user);
//         console.log(data.user);
//       }
//     };
//     verifyUser();
//   }, [cookies, removeCookie, navigate]);
//   console.log(user);
//   return user;
// };


// export default useVerifyUser;