import { Inter } from 'next/font/google'
import LoginBtn from "/components/auth/login-btn";
import AccessToken from "/components/auth/accessToken";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import DashboardDefaultLayout from "@/components/layouts/dashboard/DashboardDefaultLayout";
import Link from "next/link";

export default function Home() {
    return (
        <DashboardDefaultLayout>

            <div className={`p-8`}>
                <div className={`my-4`}>
                    <LoginBtn />
                </div>


                <div className={`my-4`}>
                    <AccessToken />
                </div>
            </div>

        </DashboardDefaultLayout>
    )
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (!session) {
        return { redirect: { destination: "/auth/signin" } };
    }

    return {
        props: {},
    }
}


