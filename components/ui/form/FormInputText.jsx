import { EnvelopeIcon } from '@heroicons/react/20/solid'
import {IdentificationIcon, InformationCircleIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";

export default function FormInputText({ label, name, value, onChange }) {
	const [inputValue, setInputValue] = useState(value || '')

	useEffect(() => {
		if(inputValue && onChange){
			onChange(inputValue)
		}
	}, [inputValue, onChange])

	return (
		<div>
			<label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
				{label}
			</label>
			<div className="relative mt-2 rounded-md shadow-sm">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<InformationCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
				</div>
				<input
					type="text"
					name={name}
					id={name}
					className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					placeholder={label}
					value={inputValue}
					onChange={e => setInputValue(e.target.value) }
				/>
			</div>
		</div>
	)
}
