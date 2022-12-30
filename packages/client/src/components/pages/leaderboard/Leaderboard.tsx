import React from 'react'
import './Leaderboard.css'

function LeaderboardPage() {
    return <main className="leaderboard">
                <div className="centered-box">
                    <div className="centered-box__inner">
                        <h1 className="liders__title">Лидеры игры</h1>
                        <div className="liders__wrp">
                            <div className="liders__item">
                                <img className="liders__img" src="#" width="48" height="48" />
                                <span className="liders__name">
                                    NickName
                                </span>
                                <span className="liders__score">
                                    56806
                                </span>
                                <span className="liders__place">
                                    1
                                </span>
                            </div>
                            <div className="liders__item">
                                <img className="liders__img" src="#" width="48" height="48" />
                                <span className="liders__name">
                                    NickName
                                </span>
                                <span className="liders__score">
                                    56806
                                </span>
                                <span className="liders__place">
                                    1
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
}

export { LeaderboardPage }
