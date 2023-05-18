import DashboardDefaultLayout from "@/components/layouts/dashboard/DashboardDefaultLayout";
import UsersDataTable from "@/components/users/datatable/UsersDataTable";
import prisma from "@/lib/prisma";

export default function Users({ users }){
	return (
		<DashboardDefaultLayout>
			<div className={`p-8`}>
				<UsersDataTable data={users} />
			</div>
		</DashboardDefaultLayout>
	)
}

export async function getServerSideProps(context){

	const users = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			email: true,
			image: true,
			createdAt: true,
		},
	});

	const serializedUsers = users.map((user) => ({
		id: user.id,
		name: user.name,
		email: user.email,
		image: user?.image || 'www.gravatar.com/avatar',
		createdAt: user.createdAt.toISOString(), // Convert createdAt to a serializable format
	}));

	return {
		props: {
			users: serializedUsers || [],
		},
	};
}