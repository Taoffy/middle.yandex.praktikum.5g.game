import { api } from '../core/api';

export type LeaderboardObject = {
    name: string;
    score: number;
    avatar?: string;
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
export type LeaderboardResultData = [{
    data: LeaderboardObject;
}]

class Leaderboard {
    async addToLeaderboard(data: LeaderboardRequestData) {
        const response = await api.post('/leaderboard', data, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.data);
        return response;
    }
    async getLeaderboard() {
        const data = {
            ratingFieldName: 'score',
            cursor: 0,
            limit: 5
        }
        const response = await api.post('/leaderboard/5g', data, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.data);
        return response;
    }
}
export default new Leaderboard();
