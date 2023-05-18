import { EnvelopeIcon } from '@heroicons/react/20/solid'
import {useEffect, useState} from "react";
import {EyeIcon, EyeSlashIcon, KeyIcon} from "@heroicons/react/24/solid";
import FormInputPassword from "@/components/ui/form/FormInputPassword";
import Dump from "@/components/core/Dump";

export default function FormInputPasswordWithConfirmation({ label, name, value}) {

	const [password, setPassword] = useState(value || '')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [passwordConfirmed, setPasswordConfirmed] = useState(false)

	useEffect(()=>{
		setPasswordConfirmed(password === confirmPassword)
	}, [password, confirmPassword])

	return (
		<div className={`flex flex-col`}>

			<div className={`mb-4`}>
				<FormInputPassword
					label={label}
					name={name}
					onChange={setPassword}
				/>
			</div>

			<div className={`mb-4`}>
				<FormInputPassword
					label={`Confirm ${label}`}
					name={`confirm_${name}`}
					error={!passwordConfirmed ? 'Your password is not confirmed.' : null}
					onChange={setConfirmPassword}
				/>
			</div>
		</div>
	)
}
