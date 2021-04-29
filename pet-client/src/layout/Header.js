import {
	Menu,
} from "semantic-ui-react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Home from "../pages/Home";
import MyPets from "../pages/MyPets";
import NProgress from "nprogress";
import Account from "../components/Account";
import SignUp from '../components/SignUp'

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
	const user = false;
	// const router = useRouter()

	// function isActive(route){
	//   return route == router.pathname;
	// }

	return (
		<Router>
			<MainNavigation />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>{" "}
				<Route path="/myPetsPage" exact>
					<MyPets />
				</Route>
				<Route path="/searchAFriend" exact>
        <MyPets />
					{/* <searchAFriend /> */}
				</Route>
				<Route path="/account" exact>
					<Account />
				</Route>
        <Route path="/SignUp" exact>
					<SignUp />
          
				</Route>
				<Redirect to="/" />
			</Switch>{" "}
		</Router>
	);


}

export default Header;
