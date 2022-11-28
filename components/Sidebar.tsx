import { useState } from "react";

const Sidebar = () => {
	const [chats, setChats] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);

	return (
		<section className="max-w-md p-2" id="sidebar">
			<div className="text-center">Spika</div>
			<div className="flex">
				<input className="mx-auto bg-medium-purple rounded-md py-1 my-2" />
			</div>
			<div id="chats">
				{chats.map((c) => {
					return <Chat />;
				})}
			</div>
			<New />
		</section>
	);
};
const Chat = () => {
	return (
		<div className="flex justify-between py-3 border border-x-0 border-b-light-purple border-t-0">
			<div className="flex text-center place-items-center">
				<div className="bg-light-purple text-light-purple w-12 h-12 rounded-3xl">
					|
				</div>
				<div className=" mx-1">Tony</div>
			</div>
			<div className="flex text-center place-items-center">
				<div>11:11</div>
				<div className=" mx-1 bg-light-purple rounded-2xl w-6 h-6 text-center">
					11
				</div>
			</div>
		</div>
	);
};
const New = () => {
	return (
		<div className="bg-light-purple flex place-content-center w-12 h-12 rounded-3xl">
			<div>+</div>
		</div>
	);
};

/* users +avatar +new message count,timestamps ,online status */
export default Sidebar;
