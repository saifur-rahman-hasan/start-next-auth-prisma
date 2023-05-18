import { EnvelopeIcon } from '@heroicons/react/20/solid'
import {useEffect, useState} from "react";
import {EyeIcon, EyeSlashIcon, KeyIcon} from "@heroicons/react/24/solid";

export default function FormInputPassword({
	                                          label,
	                                          name,
	                                          value,
	                                          error,
	                                          onChange}) {

	const [password, setPassword] = useState(value || '')
	const [showPassword, setShowPassword] = useState(false)
	const [inputType, setInputType] = useState('password')

	const [errorMessage, setErrorMessage] = useState(error || null)

	useEffect(() => {
		setInputType(showPassword ? 'text' : 'password');
	}, [showPassword]);

	useEffect(() => {
		if(password && onChange){
			onChange(password)
		}
	}, [password, onChange])

	useEffect(() => {
		setErrorMessage(error)
	}, [error])

	return (
		<div>
			<label htmlFor={`name`} className="block text-sm font-medium leading-6 text-gray-900">
				{ label || `Password`}
			</label>
			<div className="relative mt-2 rounded-md shadow-sm">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<KeyIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
				</div>
				<input
					type={inputType}
					name={name}
					id={name}
					className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					placeholder={label}
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>

				{
					showPassword ? (
							<div
								className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
								onClick={() => setShowPassword(!showPassword)}
							>
								<EyeIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
							</div>
					) : (

						<div className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
							<EyeSlashIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
								onClick={() => setShowPassword(!showPassword)}
							/>
						</div>
					)
				}
			</div>

			{
				errorMessage && (
					<p className="mt-2 text-sm text-red-600" id="email-error">
						{errorMessage}
					</p>
				)
			}
		</div>
	)
}
