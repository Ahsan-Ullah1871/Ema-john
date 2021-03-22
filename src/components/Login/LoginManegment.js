import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

export const initializeFramework = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
};

export const googleSingInHandle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();

	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((res) => {
			const { displayName, email, photoURL } = res.user;
			const singedInInfo = {
				isSingdIn: true,
				name: displayName,
				email: email,
				photo: photoURL,
				success: true,
			};
			return singedInInfo;
		});
};

export const singOutHandle = () => {
	return firebase
		.auth()
		.signOut()
		.then(() => {
			const singedInInfo = {
				isSingdIn: false,
				name: "",
				email: "",
				photo: "",
				success: false,
			};
			return singedInInfo;
		});
};

export const createUserWithEmailAndPassword = (email, password, name) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)

		.then((res) => {
			const newInfo = res;
			newInfo.error = "";
			newInfo.success = true;
			newInfo.isSingdIn = true;

			updateInfo(name);
			return newInfo;
		})
		.catch((error) => {
			let errorMessage = error.message;
			// ..
			const newInfo = {};
			newInfo.error = errorMessage;
			newInfo.success = false;
		});
};

export const signInWithEmailAndPassword = (email, password) => {
	console.log("click");

	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)

		.then((res) => {
			const newInfo = res;
			newInfo.error = "";
			newInfo.success = true;
			newInfo.isSingdIn = true;

			console.log("updated  Info", res.user);
		})
		.catch((error) => {
			let errorMessage = error.message;

			const newInfo = {};
			newInfo.error = errorMessage;
			newInfo.success = false;
		});
};

export const fbSignHandle = () => {
	let FbProvider = new firebase.auth.FacebookAuthProvider();

	return firebase
		.auth()
		.signInWithPopup(FbProvider)
		.then((result) => {
			/** @type {firebase.auth.OAuthCredential} */
			var credential = result.credential;

			// The signed-in user info.
			var user = result.user;
			return user;

			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
			var accessToken = credential.accessToken;

			// ...
		})
		.catch((error) => {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;

			// ...
		});
};

const updateInfo = (name) => {
	let user = firebase.auth().currentUser;

	user.updateProfile({
		displayName: name,
	})
		.then(function () {
			console.log("name Change");
		})
		.catch(function (error) {
			console.log(error);
		});
};
