import SunImg from "@/assets/images/sun-workers.svg?react";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card.tsx";
import {CalendarDays} from "lucide-react";

type card = {
    id: number;
    name: string;
    goodPercent: number;
    meaning: string[]
    imageUrl: string;
}
export type compareResult = {
    cards: card[];
    resultCompareHard: number;
    magicComparePercent: number;
    magicCompareText: string;
}
export const WorkersResultView = ({compareData} : {compareData: compareResult | null}) => {

    return (
        <div className="h-full w-full grid grid-cols-[228px_1fr_228px] gap-4">
            {/* Левый блок - фиксированная ширина 228px */}
            <div className="w-[228px] relative flex flex-col justify-end">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <div className="absolute bottom-[332px]">
                            <SunImg className='mb-[53px]'/>
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 mt-[-85px]">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">@nextjs</h4>
                            <p className="text-sm">
                                The React Framework – created and maintained by @vercel.
                            </p>
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70"/>
                                <span className="text-xs text-muted-foreground">
                        Joined December 2021
                    </span>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                <div className="w-[228px] h-[332px] bg-green">
                    <img src={compareData?.cards[0].imageUrl} alt="Аркан"/>
                </div>
            </div>


            {/* Центральный блок - заполняет всю доступную ширину */}
            <div className="relative">
                <h1 className="font-angst font-normal text-[40px] text-center">
                    Узнай совместимость двух коллег
                </h1>
                <div className="flex justify-center">
                    <div className='text-center mt-5'>
                        <div className="w-[228px] h-[332px] bg-green">
                            <img src={compareData?.cards[1].imageUrl} alt="Аркан" className='block'/>
                        </div>
                        <div
                            className="border-2 border-black bg-white rounded-[55px] mt-[43px] py-[20px] px-[30px] font-angst text-black font-normal text-[64px] inline-block text-center">
                            {compareData?.resultCompareHard}%
                        </div>
                    </div>
                </div>
            </div>


            {/* Правый блок - фиксированная ширина 228px */}
            <div className="w-[228px] relative">
                <div className="w-[228px] h-[332px] bg-green">
                    <img src={compareData?.cards[2].imageUrl} alt="Аркан"/>
                </div>
                <SunImg className='mt-[53px]'/>
            </div>
        </div>

    )
};