import { useSession, signIn, signOut } from "next-auth/react"
import Dump from "/components/core/Dump";

export default function AccessToken() {
	const { data } = useSession()
	console.log(data)
	return <Dump data={{data}} />
}