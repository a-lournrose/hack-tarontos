import SunImg from "@/assets/images/sun-workers.svg?react";
import {Button} from "@/components/ui/button.tsx";
import SelectAdapter from "@/shared/SelectAdapter.tsx";
import {FC, useEffect, useMemo, useState} from "react";
import {WorkersService} from "@/api/services/workers.service.ts";
import {CardsService} from "@/api/services/cards.service.ts";

interface WorkersInitViewProps {
    setCompareData: (data: never) => void;
}

export const WorkersInitView: FC<WorkersInitViewProps> = ({setCompareData}) => {
    const [workersList, setWorkersList] = useState([]);
    const [selectedWorkers, setSelectedWorkers] = useState<{ worker1: string; worker2: string }>({
        worker1: '',
        worker2: '',
    });

    const fetchWorkersList = async () => {
        try {
            const {data} = await WorkersService.getAll();
            setWorkersList(data);
        } catch (e) {
            console.log(e);
        }
    }

    const workersItems = useMemo(() => {
        return (workersList as { id: number; surname: string }[]).map(worker => ({
            value: String(worker.id),
            label: worker.surname
        }));
    }, [workersList]);

    useEffect(() => {
        fetchWorkersList();
    }, []);

    const counting = async () => {
        try {
            const {data} = await CardsService.getCardsCompare(Number(selectedWorkers.worker1), Number(selectedWorkers.worker2))
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setCompareData(data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="h-full w-full grid grid-cols-[228px_1fr_228px] gap-4">
            {/* Левый блок - фиксированная ширина 228px */}
            <div className="w-[228px] relative">
                <div className="absolute top-20 left-0 w-full h-auto">
                    <SunImg/>
                    <div className='mt-[-40px] relative z-50'>
                        <SelectAdapter
                            onChange={value =>
                                setSelectedWorkers(prev => ({
                                    ...prev,
                                    worker1: typeof value === 'string' ? value : String(value), // Укажите, какое поле обновлять
                                }))
                            }
                            items={workersItems}
                            label="Сотрудники"
                            placeholder="Выберите сотрудника"
                        />
                    </div>
                </div>
            </div>

            {/* Центральный блок - заполняет всю доступную ширину */}
            <div className="relative">
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-5%] w-[100%] h-auto">
                    <div
                        className="w-[70%] h-[173px] mx-auto rounded-[16px] flex items-center justify-center">
                        <Button variant='dark' onClick={counting}>Начать расчет</Button>
                    </div>
                </div>
                <h1 className="font-angst font-normal text-[40px] text-center">Узнай совместимость двух коллег</h1>
            </div>

            {/* Правый блок - фиксированная ширина 228px */}
            <div className="w-[228px] relative">
                <div className="absolute bottom-0 left-0 w-full h-auto">
                    <SunImg/>
                    <div className='mt-[-40px] relative z-50'>
                        <SelectAdapter
                            onChange={value =>
                                setSelectedWorkers(prev => ({
                                    ...prev,
                                    worker2: typeof value === 'string' ? value : String(value), // Укажите, какое поле обновлять
                                }))
                            }
                            items={workersItems}
                            label="Сотрудники"
                            placeholder="Выберите сотрудника"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}