import SignInWithEmail from "@/components/auth/SignInWithEmail";
import DividerContinueWith from "@/components/ui/DividerContinueWith";
import SignInWithCredentials from "@/components/auth/SignInWithCredentials";
import SignInWithTwitter from "@/components/auth/SignInWithTwitter";
import SignInWithGithub from "@/components/auth/SignInWithGithub";
import Link from "next/link";
import BrandLogo from "@/components/logos/BrandLogo";

export default function SignInForm({providers}){
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<BrandLogo />

				<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
				<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">

					{
						Object.values(providers).map((provider) => (
							<div key={provider.name}>
								{ provider.type === 'email' && <SignInWithEmail /> }

								{ provider.type === 'credentials' && (
									<div>
										<DividerContinueWith />
										<SignInWithCredentials />
									</div>)
								}

							</div>
						))
					}


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
					<Link
						href={`/auth/signup`}
						className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						Create your account
					</Link>
				</p>
			</div>
		</div>
	)
}