import DashboardDefaultLayout from "@/components/layouts/dashboard/DashboardDefaultLayout";
import UsersDataTable from "@/components/users/datatable/UsersDataTable";

export default function Users(){
	return (
		<DashboardDefaultLayout>
			<UsersDataTable />
		</DashboardDefaultLayout>
	)
}