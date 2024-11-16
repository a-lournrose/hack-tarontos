import {HeaderBlock} from "@/widgets/HeaderBlock.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FC} from "react";
import {cn} from "@/lib/utils.ts";
import OkIcon from "@/assets/icons/ok.svg?react";
import RedditIcon from "@/assets/icons/reddit.svg?react";
import TelegramIcon from "@/assets/icons/telegram.svg?react";
import VKIcon from "@/assets/icons/vk.svg?react";
import YouTubeIcon from "@/assets/icons/youtube.svg?react";
import BigSun from "@/assets/images/sun-orange.svg?react";
import SmallSun from "@/assets/images/sun-black.svg?react";
import RedStar from "@/assets/images/red-star.svg?react";

const TextBlock: FC<{ title: string; text: string }> = ({title, text}) => {
    return (
        <div className={cn('w-[40%]')}>
            <div className='font-bold text-2xl text-orange text-center uppercase'>{title}</div>
            <div className='text-center font-normal text-[20px] uppercase mt-4'>{text}</div>
        </div>
    )
}

export const HomePage = () => {
    return (
        <div>
            <div className='h-full w-full bg-green overflow-hidden'>
                <HeaderBlock className='relative z-10'/>
                <div className='w-[1200px] mx-auto relative'>
                    <BigSun
                        className='absolute left-[-50%] top-[-50%] transform translate-x-[10%] translate-y-0 z-0 animate-pulseSun'/>
                    <SmallSun className='absolute right-[-50%] top-[-30%] transform translate-x-[-70%] opacity-50'/>

                    <div className='flex justify-center mt-52 relative z-10'>
                        <h1 className="font-angst font-normal text-8xl text-white leading-[134.4px]">Подбор по звёздам
                            — <br/> гармония в
                            команде</h1>
                    </div>
                    <div className='flex justify-center mt-7'>
                        <Button>НАЧНЕМ!</Button>
                    </div>
                    <div
                        className="flex items-center px-[22px] py-[5px] rounded-[100px] bg-white max-w-max mx-auto mt-40 relative z-10">
                        <div className="text-black font-normal text-sm flex items-center space-x-4">
                            <Button variant="ghost">О НАЙМИКС</Button>
                            <Button variant="ghost">СОВМЕСТИМОСТЬ</Button>
                            <Button variant="ghost">КАК ЭТО РАБОТАЕТ</Button>
                        </div>
                        {/*<Button variant="outline">ПРОФИЛЬ</Button>*/}
                    </div>
                </div>
                <div className='mt-[95px] h-[168px] w-full relative overflow-hidden'>
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 bg-white rounded-tl-[100%] rounded-tr-[100%] scale-[1.05]"></div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-[-50px] z-10 relative'>
                <RedStar/>
            </div>
            <div className='w-[1200px] mx-auto mt-20'>
                <div className='flex justify-start'>
                    <TextBlock title='1. Регистрируйся'
                               text='Создай бесплатный аккаунт на сайте, указав свою профессию, интересы, ценности и основные требования к коллегам.'/>
                </div>
                <div className='flex justify-end mt-24'>
                    <TextBlock title='2. Проходи тест'
                               text='Ответь на вопросы теста, чтобы подробно охарактеризовать свой стиль работы и предпочтения в коллективе. '/>
                </div>
                <div className='flex justify-start mt-24'>
                    <TextBlock title='3. Получи результат'
                               text='После прохождения теста, сайт предложит тебе список пользователей, с которыми ты с большей вероятностью будешь хорошо ладить. '/>
                </div>
            </div>
            <div className='h-72 bg-[#F4F6F6] w-full mt-72 flex justify-center'>
                <div className='flex items-center gap-10 mt-[98px]'>
                    <TelegramIcon className='cursor-pointer'/>
                    <VKIcon className='cursor-pointer'/>
                    <OkIcon className='cursor-pointer'/>
                    <YouTubeIcon className='cursor-pointer'/>
                    <RedditIcon className='cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}