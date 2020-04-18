import { Component } from 'react'
const Index = ({ start = 1, end = 1, current = 1, max = 1, handleClick }) => {
    handleClick = typeof handleClick === 'function' ? handleClick : () => {}
    const diff = end - start + 1
    // const pageArr = new Array(8) error
    // const pageArr = new Array(8).fill(1) ok
    // const pageArr = Array.apply(null, { length: 8 }) ok
    const pageArr = []
    pageArr.push(
        <div
            key={'prev'}
            className={`page-item mr4 ${current>1?"":"disable"}`}
            onClick={
                () => {
                    current>1 && handleClick(current - 1);
                }
            }
        >
            上一页
        </div>)
    for (let i = start; i <= end; i++) {
        pageArr.push(
            <div
                key={i}
                className={`page-item mr4 ${current === i ? "selected":""}`}
                onClick={
                    () => {
                        handleClick(i);
                    }
                }
            >
                {i}
            </div>
        )
    }
    pageArr.push(
        <div
            key={'next'}
            className={`page-item mr4 ${current<max?"":"disable"}`}
            onClick={
                () => {
                    current<max && handleClick(current + 1);
                }
            }
        >
            下一页
        </div>
    )
    return (
        <div className="page-list">
            {
                pageArr
            }
        </div>
    )
}
export default Index
