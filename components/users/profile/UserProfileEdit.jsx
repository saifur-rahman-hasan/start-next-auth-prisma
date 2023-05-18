import ProfileImageSelector from "@/components/users/profile/ProfileImageSelector";
import FormInputEmail from "@/components/ui/form/FormInputEmail";
import FormInputName from "@/components/ui/form/FormInputName";
import FormInputTextarea from "@/components/ui/form/FormInputTextarea";
import FormInputPassword from "@/components/ui/form/FormInputPassword";
import FormInputPasswordWithConfirmation from "@/components/ui/form/FormInputPasswordWithConfirmation";
import UserConnectedAccounts from "@/components/users/profile/UserConnectedAccounts";

export default function UserProfileEdit({ profileUser }) {
	return (
		<div className="space-y-10 divide-y divide-gray-900/10">
			<div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
				<div className="px-4 sm:px-0">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						This information will be displayed publicly so be careful what you share.
					</p>
				</div>

				<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
					<div className="px-4 py-6 sm:p-8">
						<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

							{/* User Name */}
							<div className="sm:col-span-4">
								<FormInputName
									value={profileUser?.name} />
							</div>

							<div className={`sm:col-span-4`}>
								<FormInputEmail
									value={profileUser?.email}/>
							</div>

							<div className={`sm:col-span-4`}>
								<ProfileImageSelector
									profileUser={profileUser} />
							</div>

							<div className="col-span-full">
								<FormInputTextarea
									label={`About`}
									helpText={`Write a few sentences about yourself.`} />
							</div>

						</div>
					</div>
					<div className="flex items-center justify-start gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
						</button>

						<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
							Cancel
						</button>
					</div>
				</form>
			</div>

			<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
				<div className="px-4 sm:px-0">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Account Security</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						Use a strong and unique password for your account. Enable two-factor authentication for an extra layer of security.
					</p>
				</div>

				<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
					<div className="px-4 py-6 sm:p-8">
						<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-4">
								<FormInputPassword
									label={'Current Password'}
									name={`current_password`}
								/>
							</div>

							<div className="sm:col-span-4">
								<FormInputPasswordWithConfirmation
									label={'Password'}
									name={`password`}
								/>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-start gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
						</button>

						<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
							Cancel
						</button>
					</div>

				</form>

			</div>

			<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
				<div className="px-4 sm:px-0">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Connected Accounts</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						Connect your accounts from various platforms to enhance your experience.
					</p>
				</div>

				<div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 p-8 py-4">
					<UserConnectedAccounts />
				</div>

			</div>

			<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
				<div className="px-4 sm:px-0">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
				</div>

				<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
					<div className="px-4 py-6 sm:p-8">
						<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
									First name
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
									Last name
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
									Email address
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
									Country
								</label>
								<div className="mt-2">
									<select
										id="country"
										name="country"
										autoComplete="country-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</div>
							</div>

							<div className="col-span-full">
								<label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
									Street address
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="street-address"
										id="street-address"
										autoComplete="street-address"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-2 sm:col-start-1">
								<label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
									City
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="city"
										id="city"
										autoComplete="address-level2"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
									State / Province
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="region"
										id="region"
										autoComplete="address-level1"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
									ZIP / Postal code
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="postal-code"
										id="postal-code"
										autoComplete="postal-code"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-start gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
						</button>

						<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
							Cancel
						</button>
					</div>

				</form>
			</div>

			<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
				<div className="px-4 sm:px-0">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						{`We'll always let you know about important changes, but you pick what else you want to hear about.`}
					</p>
				</div>

				<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
					<div className="px-4 py-6 sm:p-8">
						<div className="max-w-2xl space-y-10">
							<fieldset>
								<legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
								<div className="mt-6 space-y-6">
									<div className="relative flex gap-x-3">
										<div className="flex h-6 items-center">
											<input
												id="comments"
												name="comments"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
											/>
										</div>
										<div className="text-sm leading-6">
											<label htmlFor="comments" className="font-medium text-gray-900">
												Comments
											</label>
											<p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
										</div>
									</div>
									<div className="relative flex gap-x-3">
										<div className="flex h-6 items-center">
											<input
												id="candidates"
												name="candidates"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
											/>
										</div>
										<div className="text-sm leading-6">
											<label htmlFor="candidates" className="font-medium text-gray-900">
												Candidates
											</label>
											<p className="text-gray-500">Get notified when a candidate applies for a job.</p>
										</div>
									</div>
									<div className="relative flex gap-x-3">
										<div className="flex h-6 items-center">
											<input
												id="offers"
												name="offers"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
											/>
										</div>
										<div className="text-sm leading-6">
											<label htmlFor="offers" className="font-medium text-gray-900">
												Offers
											</label>
											<p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
										</div>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
								<p className="mt-1 text-sm leading-6 text-gray-600">
									These are delivered via SMS to your mobile phone.
								</p>
								<div className="mt-6 space-y-6">
									<div className="flex items-center gap-x-3">
										<input
											id="push-everything"
											name="push-notifications"
											type="radio"
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
										<label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
											Everything
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="push-email"
											name="push-notifications"
											type="radio"
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
										<label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
											Same as email
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="push-nothing"
											name="push-notifications"
											type="radio"
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
										<label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
											No push notifications
										</label>
									</div>
								</div>
							</fieldset>
						</div>
					</div>

					<div className="flex items-center justify-start gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
						</button>

						<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
							Cancel
						</button>
					</div>

				</form>
			</div>
		</div>
	)
}
