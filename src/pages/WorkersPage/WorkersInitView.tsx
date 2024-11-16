import SunImg from "@/assets/images/sun-workers.svg?react";
import {Button} from "@/components/ui/button.tsx";
import SelectAdapter from "@/shared/SelectAdapter.tsx";

const items = [
    {value: 'apple', label: 'Apple'},
    {value: 'banana', label: 'Banana'},
    {value: 'blueberry', label: 'Blueberry'},
    {value: 'grapes', label: 'Grapes'},
    {value: 'pineapple', label: 'Pineapple'},
];

export const WorkersInitView = () => {
    return (
        <div className="h-full w-full grid grid-cols-[228px_1fr_228px] gap-4">
            {/* Левый блок - фиксированная ширина 228px */}
            <div className="w-[228px] relative">
                <div className="absolute top-20 left-0 w-full h-auto">
                    <SunImg/>
                    <div className='mt-[-40px] relative z-50'>
                        <SelectAdapter
                            items={items}
                            label="Fruits"
                            placeholder="Select a fruit"
                        />
                    </div>
                </div>
            </div>

            {/* Центральный блок - заполняет всю доступную ширину */}
            <div className="relative">
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-5%] w-[100%] h-auto">
                    <div
                        className="w-[70%] h-[173px] bg-orange bg-opacity-85 mx-auto rounded-[16px] flex items-center justify-center">
                        <Button variant='dark'>Начать расчет</Button>
                    </div>
                </div>
                <h1 className="font-angst font-normal text-[40px] text-center">Узнай свою совместимость с
                    пользователем</h1>
            </div>

            {/* Правый блок - фиксированная ширина 228px */}
            <div className="w-[228px] relative">
                <div className="absolute bottom-0 left-0 w-full h-auto">
                    <SunImg/>
                    <div className='mt-[-40px] relative z-50'>
                        <SelectAdapter
                            items={items}
                            label="Fruits"
                            placeholder="Select a fruit"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}