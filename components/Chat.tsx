const Chat = () => {
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
				<div className="mt-4" id="sent">
					<div className="bg-medium-purple max-w-[14rem] p-2 rounded-md ">
						This is a message
					</div>
				</div>
				<div className="absolute right-0" id="received">
					<div className="bg-medium-purple mt-4 top p-2 rounded-md max-w-[14rem] ">
						This is a very very very very very very very very very very very
						very very very very very very very very very very very very very
						very very very very very very very long message
					</div>
					<div className="bg-medium-purple mt-4 top p-2 rounded-md max-w-[14rem]">
						This is a very very very very very very very very very very very
						very very very very very very very very very very very very very
						very very very very very very very long message
					</div>
				</div>
			</div>
			<div>
				<div>|</div>
				<div>||||||||||||||||||||||</div>
			</div>
		</div>
	);
};
//TEXT bubbles
export default Chat;
