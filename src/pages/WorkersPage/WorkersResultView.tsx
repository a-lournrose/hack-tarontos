import SunImg from "@/assets/images/sun-workers.svg?react";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card.tsx";
import {CalendarDays} from "lucide-react";

export const WorkersResultView = () => {
    return (
        <div className="h-full w-full grid grid-cols-[228px_1fr_228px] gap-4">
            {/* Левый блок - фиксированная ширина 228px */}
            <div className="w-[228px] bg-gray-300 relative">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <div>
                            <SunImg/>
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 mt-[-50px]">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">@nextjs</h4>
                            <p className="text-sm">
                                The React Framework – created and maintained by @vercel.
                            </p>
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70"/>{" "}
                                <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                <div className='w-[228px] h-[332px] bg-green rounded-2'></div>
            </div>

            {/* Центральный блок - заполняет всю доступную ширину */}
            <div className="bg-gray-100 relative">
                <h1 className="font-angst font-normal text-[40px] text-center">Узнай свою совместимость с
                    пользователем</h1>
            </div>

            {/* Правый блок - фиксированная ширина 228px */}
            <div className="w-[228px] bg-gray-300 relative">
                Правый блок
            </div>
        </div>

    )
};