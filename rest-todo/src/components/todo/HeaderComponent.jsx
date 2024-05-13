import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function HeaderComponent() {

// const authContext = useContext(AuthContext)
// console.log(authContext.number)
const authContext = useAuth()
const isAuthenticated = authContext.isAuthenticated

function logout() {
	authContext.logout()
}

return (
<header className="border-bottom border-light border-1 mb-5 p-2">
<div className="container">
	<div className="row">
		<nav className="navbar navbar-expand-lg">
			<Link className="navbar-brand ms-2 fs-2 fw-bold" to={`/welcome/${authContext.user}`}>KuDev's Todo App</Link>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav">
					<li className="nav-item">
						{isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
					</li>
				</ul>
			</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					{!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
				</li>
				<li className="nav-item">
					{isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
				</li>
			</ul>
		</nav>
	</div>
</div>
</header>
)
}

export default HeaderComponent