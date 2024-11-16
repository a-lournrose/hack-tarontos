import {WorkersInitView} from "@/pages/WorkersPage/WorkersInitView.tsx";
import {useEffect, useState} from "react";
import {WorkersResultView} from "@/pages/WorkersPage/WorkersResultView.tsx";

const WorkersPage = () => {
    const [compareData, setCompareData] = useState({});
    const [resultStatus, setResultStatus] = useState<boolean>(false);

    useEffect(() => {
        if (compareData && Array.isArray(compareData) && compareData.length) {
            setResultStatus(true);
        }
    }, [compareData]);

    return (
        <>
            {resultStatus ? <WorkersResultView compareData={compareData}/> : <WorkersInitView setCompareData={setCompareData}/>}
        </>
    );
};

export default WorkersPage;