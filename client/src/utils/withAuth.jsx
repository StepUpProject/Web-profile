const withAuth = (WrappedComponent) => {
    const WithAuth = (props) => {
      const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
      const [isLoading, setIsLoading] = useState(true);
      const [isAuth, setIsAuth] = useState(false);
  
      useEffect(() => {
        (async () => {
          if (cookies.jwt) {
            const { data } = await axios.post(
              `http://localhost:3000/`,
              {},
              { withCredentials: true }
            );
            setIsAuth(data.status);
          }
          setIsLoading(false);
        })();
      }, [cookies]);
  
      if (isLoading) {
        return <div>Loading...</div>;
      }
  
      if (!isAuth) {
        return <Redirect to="/login" />;
      }
  
      return <WrappedComponent {...props} />;
    };
  
    return WithAuth;
  };
  
  export default withAuth;
  
  