
function test(times) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('success')
        } else {
          let error = new Error('fail')
          error.times = times
          reject(error)
        }
      }, 200)
    })
}

// const serial = async function () {
//     try {
//         await test(1);
//         await test(2);
        
//         console.log('success');
//     } catch (err) {
//         return console.log('fail ' + err.times)
//     }
// }
// serial();

const parallel = async function () {
    try {
        // await Promise.all([test(1), test(2)])

        console.log('success');
    } catch (err) {
        return console.log('fail ' + err.times)
    }
}
parallel();
