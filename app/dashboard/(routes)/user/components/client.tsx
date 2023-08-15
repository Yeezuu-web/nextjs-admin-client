"use client";

import { useParams, useRouter } from "next/navigation";

import { Heading } from '@/components/heanding'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { UserColumn, columns } from "./column";

interface UserClientProps {

}

const UserClient = () => {
	const router = useRouter();
    const params = useParams();
	const data: UserColumn[] = [
		{
			id: '1',
			name: 'Piseth',
			email: 'admin@admin.com',
			createdAt: '12-29-1999'
		},
		{
			id: '2',
			name: 'Piseth',
			email: 'admin@admin.com',
			createdAt: '12-29-1999'
		}
	]
	return (
	<>
		<div className='flex items-center justify-between'>
			<Heading 
				title={`User (0)`}
				description="Manage users for your application."
			/>
			<Button onClick={() => router.push(`/dashboard/user/add-user`)}>
					<Plus className="h-4 w-4"/>
					Add New
				</Button>
		</div>
		<DataTable data={data} columns={columns} searchKey="name"/>
		<Separator className="mt-4"/>
		{/* <Heading title="API" description="API called for Billboards" />
        <Separator /> */}
	</>
  )
}

export default UserClient