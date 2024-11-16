import $api from "@/api/instance.ts";

export class UserService {
    static async getMe() {
        const response = await $api.get('/user/me');
        return response.data;
    }
}