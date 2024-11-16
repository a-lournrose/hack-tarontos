import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"

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
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {AuthService} from "@/api/services/auth.service.ts";
import {useState} from "react";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8,{
        message: "Password must be at least 8 characters"
    }),
    email: z.string().email({
        message: "Invalid email address"
    }),
    role: z.literal('Administrator').or(z.literal('Recruiter')),
})

export function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            email: "",
            role: "Recruiter",
        },
    })

    const [error, setError] = useState<string | null>(null);
    const {register} = useAuth();
    const navigate = useNavigate();

    return (
        <Card className='p-[24px] w-[400px]'>
            <div className='mb-[16px]'>
                <h1 className='font-arial font-bold text-[16px] mb-[8px]'>РЕГИСТРАЦИЯ</h1>
                <div className='font-arial text-[11px] text-[#64748B]'>ЕСЛИ У ВАС УЖЕ ЕСТЬ АККАУНТ - ВОЙДИТЕ В СВОЙ АККАУНТ.</div>
                {error && <div className='text-red'>ПРОИЗОШЛА ОШИБКА С РЕГИСТРАЦИЕЙ</div>}
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[8px]">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ФИО</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>EMAIL</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
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
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='role'
                        render={({ field }) => (
                            <div>
                                <FormItem className="space-y-3">
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Recruiter" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                   РЕКРУТЕР
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Administrator" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    АДМИНИСТРАТОР
                                                </FormLabel>
                                            </FormItem>

                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>

                            </div>
                        )}
                    />
                    <div className='flex justify-center'>
                        <Button type="submit" variant="dark" className='mt-[16px]'>ЗАРЕГЕСТРИРОВАТЬСЯ</Button>
                    </div>
                </form>
            </Form>
        </Card>



    )
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await AuthService.register({
                email: values.email,
                password: values.password,
                role: values.role,
                name: values.username.split(' ')[0],
                surname: values.username.split(' ')[1],
                patronymic: values.username.split(' ')[2]
            })
            register()
            console.log(values)
            navigate('/')
        } catch(error) {
            setError(error instanceof Error? error.message : "Ошибка в регистрации");
        }
    }
}
