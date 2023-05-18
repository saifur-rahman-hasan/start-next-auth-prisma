import DashboardDefaultLayout from "@/components/layouts/dashboard/DashboardDefaultLayout";
import prisma from "@/lib/prisma";
import UserProfileEdit from "@/components/users/profile/UserProfileEdit";

export default function UserProfile({ profileUser }){
	return (
		<DashboardDefaultLayout>
			<div className={`p-8`}>
				<UserProfileEdit profileUser={profileUser} />
			</div>
		</DashboardDefaultLayout>
	)
}

export async function getServerSideProps(context){
	const { user_id } = context?.query

	const user = await prisma.user.findFirstOrThrow({
		where: { id: parseInt(user_id) },
		include: {
			roles: true
		}
	});

	return {
		props: {
			profileUser: JSON.parse(JSON.stringify(user || {})),
		},
	};
}