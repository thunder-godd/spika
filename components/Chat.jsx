import { useRef, useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { getDocs, doc, setDoc } from "firebase/firestore";
import { auth, messagesRef, db } from "../utils/firebase";

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [formValue, setFormValue] = useState("");
	useEffect(() => {
		const getMessages = async () => {
			const data = await getDocs(messagesRef);
			setMessages(
				data.docs.map((doc) => {
					return { ...doc.data(), id: doc.id };
				})
			);
		};
		getMessages();
	}, [messages]);
	console.log(messages);
	const dummy = useRef();

	const sendMessage = async (e) => {
		e.preventDefault();

		const { uid } = auth.currentUser;
		await setDoc(doc(messagesRef), {
			content: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
		});

		setFormValue("");
		dummy.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className="border mr-8 p-4 col-start-2 col-span-2">
			<header>
				<div className="flex justify-between py-3 border border-x-0 border-b-light-purple border-t-0">
					<div className="flex text-center place-items-center">
						<div className="bg-light-purple text-light-purple w-12 h-12 rounded-3xl">
							|
						</div>
						<div className=" mx-1">Tony</div>
					</div>
					<div className="flex text-center place-items-center">
						<div>|</div>
					</div>
				</div>
			</header>
			<div className="min-h-[80vh] p-1 relative" id="messages">
				{/* <div className="mt-4" id="sent">
					<div className="bg-medium-purple max-w-[14rem] p-2 rounded-md ">
						This is a message
					</div>
				</div>
				<div>
					<div className="bg-medium-purple mt-4 top p-2 rounded-md max-w-[14rem]">
						This is a very very very very very very very very very very very
						very very very very very very very very very very very very very
						very very very very very very very long message
					</div>
				</div> */}
				<main>
					{messages &&
						messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

					<span ref={dummy}></span>
				</main>
			</div>
			<div className="border border-x-0 border-t-light-purple border-b-0 p-1 ">
				<form onSubmit={(e) => sendMessage(e)}>
					<input
						value={formValue}
						onChange={(e) => setFormValue(e.target.value)}
						placeholder="say something nice"
					/>

					<button type="submit" disabled={!formValue}>
						🕊️
					</button>
				</form>
			</div>
			{/* <Input send={sendMessage} /> */}
		</div>
	);
};
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
				<div className="mt-4 " id="received">
					<div className="bg-medium-purple max-w-[14rem] p-2 rounded-md">
						{content}
					</div>
				</div>
			</div>
		</>
	);
}

//TEXT bubbles
export default Chat;
