import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button.tsx"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form.tsx"
import { Input } from "@/components/ui/input.tsx"
import {Card} from "@/components/ui/card.tsx";
import {useAuth} from "@/context/AuthContext.tsx";
import {useNavigate} from "react-router-dom";

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address"
    }),
    password: z.string().min(8,{
        message: "Password must be at least 8 characters"
    }),
})

export function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const {login} = useAuth();
    const navigate = useNavigate();

    return (
        <Card className='p-[24px] w-[400px]'>
            <div className='mb-[16px]'>
                <h1 className='font-arial font-bold text-[16px] mb-[8px]'>ВХОД</h1>
                <div className='font-arial text-[12px] text-[#64748B]'>ЕСЛИ У ВАС НЕТ АККАУНТА - ПРОЙДИТЕ РЕГИСТРАЦИЮ.</div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[8px]">
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>EMAIL</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ПАРОЛЬ</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className='flex justify-center'>
                        <Button type="submit" variant="dark" className='mt-[16px]'>ВОЙТИ</Button>
                    </div>
                </form>
            </Form>
        </Card>


    )
    async function onSubmit(values: z.infer<typeof formSchema>) {
        login({email: values.email, password: values.password});
        navigate('/')
    }
}
