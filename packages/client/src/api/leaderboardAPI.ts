import { api } from '../core/api';

export type LeaderboardObject = {
    name: string;
    score: number;
    avatar: string;
}
export type LeaderboardRequestData = {
    data: LeaderboardObject;
    ratingFieldName: string;
    teamName: string;
}
export type LeaderboardListData = {
    ratingFieldName: string;
    cursor: number;
    limit: number;
}

class Leaderboard {
    async addToLeaderboard(data: LeaderboardRequestData) {
        const response = await api.post('/leaderboard', data, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.data);
        return response;
    }
    async getLeaderboard(data: LeaderboardListData) {
        const response = await api.post('/leaderboard/5g', data, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.data);
        console.log('response', response)
        return response;
    }
}
export default new Leaderboard();
