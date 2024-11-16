import $api from "@/api/instance.ts";

interface IWorker {
    email: string,
    name: string,
    surname: string,
    patronymic: string,
    isLeader: boolean,
    isCandidate: boolean,
    unitId: number
}

export class WorkersService {
    static async getOne(id: string) {
        const response = await $api.get(`/workers/${id}`);
        return response.data;
    }

    static async getAll(companyId: number = 1) {
        return $api.get(`/workers?companyId=${companyId}`);
    }

    static async patch(id: string) {
        const response = await $api.patch(`/workers/${id}`);
        return response.data;
    }

    static async delete(id: string) {
        const response = await $api.delete(`/workers/${id}`);
        return response.data;
    }

    static async create(data: IWorker) {
        const response = await $api.post('/workers', data);
        return response.data;
    }

    static async getWorkerInfo(id: string) {
        const response = await $api.post(`/workers/worker/${id}`);
        return response.data;
    }


}