import $api from "@/api/instance.ts";

interface IUnit {
    name: string;
    companyId: number;
}

export class UnitsService {
    static async create(data: IUnit) {
        const response = await $api.post('/units', data);
        return response.data;
    }

    static async patch(id: string, data: IUnit) {
        const response = await $api.patch(`/units/${id}`, data);
        return response.data;
    }

    static async delete(id: string) {
        const response = await $api.delete(`/units/${id}`);
        return response.data;
    }

    static async get() {
        const response = await $api.get('/units');
        return response.data;
    }

    static async getWorkersForUnit(unitId: string) {
        const response = await $api.get(`/units/${unitId}/workers`);
        return response.data;
    }

    static async getUnitsForCompany(companyId: string) {
        const response = await $api.get(`/units/${companyId}`);
        return response.data;
    }
}