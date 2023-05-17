import { getProviders} from "next-auth/react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import SignInForm from "@/components/auth/SignInForm";
import Dump from "@/components/core/Dump";

export default function Signin({ providers } ) {
	return (
		<div className={`min-h-screen bg-gray-50`}>
			<div className="h-full">
				<SignInForm providers={providers} />
			</div>
		</div>
	)
}


export async function getServerSideProps(context) {
	const session = await getServerSession(context.req, context.res, authOptions);

	// If the user is already logged in, redirect.
	// Note: Make sure not to redirect to the same page
	// To avoid an infinite loop!
	if (session) {
		return { redirect: { destination: "/" } };
	}

	const providers = await getProviders();

	return {
		props: {
			providers: providers ?? []
		},
	}
}