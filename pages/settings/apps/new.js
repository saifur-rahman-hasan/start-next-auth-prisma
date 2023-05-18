import DashboardDefaultLayout from "@/components/layouts/dashboard/DashboardDefaultLayout";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import FormInputText from "@/components/ui/form/FormInputText";
import FormInputTextarea from "@/components/ui/form/FormInputTextarea";
import FormInputWebsite from "@/components/ui/form/FormInputWebsite";
import FormInputImageWithUpload from "@/components/ui/form/FormInputImageWithUpload";

export default function NewApp(){
	return (
		<DashboardDefaultLayout>
			<div className={`p-8`}>

				<PageHeading />

				<div className="space-y-10 divide-y divide-gray-900/10 mt-10 px-8">
					<div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
						<div className="px-4 sm:px-0">
							<h2 className="text-base font-semibold leading-7 text-gray-900">App Information</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								This information will be displayed publicly so be careful what you share.
							</p>
						</div>

						<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
							<div className="px-4 py-6 sm:p-8">
								<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

									<div className="sm:col-span-4">
										<FormInputText
											label={'App Name'}
											name={'app_name'}
											value={''}
										/>
									</div>

									<div className="sm:col-span-4">
										<FormInputTextarea
											label={'Description of your app'}
											name={'app_description'}
											value={''}
										/>
									</div>

									<div className="sm:col-span-4">
										<FormInputWebsite
											label={'Homepage URL'}
											name={'app_homepage_url'}
											value={''}
										/>
									</div>

									<div className="col-span-full">
										<FormInputImageWithUpload label={`App Logo`} name={`app_logo`} />
									</div>
								</div>
							</div>
							<div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
								<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
									Cancel
								</button>
								<button
									type="submit"
									className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Save
								</button>
							</div>
						</form>
					</div>

					<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
						<div className="px-4 sm:px-0">
							<h2 className="text-base font-semibold leading-7 text-gray-900">Identifying and authorizing users</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">The full URL to redirect to after a user authorizes an installation.</p>
						</div>

						<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
							<div className="px-4 py-6 sm:p-8">
							</div>
							<div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
								<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
									Cancel
								</button>
								<button
									type="submit"
									className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Save
								</button>
							</div>
						</form>
					</div>

					<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
						<div className="px-4 sm:px-0">
							<h2 className="text-base font-semibold leading-7 text-gray-900">Post installation</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								{`Post installation: After the initial setup, users can configure settings, personalize their experience, and start utilizing the full functionality of the installed application or system.`}
							</p>
						</div>

						<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
							<div className="px-4 py-6 sm:p-8">

							</div>
							<div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
								<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
									Cancel
								</button>
								<button
									type="submit"
									className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Save
								</button>
							</div>
						</form>
					</div>

					<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
						<div className="px-4 sm:px-0">
							<h2 className="text-base font-semibold leading-7 text-gray-900">Webhook</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">Enable real-time communication between systems by setting up HTTP callbacks. Receive and process data from external sources, triggering actions and keeping your application updated</p>
						</div>

						<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
							<div className="px-4 py-6 sm:p-8">
							</div>
							<div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
								<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
									Cancel
								</button>
								<button
									type="submit"
									className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Save
								</button>
							</div>
						</form>
					</div>

					<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
						<div className="px-4 sm:px-0">
							<h2 className="text-base font-semibold leading-7 text-gray-900">Permissions</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								Control access levels and define user capabilities within your system. Grant or restrict permissions to ensure data privacy, security, and appropriate functionality based on user roles
							</p>
						</div>

						<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
							<div className="px-4 py-6 sm:p-8">
								<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

								</div>
							</div>
							<div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
								<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
									Cancel
								</button>
								<button
									type="submit"
									className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Save
								</button>
							</div>
						</form>
					</div>

					<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
						<div className="px-4 sm:px-0">
							<h2 className="text-base font-semibold leading-7 text-gray-900">Subscribe to events</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								Stay informed about important occurrences by subscribing to specific events. Receive notifications or trigger actions based on relevant events happening within your system or platform.
							</p>
						</div>

						<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
							<div className="px-4 py-6 sm:p-8">
								<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

								</div>
							</div>
							<div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
								<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
									Cancel
								</button>
								<button
									type="submit"
									className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>

			</div>
		</DashboardDefaultLayout>
	)
}



function PageHeading() {
	return (
		<div className="border-b border-gray-200 pb-5">
			<h3 className="text-base font-semibold leading-6 text-gray-900">Create new App</h3>
			<p className="mt-2 max-w-4xl text-sm text-gray-500">
				Empower users to build customized applications within your platform. Define settings, design, and functionality to bring their ideas to life
			</p>
		</div>
	)
}
