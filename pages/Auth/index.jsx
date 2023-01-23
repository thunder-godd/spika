import "firebase/auth";
import firebase from "firebase/app";
import { auth, signInWithGoogle } from "../../utils/firebase";

// const firestore = firebase.firestore();

const SignIn = () => {
	return (
		<>
			<div className="max-w-sm border-light-purple">
				Sign in With Google
				<button
					className="bg-dark-purple border-light-purple"
					onClick={signInWithGoogle}>
					Sign in
				</button>
			</div>
		</>
	);
};
export const SignOut = () => {
	return (
		auth.currentUser && (
			<>
				<button onClick={auth.signOut}>Sign in</button>
			</>
		)
	);
};
export default SignIn;
