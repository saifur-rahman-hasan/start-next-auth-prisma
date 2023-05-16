import DashboardDefaultLayout from "@/components/layouts/dashboard/DashboardDefaultLayout";
import UserProfileCreateForm from "@/components/users/forms/UserProfileCreateForm";

export default function UserCreate(){
	return (
		<DashboardDefaultLayout>
			<UserProfileCreateForm />
		</DashboardDefaultLayout>
	)
}