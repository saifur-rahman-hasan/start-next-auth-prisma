import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import SignupForm from "@/components/auth/SignUpForm";

export default function Signup() {
	return (
		<div className={`min-h-screen h-full bg-gray-50`}>
			<div className="h-full">
				<SignupForm />
			</div>
		</div>
	)
}


export async function getServerSideProps(context) {
	const session = await getServerSession(context.req, context.res, authOptions);

	if (session) {
		return { redirect: { destination: "/" } };
	}
	return {
		props: {}
	}
}