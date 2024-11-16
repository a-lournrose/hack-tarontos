import { FC } from "react";
import { Outlet } from "react-router-dom";
import {HeaderBlock} from "@/widgets/HeaderBlock.tsx";
import bgImage from "@/assets/bg/bg-layout-1.png";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";

export const MainLayout: FC = () => {
    return (
        <div className="h-screen w-full flex flex-col" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            {/* Header */}
            <div className="flex-none mb-[50px]">
                <HeaderBlock transparent/>
            </div>

            {/* Content */}
            <div className="flex-grow flex justify-center">
                <div
                    className="w-full max-w-[1200px] px-4"
                    style={{
                        margin: '0 auto',
                    }}
                >
                    <Outlet/>
                </div>
            </div>

            {/* Navigation */}
            <div
                className="flex-none flex items-center justify-center"
                style={{
                    height: '100px',
                    marginBottom: '20px'
                }}
            >
                <Tabs defaultValue='worker_worker'>
                    <TabsList className="text-center">
                        <TabsTrigger value="worker_worker">Сотрудник - Сотрудник</TabsTrigger>
                        <TabsTrigger value="worker_workers">Сотрудник - Сотрудники подразделения</TabsTrigger>
                        <TabsTrigger value="unit_unit">Подразделение - Подразделение</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </div>
    );
};