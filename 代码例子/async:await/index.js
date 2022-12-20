// const asyncFunc = async function () {
//     const res = await new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove(2)
//         }, 500)
//     })
//     console.log(res)
// }

const asyncFunc = async function () {
    try {
        const res = await new Promise((reslove, reject) => {
            setTimeout(() => {
                reject(new Error(2))
            }, 500)
        })
        console.log(res)
    } catch (err) {
        console.log('err: ' + err)
    }
}

asyncFunc();
