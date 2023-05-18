import DashboardDefaultLayout from "@/components/layouts/dashboard/DashboardDefaultLayout";
import AccountSettings from "@/components/users/account/AccountSettings";
import prisma from "@/lib/prisma";
import Dump from "@/components/core/Dump";
import UserProfileEdit from "@/components/users/profile/UserProfileEdit";

export default function UserProfile({ profileUser }){
	return (
		<DashboardDefaultLayout>
			<Dump data={{profileUser}} />

			<div className={`p-10`}>
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