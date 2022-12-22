import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./Auth/index";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
	const [user] = useAuthState(auth);
	return (
		<div className=" bg-dark-purple text-white min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{user ? <Main /> : <SignIn />}
		</div>
	);
};

const Main = () => {
	return (
		<div className=" grid ">
			<Sidebar />
			<Chat />
		</div>
	);
};

export default Home;
