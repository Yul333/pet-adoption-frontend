import NProgress from "nprogress";
import {
  BrowserRouter as Router,

  Redirect, Route,

  Switch
} from "react-router-dom";
import Account from "../components/Account";
import SignUp from '../components/SignUp';
import AddAPet from '../pages/AddAPet';
import Home from "../pages/Home";
import MyPets from "../pages/MyPets";
import Pet from '../pages/Pet';
import MainNavigation from "./MainNavigation";
import SearchAFriend from '../components/SearchAFriend'

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
	// const user = true;
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
				<Route path="/SearchAFriend" exact>
        <SearchAFriend />
					{/* <searchAFriend /> */}
				</Route>
				<Route path="/account" exact>
					<Account />
				</Route>
        <Route path="/AddAPet" exact>
					<AddAPet />
				</Route>
        <Route path="/Pet" exact>
					<Pet />
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
