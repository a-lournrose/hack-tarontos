import $api from "@/api/instance.ts";

interface ICompany {
    name: string;
    description: string;
    imageId: string;
}

export class CompaniesService {
    static async create(data: ICompany) {
        const response = await $api.post('/companies', data);
        return response.data;
    }

    static async patch(id: string, data: ICompany) {
        const response = await $api.patch(`/companies/${id}`, data);
        return response.data;
    }

    static async delete(id: string) {
        const response = await $api.delete(`/companies/${id}`);
        return response.data;
    }

    static async get() {
        const response = await $api.get('/companies');
        return response.data;
    }

    static async inviteRecruiter(companyId: string, userId: string) {
        const response = await $api.post(`/companies/invite_recruiter/${companyId}/?userId=${userId}`);
        return response.data;
    }

    static async deleteRecruiter(companyId: string, userId: string) {
        const response = await $api.delete(`/companies/invite_recruiter/${companyId}/?userId=${userId}`);
        return response.data;
    }
}