import React, { useEffect, useState } from 'react'

function GameBoard({ PShot = null, PShip = null, CShot = null, CShip = null }) { //shots should be passed as [y, x] and ships should be passed as [[y, x], [y, x]...]
    const [PBoard, setPBoard] = useState(
        [
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
        ]
    )

    const [CBoard, setCBoard] = useState(
        [
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
            ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
        ]
    )

    useEffect(() => {
        if (PShot != null && PShot[0] < 10 && PShot[1] < 10) {
            let newBoard = CBoard
            CBoard[PShot[0]][PShot[1]] = 'x'
            setCBoard(newBoard)
        }
    }, [PShot])

    useEffect(() => {
        if (CShot != null && CShot[0] < 10 && CShot[1] < 10) {
            let newBoard = PBoard
            PBoard[CShot[0]][CShot[1]] = 'x'
            setPBoard(newBoard)
        }
    }, [CShot])

    useEffect(() => {
        if (PShip != null) {
            let newBoard = PBoard
            PShip.map((coord) => {
                PBoard[coord[0]][coord[1]] = "s"
            })
            setPBoard(newBoard)
        }
    }, [PShip])

    useEffect(() => {
        if (CShip != null) {
            let newBoard = CBoard
            CShip.map((coord) => {
                CBoard[coord[0]][coord[1]] = "s"
            })
            setPBoard(newBoard)
        }
    }, [CShip])

    console.log(CBoard)

    return (
        <div>GameBoard</div>
    )
}

export default GameBoard