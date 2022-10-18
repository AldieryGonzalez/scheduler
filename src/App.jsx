import "./App.css";
import Calendar from "./components/Calendar";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Calendar />} />
			<Route path='/signin' element={<SignIn />} />
		</Routes>
	);
}

export default App;
