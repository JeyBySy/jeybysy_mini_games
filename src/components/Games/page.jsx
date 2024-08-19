import React from 'react'
import GamesIcons from './GamesIcons'
import { GamesInfo } from "../../utils/Games"

const Games = () => {
    return (
        <div className='w-2/4 m-auto flex flex-wrap gap-5 justify-center'>
            {GamesInfo.map((game, index) => {
                return (
                    <GamesIcons name={game.name} key={index} link={game.link} isDone={game.isDone} />
                );
            })}
        </div>
    )
}

export default Games