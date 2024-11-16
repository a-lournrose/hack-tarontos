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
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Card} from "@/components/ui/card.tsx";
import {useAuth} from "@/context/AuthContext.tsx";
import {useNavigate} from "react-router-dom";

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

    const {register} = useAuth();
    const navigate = useNavigate();

    const handleCheckboxChange = (option: "Administrator" | "Recruiter") => {
        if (option === "Recruiter") {
            form.setValue("role", "Administrator");
        } else {
            form.setValue("role", "Recruiter");
        }
    };
    return (
        <Card className='p-[24px] w-[400px]'>
            <div className='mb-[16px]'>
                <h1 className='font-arial font-bold text-[16px] mb-[8px]'>РЕГИСТРАЦИЯ</h1>
                <div className='font-arial text-[11px] text-[#64748B]'>ЕСЛИ У ВАС УЖЕ ЕСТЬ АККАУНТ - ВОЙДИТЕ В СВОЙ АККАУНТ.</div>
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
                                <FormItem onClick={() => handleCheckboxChange(form.watch("role"))} className='flex gap-[3px] items-center mb-[8px]'>
                                        <FormControl>
                                            <Checkbox
                                                checked={form.watch("role") == "Recruiter"}
                                                {...field}

                                                id="recruiter"
                                            />
                                        </FormControl>
                                        <FormLabel>РЕКРУТЕР</FormLabel>
                                </FormItem>
                                <FormItem onClick={() => handleCheckboxChange(form.watch("role"))} className='flex gap-[3px] items-center'>
                                    <FormControl>
                                        <Checkbox
                                            checked={form.watch("role") == "Administrator"}
                                            {...field}

                                            id="administrator"
                                        />
                                    </FormControl>
                                    <FormLabel>АДМИНИСТРАТОР</FormLabel>
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
    function onSubmit(values: z.infer<typeof formSchema>) {
        register(
            {email: values.email,
            password: values.password,
            role: values.role,
            name: values.username.split(' ')[0],
            surname: values.username.split(' ')[1],
            patronymic: values.username.split(' ')[2]
            })
        console.log(values)
        navigate('/')
    }
}
