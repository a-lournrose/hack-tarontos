import {FC} from "react";
import Logo from "@/assets/images/logo.svg?react";
import {User} from "lucide-react";
import HatImg from "@/assets/images/hat.svg?react";
import {cn} from "@/lib/utils.ts";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Button} from "@/components/ui/button.tsx";
import {useAuth} from "@/context/AuthContext.tsx";
import {useNavigate} from "react-router-dom";

export const HeaderBlock: FC<{ transparent?: boolean, className?: string }> = ({className}) => {
    const {logout, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    return (
        <div className={cn('h-[66px] w-full bg-white rounded-br-[32px] rounded-bl-[32px]', className)}>
            <div className='w-[1200px] h-[66px] mx-auto items-center flex justify-between relative'>
                <div className='relative'>
                    <Logo/>
                </div>
                <div className='absolute left-0 right-0 bottom-0 top-[14px]'>
                    <div onClick={() => navigate('/')}
                        className="w-[112px] h-[101px] bg-white rounded-full shadow-inner mb-[-70px] flex items-center justify-center m-auto
                        hover:bg-gray-200">
                        <HatImg className='ml-[-13px]' />
                    </div>
                </div>
                <div className='relative'>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <User size={55} strokeWidth={1}
                                  className='hover:ring-1 hover:ring-gray-900 hover:rounded-full transition-all duration-300 p-2 cursor-pointer z-10'/>
                        </HoverCardTrigger>
                        <HoverCardContent className='flex justify-center'>
                            {isAuthenticated ?
                                <Button variant={"dark"} onClick={logout}>Выйти</Button> :
                                <Button variant={'dark'} onClick={() => navigate('/auth')}>Войти</Button>
                            }
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>
        </div>
    )
}