import DashboardDefaultLayout from "@/components/layouts/dashboard/DashboardDefaultLayout";
import AccountSettings from "@/components/users/account/AccountSettings";
import prisma from "@/lib/prisma";

export default function UserProfile({ profileUser }){
	return (
		<DashboardDefaultLayout>
			<AccountSettings profileUser={profileUser} />
		</DashboardDefaultLayout>
	)
}

export async function getServerSideProps(context){
	const { req, res } = context
	const queryUserId = req?.query?.user_id
	console.log(`req.query`)
	console.log(req.query)

	// if(!queryUserId){
	// 	throw new Error("Failed")
	// }

	const user = await prisma.user.findFirstOrThrow({
		where: { id: queryUserId },
		select: {
			id: true,
			name: true,
			email: true,
			image: true,
			createdAt: true,
		},
	});

	const serializedUsers = [user].map((user) => ({
		id: user.id,
		name: user.name,
		email: user.email,
		image: user?.image || 'www.gravatar.com/avatar',
		createdAt: user.createdAt.toISOString(), // Convert createdAt to a serializable format
	}));

	return {
		props: {
			profileUser: serializedUsers[0] || {},
		},
	};
}