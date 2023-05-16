import {useState} from "react";
import {logger} from "../../lib/logger";
import {useRouter} from "next/router";
import AlertError from "@/components/ui/alerts/AlertError";
import {getCsrfToken, getProviders, signIn} from "next-auth/react";
import Image from "next/image";
import SignInWithEmail from "@/components/auth/SignInWithEmail";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import SignInWithCredentials from "@/components/auth/SignInWithCredentials";
import SignInWithTwitter from "@/components/auth/SignInWithTwitter";
import SignInWithGithub from "@/components/auth/SignInWithGithub";

function BrandLogo() {
	return (
		<img
			className="mx-auto h-10 w-auto"
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>
	)
}

function DividerContinueWith(){
	return (
		<div className="relative mt-10">
			<div className="absolute inset-0 flex items-center" aria-hidden="true">
				<div className="w-full border-t border-gray-200" />
			</div>
			<div className="relative flex justify-center text-sm font-medium leading-6">
				<span className="bg-white px-6 text-gray-900">Or continue with</span>
			</div>
		</div>
	)
}

export default function Signin({ providers } ) {
	return (
		<div className={`h-full bg-gray-50`}>
			<div className="h-full">
				<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
					<div className="sm:mx-auto sm:w-full sm:max-w-md">
						<BrandLogo />

						<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
							Sign in to your account
						</h2>
					</div>

					<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
						<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">

							<SignInWithEmail />

							<DividerContinueWith />

							<SignInWithCredentials />

							<DividerContinueWith />

							<div>
								<div className="mt-6 grid grid-cols-2 gap-4">
									<SignInWithTwitter />

									<SignInWithGithub />
								</div>
							</div>
						</div>

						<p className="mt-10 text-center text-sm text-gray-500">
							Not a member?{' '}
							<a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
								Start a 14 day free trial
							</a>
						</p>
					</div>
				</div>
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