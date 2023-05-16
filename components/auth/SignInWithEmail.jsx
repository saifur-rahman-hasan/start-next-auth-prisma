import {useState} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";

export default function SignInWithEmail(){
	const [email, setEmail] = useState('')
	const [signinError, setSigninError] = useState('')
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	async function handleSignInWithEmail(e) {
		e.preventDefault()
		setLoading(true)

		try {
			const signInResponse = await signIn('email', {
				email,
				redirect: false
			})

			if(!signInResponse.ok){
				setSigninError(signInResponse?.error)
				return
			}

			if(signInResponse?.ok && signInResponse?.url){
				await router.push(signInResponse?.url)
			}

		}catch (error) {
			console.log(e)
		}finally {
			setLoading(false)
		}
	}

	return (
		<form
			className="space-y-6"
			onSubmit={handleSignInWithEmail}
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
				{loading && (
					<button
						type="button"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Sending email ...
					</button>
				)}

				{ !loading && (
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Sign in with Email
					</button>
				)}
			</div>

		</form>
	)
}