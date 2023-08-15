"use client";

import React, { useState } from 'react'
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { HttpClient } from '@/lib/axios';
import { setAuthCredentials } from '@/utils/auth-utils';

const formSchema = z.object({
	email: z.string().email({ message: 'Email is invalid'}),
	password: z.string().min(8, { message: 'Password at least 8 character' }),
});

type LoginFormValue = z.infer<typeof formSchema>

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
	const router = useRouter();

	const form = useForm<LoginFormValue>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		}
	});

	const onSubmit = async (data: LoginFormValue) => {
		try {
			setLoading(true);
			
			// Login logical her
			await HttpClient.post('/login', data).then((res) => {
				const { token } = res as any;
				setAuthCredentials(token);
				router.push('/dashboard/home')
			});
			
		} catch (error) {
			console.log(error);
			setLoading(false);
		} finally {
			setLoading(false)
		}
	};
  return (
	<>
		<Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full"
                >
                    <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
									<Input disabled={loading} placeholder="Email" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
					<FormField 
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type='password' disabled={loading} placeholder="Password" {...field}/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button disabled={loading}
						className="ml-auto"
						type="submit"
					>
						Login
					</Button>
					{/* <div className='mx-auto flex w-full items-center justify-evenly
						before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
						or
					</div> */}
                </form>
            </Form>
	</>
  )
}

export default LoginForm