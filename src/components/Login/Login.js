import "firebase/auth";
import firebase from "firebase/app";

import { useContext, useState } from "react";
import { UserLoginContext } from "../../App";
import {
	initializeFramework,
	googleSingInHandle,
	singOutHandle,
	fbSignHandle,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "./LoginManegment";

import firebaseConfig from "../../firebase.config";

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

function Login() {
	const [newUser, setNewUser] = useState(false);
	const [user, setUser] = useState({
		isSingdIn: false,
		name: "",
		email: "",
		photo: "",
		password: "",
		error: "",
		success: false,
	});
	initializeFramework();
	const [userLogin, setUserLogin] = useContext(UserLoginContext);
	const handleGetData = (e) => {
		let isFiledValid = true;
		if (e.target.name === "email") {
			isFiledValid = /\S+@\S+\.\S+/.test(e.target.value);
		}
		if (e.target.name === "password") {
			const passwordLength = e.target.value.length > 5;
			const passwordChecker = /\d{1}/.test(e.target.value);
			isFiledValid = passwordLength && passwordChecker;
		}

		if (isFiledValid) {
			const newUserInfo = { ...user };
			newUserInfo[e.target.name] = e.target.value;
			setUser(newUserInfo);
		}
	};
	///////

	const submitClick = (e) => {
		if (newUser && user.email && user.password) {
			createUserWithEmailAndPassword(
				user.email,
				user.password,
				user.name
			).then((res) => {
				setUserLogin(res);
			});
		} else if (!newUser && user.email && user.password) {
			signInWithEmailAndPassword(user.email, user.password).then(
				(res) => {
					setUserLogin(res);
					console.log("updated  Info", res);
				}
			);
		}
		e.preventDefault();
	};

	// ////////////
	// googlrSignIn
	const googleSignIn = () => {
		googleSingInHandle().then((res) => {
			setUser(res);
			setUserLogin(res);
		});
	};
	//googleSignout
	const googleSignout = () => {
		singOutHandle().then((res) => {
			setUser({});
			setUserLogin({});
		});
	};
	// fbSignHandle
	const fbSignin = () => {
		fbSignHandle().then((res) => {
			setUser();
			setUserLogin();
		});
	};

	return (
		<div className="App">
			{user.isSingdIn ? (
				<button onClick={googleSignout}>Sing Out</button>
			) : (
				<button onClick={googleSignIn}>
					Sing In with Google
				</button>
			)}
			<br />
			<button onClick={fbSignin}>Sign In with Facebook</button>
			{user.isSingdIn && (
				<div>
					<p>Welcome {user.name}</p>
					<img src={user.photo} alt="fgg" />
				</div>
			)}

			<h3>Our Authentication</h3>
			<input
				type="checkbox"
				name="check"
				id=""
				onChange={() => setNewUser(!newUser)}
			/>
			<form action="" onSubmit={submitClick}>
				{newUser && (
					<input
						type="text"
						name="name"
						id=""
						onBlur={handleGetData}
						required
					/>
				)}
				<br />
				<input
					type="email"
					name="email"
					id=""
					placeholder="Email"
					onBlur={handleGetData}
					required
				/>
				<br />
				<input
					type="password"
					name="password"
					placeholder="Password"
					onBlur={handleGetData}
					required
				/>
				<br />
				<input
					type="submit"
					value={newUser ? "Sign Up" : "Sign In"}
				/>
			</form>
			<p style={{ color: "red" }}>{user.error}</p>
			{user.success && (
				<p style={{ color: "green" }}>
					Welcome!! Your{" "}
					{newUser ? "Sign up" : "Sign in"} is success
				</p>
			)}
		</div>
	);
}

export default Login;
