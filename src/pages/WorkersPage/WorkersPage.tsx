import {WorkersInitView} from "@/pages/WorkersPage/WorkersInitView.tsx";
import {useState} from "react";
import {WorkersResultView} from "@/pages/WorkersPage/WorkersResultView.tsx";

const WorkersPage = () => {
    const [resultStatus] = useState<boolean>(true);
    return (
        <>
            {resultStatus ? <WorkersResultView/> : <WorkersInitView/>}
        </>
    );
};

export default WorkersPage;