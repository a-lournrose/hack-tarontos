import $api from "@/api/instance.ts";

export class CardsService {
    static getCards() {
        return $api.get('/cards');
    }

    static getCardsCompare(company1Id: number, company2Id: number) {
        return $api.get(`/cards/compare?workerId1=${company1Id}&workerId2=${company2Id}`);
    }
}