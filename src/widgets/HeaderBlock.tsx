import {FC} from "react";
import Logo from "@/assets/images/logo.svg?react";
import {User} from "lucide-react";
import HatImg from "@/assets/images/hat.svg?react";
import {cn} from "@/lib/utils.ts";

export const HeaderBlock: FC<{ transparent?: boolean, className?: string }> = ({className, transparent}) => {
    return (
        <div className={cn('h-[66px] w-full rounded-br-[32px] rounded-bl-[32px]', transparent ? 'bg-transparent' : 'bg-white', className)}>
            <div className='w-[1200px] h-[66px] mx-auto items-center flex justify-between relative'>
                <div>
                    <Logo/>
                </div>
                <div className='absolute left-0 right-0 bottom-0 top-[14px]'>
                    <div
                        className="w-[112px] h-[101px] bg-white rounded-full shadow-inner mb-[-70px] flex items-center justify-center m-auto">
                        <HatImg className='ml-[-13px]'/>
                    </div>
                </div>
                <div>
                    <User size={55} strokeWidth={1}
                          className='hover:ring-1 hover:ring-gray-900 hover:rounded-full transition-all duration-300 p-2 cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}