import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function ProfileImageSelector({ profileUser }) {
	const [selectedImage, setSelectedImage] = useState(null);
	const [isUploading, setIsUploading] = useState(false);
	const [uploadProgress, setUploadProgress] = useState(0);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onload = () => {
			setSelectedImage(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleUpload = () => {
		setIsUploading(true);

		// Simulating image upload progress
		const interval = setInterval(() => {
			setUploadProgress((prevProgress) => {
				if (prevProgress < 100) {
					return prevProgress + 10;
				} else {
					clearInterval(interval);
					setIsUploading(false);
					setSelectedImage(null);
					return 0;
				}
			});
		}, 500);
	};

	const handleCancel = () => {
		setSelectedImage(null);
		setUploadProgress(0);
		setIsUploading(false);
	};

	return (
		<div className="col-span-full">
			<label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
				Photo
			</label>
			<div className="mt-2 flex items-center gap-x-3">
				{!selectedImage && !profileUser?.image && (
					<UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
				)}

				{(selectedImage || profileUser?.image) && (
					<div className="relative">
						<img
							src={selectedImage || profileUser?.image}
							className="h-12 w-12 text-gray-300 rounded-full ring-4 ring-indigo-500 ring-offset-1"
							alt={`${profileUser?.name}'s profile photo`}
						/>
					</div>
				)}

				<label
					htmlFor="file-upload"
					className="rounded-md cursor-pointer bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
				>
					<span>Change</span>
					<input
						id="file-upload"
						name="file-upload"
						type="file"
						className="sr-only"
						onChange={handleImageChange}
					/>
				</label>

				{selectedImage && (
					<div>
						{isUploading && (
							<>
								<p>Uploading...</p>
								<div className="w-full h-2 bg-gray-200 rounded-full mt-2">
									<div
										className="h-full bg-indigo-500 rounded-full"
										style={{width: `${uploadProgress}%`}}
									></div>
								</div>
							</>
						)}

						{
							!isUploading && selectedImage?.length && (
								<>
									<button
										className="rounded-md cursor-pointer bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
										onClick={handleUpload}
									>
										Upload
									</button>
									<button
										className="rounded-md cursor-pointer bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
										onClick={handleCancel}
									>
										Cancel
									</button>
								</>
							)
						}
					</div>
				)}
			</div>
		</div>
	);
}

export default ProfileImageSelector;
