import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
	return (
		<div className=" bg-dark-purple text-white min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className=" grid ">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
};

export default Home;
