import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/UserContext';


export default function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    
    const { user, setUser } = useAuth();

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCredentials(prevState => ({ ...prevState, [name]: value }))
    };

    const handleLogin = async () => {
        setLoading(true)
        try {
            
            const loginResponse = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            })

            const loginData = await loginResponse.json()

            if (loginData.token) {
                login(loginData.token);

                const usersResponse = await fetch('https://fakestoreapi.com/users')
                const users = await usersResponse.json()

                const loggedInUser = users.find(u => u.username === credentials.username)

                if (loggedInUser) {
                    localStorage.setItem('userData', JSON.stringify(loggedInUser))
                    setUser(loggedInUser)

                    const userId = loggedInUser.id
                    const cartsResponse = await fetch('https://fakestoreapi.com/carts')
                    const allCarts = await cartsResponse.json()
                    const userCart = allCarts.find(cart => cart.userId === userId)
                    console.log(userCart)
                    if (userCart) {
                        localStorage.setItem('userCart', JSON.stringify(userCart))
                    } else {
                        localStorage.setItem('userCart', JSON.stringify({ products: [] }))
                    }
                
                    navigate('/')
                } else {
                    alert('User details not found. Please try again.')
                }
            } else {
                alert('Login failed. Please check your credentials.')
            }
        } catch (error) {
            console.error("Error during login or fetching user details:", error)
            setError('An error occurred. Please try again.')
        } finally {
            setLoading(false);
        }

        return (
            <div className="login">
              <h1>Welcome!</h1>
              <h3>Please sign in</h3>
              {error && <div className="error-message">{error}</div>}
              <form onSubmit={handleLogin}>
                <input 
                  type="text"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={handleInputChange}
                />
                <input 
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
                <span>
                  New Here? <Link to="/users">Create an Account</Link>
                </span>
              </form>
            </div>
          )
    }
    
}