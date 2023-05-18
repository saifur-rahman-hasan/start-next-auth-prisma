import {useEffect, useState} from "react";
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/24/solid";
import classNames from "@/lib/classNames";

export default function UpdatableTextInput({ label, value }){
	const [
		editable,
		setEditable
	] = useState(false)

	const [
		inputValue,
		setInputValue
	] = useState(value)

	const [
		inputValueChanged,
		setInputValueChanged
	] = useState(false)

	useEffect(() => {
		if(value !== inputValue){
			setInputValueChanged(true)
		}else{
			setInputValueChanged(false)
		}
	}, [value, inputValue])

	function handleCancelEdit() {
		setInputValue(value)
		setInputValueChanged(false)
		setEditable(false)
	}

	return (
		<div className="pt-6 sm:flex">
			<dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">{ label }</dt>

			{
				!editable && (
					<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
						<div className="text-gray-900">{ value || 'UNDEFINED'}</div>

						<button
							type="button"
							className="font-semibold text-indigo-600 hover:text-indigo-500"
							onClick={() => setEditable(true) }
						>
							Update
						</button>
					</dd>
				)
			}


			{
				editable && (
					<dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
						<div className={`w-full`}>
							<div className="flex rounded-md shadow-sm">
								<div className="relative flex flex-grow items-stretch focus-within:z-10">
									<input
										type="email"
										name="email"
										id="email"
										className={classNames(
											inputValueChanged && 'bg-orange-100/50',
											'block w-full rounded-none rounded-l-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										)}
										placeholder="John Smith"
										value={inputValue || ''}
										onChange={e => setInputValue(e.target.value) }
									/>
								</div>
								<button
									type="button"
									className="relative -ml-px inline-flex items-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>
									<CheckCircleIcon className={`w-5 h-5 text-green-600`} />

									Save
								</button>

								<button
									type="button"
									className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									onClick={handleCancelEdit}
								>
									<XCircleIcon className={`w-5 h-5 text-red-400`} />

									Cancel
								</button>
							</div>
						</div>
					</dd>
				)
			}

		</div>
	)
}