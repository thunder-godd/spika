import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/analytics";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

firebase.initializeApp({
	apiKey: "AIzaSyCZRhSbxz59R9olEo4HIECBGeyWqJ1gEtg",
	authDomain: "chatterbox-12077.firebaseapp.com",
	projectId: "chatterbox-12077",
	storageBucket: "chatterbox-12077.appspot.com",
	messagingSenderId: "665238637271",
	appId: "1:665238637271:web:e6ab73ee223dab0e6abe92",
	measurementId: "G-C12SR9HS6H",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const Home = () => {
	const [user] = useAuthState(auth);
	return (
		<div className=" bg-dark-purple text-white min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main />
			{/* {user ? <Main /> : <SignIn />} */}
		</div>
	);
};

const Main = () => {
	return (
		<div className=" grid ">
			<Sidebar />
			<ChatRoom />
		</div>
	);
};
const SignIn = () => {
	return (
		auth.currentUser && (
			<>
				<button onClick={signInWithGoogle}>Sign in</button>
			</>
		)
	);
};
function ChatRoom() {
	const dummy = useRef();
	const messagesRef = firestore.collection("messages");
	const query = messagesRef.orderBy("createdAt").limit(25);

	const [messages] = useCollectionData(query, { idField: "id" });

	const [formValue, setFormValue] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();

		// const { uid, photoURL } = auth.currentUser;

		await messagesRef.add({
			content: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setFormValue("");
		dummy.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<main>
				{messages &&
					messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

				<span ref={dummy}></span>
			</main>

			<form onSubmit={sendMessage}>
				<input
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
					placeholder="say something nice"
				/>

				<button type="submit" disabled={!formValue}>
					🕊️
				</button>
			</form>
		</>
	);
}

function ChatMessage(props) {
	const { content } = props.message;

	// const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

	return (
		<>
			<div className="">
				{/* <img
					src={
						photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
					}
				/> */}
				<p>{content}</p>
			</div>
		</>
	);
}
export default Home;
