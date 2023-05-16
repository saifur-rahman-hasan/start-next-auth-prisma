import {useState} from "react";
import {useRouter} from "next/router";
import {signIn} from "next-auth/react";
import AlertError from "@/components/ui/alerts/AlertError";

export default function SignInWithCredentials(){
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()
	const [signinError, setSigninError] = useState('')
	const [loading, setLoading] = useState(false)

	async function handleSigninSubmit(e) {
		e.preventDefault()
		setLoading(true)

		try {
			const signInResponse = await signIn('credentials', {
				email,
				password,
				redirect: false,
				callbackUrl: '/'
			})

			if(!signInResponse.ok){
				const signInErrors = {
					CredentialsSignin: "Your credentials are incorrect.",
					default: 'Failed to sign in'
				}
				setSigninError(signInErrors[signInResponse?.error] || signInErrors.default)
				return
			}

			if(signInResponse.ok){
				await router.push(signInResponse?.url)
			}

		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			{
				signinError && (<AlertError className={`my-4`} message={signinError} /> )
			}

			<form
				className="space-y-6"
				onSubmit={handleSigninSubmit}
			>

				<div>
					<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
						Email address
					</label>
					<div className="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							required
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
				</div>

				<div>
					<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
						Password
					</label>
					<div className="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autoComplete="current-password"
							required
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
						<label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
							Remember me
						</label>
					</div>

					<div className="text-sm leading-6">
						<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
							Forgot password?
						</a>
					</div>
				</div>

				<div>
					{loading && (
						<button
							type="button"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Please wait ...
						</button>
					)}

					{!loading && (
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign in with Credentials
						</button>
					)}
				</div>
			</form>
		</div>

	)
}