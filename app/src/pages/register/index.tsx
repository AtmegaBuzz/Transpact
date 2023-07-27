import React, { useState } from "react"

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import MainLayout from "@/components/layouts/main-layout";


import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Link from "next/link"


interface RegisterBidderProps {}

const formSchema = z.object({
    first_name: z.string().min(1).max(50),
    last_name: z.string().min(1).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(18),
    confirmPassword: z.string().min(8).max(18),
    acceptedTerms:z.boolean().default(false),
    walletAddress: z.string().min(20).max(100),
    location: z.string().min(10).max(500),
    driving_liscense: z.string().min(10).max(20),
    files: z.any(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }).refine((data) => data.acceptedTerms === true, {
    path: ["acceptedTerms"]
  });

type FormData = z.infer<typeof formSchema>;



const RegisterUser: React.FC<RegisterBidderProps> = ({}) => {

    // const [pageNo,setPageNo] = useState<number>(1);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmPassword: "",
            walletAddress: "",
            location: "",
        },
      });    
      
    async function onSubmit(values: FormData) {
        // form.register(values);
    }

    // if (pageNo===1){

        return(
            <MainLayout>
                <section className="flex w-[100vw] items-center justify-center py-10">
                    <div className="flex h-[95%] w-full flex-col items-center rounded-xl border-[1px] border-gray-300 py-10 shadow-md md:w-1/2">
                        <div className="flex w-full justify-center">
                            <p className="text-3xl font-bold">Sign up to find contracts</p>
                        </div>
    
                        <div className="mt-10 flex w-[65%] flex-col items-center">
                            <div className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md border-[1px] border-black transition-transform active:scale-95 dark:border-white">
                                <FaGoogle className="h-5 w-5"/>
                                <p className="ml-3">Sign in with google</p>
                            </div>
                        </div>
    
                        <div className="mt-5 flex w-[65%] flex-col items-center">
                            <div className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md border-[1px] border-black transition-transform active:scale-95 dark:border-white">
                                <Icons.twitter className="h-6 w-6"/>
                                <p className="ml-3">Sign in with twitter</p>
                            </div>
                        </div>
    
                        <div className="mt-5 flex w-[65%] flex-col items-center">
                            <div className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md border-[1px] border-black transition-transform active:scale-95 dark:border-white">
                                <Icons.gitHub className="h-6 w-6"/>
                                <p className="ml-3">Sign in with github</p>
                            </div>
                        </div>
    
                        <div className="my-4 flex w-[65%] items-center">
                            <div className="h-px w-[50%] bg-black dark:bg-white"></div>
                            <p className="mx-4">Or</p>
                            <div className="h-px w-[50%] bg-black dark:bg-white"></div>
                        </div>
    
                        <div className="w-[65%] flex-col justify-center">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                    <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="email@xyz.com" {...field}/>
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
                                                <Input placeholder="" type="password" {...field}/>
                                            </FormControl>
                                            <FormDescription>
                                                Password should be between 8 - 17 characters.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
    
                                    <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" type="password" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
    
                                    <FormField
                                    control={form.control}
                                    name="acceptedTerms"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row space-x-3 space-y-0 py-5">
                                        <FormControl>
                                            <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                Accept Transpact Terms & Conditions
                                            </FormLabel>
                                            <FormDescription>
                                                You can manage your mobile notifications in the{" "}
                                                <Link href="/examples/forms">mobile settings</Link> page.
                                            </FormDescription>
                                            <FormMessage />
                                        </div>
                                        </FormItem>
                                    )}
                                    />
                                
                                    <Button type="submit" className="w-full">Submit</Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </section>
            </MainLayout>
        )
    
    // }

    // else if (pageNo===2){
    //     return(
    //         <MainLayout>
    //             <section className="w-[100vw] py-10 flex justify-center items-center">
    //                 <div className="w-full md:w-1/2 py-10 h-[95%] flex flex-col items-center shadow-md border-[1px] border-gray-300 rounded-xl">
    //                     <div className="w-full flex justify-center">
    //                         <p className="text-3xl font-bold">Sign up to find contracts</p>
    //                     </div>

    //                     <div className="w-[65%] flex-col justify-center">
    //                         <Form {...form}>
    //                             <form onSubmit={form.handleSubmit(()=>setPageNo(2))} className="space-y-5">
    //                                 <FormField
    //                                 control={form.control}
    //                                 name="email"
    //                                 render={({ field }) => (
    //                                     <FormItem>
    //                                         <FormLabel>Email</FormLabel>
    //                                         <FormControl>
    //                                             <Input placeholder="email@xyz.com" {...field}/>
    //                                         </FormControl>
    //                                         <FormMessage />
    //                                     </FormItem>
    //                                 )}
    //                                 />
    
    //                                 <FormField
    //                                 control={form.control}
    //                                 name="password"
    //                                 render={({ field }) => (
    //                                     <FormItem>
    //                                         <FormLabel>Password</FormLabel>
    //                                         <FormControl>
    //                                             <Input placeholder="" type="password" {...field}/>
    //                                         </FormControl>
    //                                         <FormDescription>
    //                                             Password should be between 8 - 17 characters.
    //                                         </FormDescription>
    //                                         <FormMessage />
    //                                     </FormItem>
    //                                 )}
    //                                 />
    
    //                                 <FormField
    //                                 control={form.control}
    //                                 name="confirmPassword"
    //                                 render={({ field }) => (
    //                                     <FormItem>
    //                                         <FormLabel>Confirm Password</FormLabel>
    //                                         <FormControl>
    //                                             <Input placeholder="" type="password" {...field}/>
    //                                         </FormControl>
    //                                         <FormMessage />
    //                                     </FormItem>
    //                                 )}
    //                                 />
    
    //                                 <FormField
    //                                 control={form.control}
    //                                 name="acceptedTerms"
    //                                 render={({ field }) => (
    //                                     <FormItem className="flex flex-row space-x-3 space-y-0 py-5">
    //                                     <FormControl>
    //                                         <Checkbox
    //                                         checked={field.value}
    //                                         onCheckedChange={field.onChange}
    //                                         />
    //                                     </FormControl>
    //                                     <div className="space-y-1 leading-none">
    //                                         <FormLabel>
    //                                         Accept Transpact Terms & Conditions
    //                                         </FormLabel>
    //                                         <FormDescription>
    //                                         You can manage your mobile notifications in the{" "}
    //                                         <Link href="/examples/forms">mobile settings</Link> page.
    //                                         </FormDescription>
    //                                     </div>
    //                                     </FormItem>
    //                                 )}
    //                                 />
                                
    //                                 <Button type="submit" className="w-full">Submit</Button>
    //                             </form>
    //                         </Form>
    //                     </div>
    //                 </div>
    //             </section>
    //         </MainLayout>
    //     )
    // }

}


export default RegisterUser;