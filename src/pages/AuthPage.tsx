import {ProfileForm as RegistrationForm} from "@/features/RegistrationForm.tsx"
import {ProfileForm as LoginForm} from "@/features/LoginForm.tsx"
import {HeaderBlock} from "@/widgets/HeaderBlock.tsx";
import CatImg from "@/assets/images/cat-logo.svg?react"
import LoginCard from "@/assets/images/login-card.png"
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
export const AuthPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    const changeForms = () => {
        if(isRegister){
            setIsRegister(false);
        }
        else {
            setIsRegister(true);
        }
    }
    return (
            <div className='h-[100vh] w-full bg-orange overflow-hidden bg-[url("@/assets/images/bg-login-register.png")]'>
                <HeaderBlock className='relative z-10'/>
                <div className='relative bg-white mt-[110px] ml-[360px] mr-[360px] rounded-[20px] flex h-[720px]'>
                    <div className='mt-[108px] ml-[98px] mb-[228px] mr-[112px]'>
                        <div className='flex justify-between mb-[20px]'>
                            <CatImg/>

                            <Button onClick={() => changeForms()} variant={"outlineDark"} size={"sm"} className='self-end'>
                                {isRegister? <div>ВХОД</div> : <div>РЕГИСТРАЦИЯ</div>}
                            </Button>
                        </div>
                        {isRegister? <RegistrationForm/> : <LoginForm/>}

                    </div>
                    <img src={LoginCard} alt="img" className='h-[638px] self-center'/>
                </div>
            </div>
    );
};
