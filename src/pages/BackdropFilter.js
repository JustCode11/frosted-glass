import React from 'react'
import Draggable from 'react-draggable';
import style from "../styles/backdropFilter.module.css";
import { IoColorPalette } from "react-icons/io5";

function BackdropFilter() {
    return (
        <>
            <div className={style.background}>
                <Draggable handle="strong">
                    <div className={style.glass}>
                        <strong><div className={style.drag}></div></strong>
                        <div className={`${style.glassClone} ${style.glassContent}`}>
                            <h1>Welcome to the Mossley gallery</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatem fugit rerum recusandae autem. Perspiciatis officia delectus amet eius a, beatae aliquid saepe perferendis doloribus aperiam modi minima, magnam fuga!</p>
                            <p><IoColorPalette className={style.icon} /></p>
                        </div>
                    </div>
                </Draggable>
            </div>
            <div className={style.source}>
                Photo by <a href="https://unsplash.com/@_calvincraig?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Calvin Craig</a> on <a href="https://unsplash.com/s/photos/michelangelo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </>
    )
}

export default BackdropFilter
