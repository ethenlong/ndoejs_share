
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
    }, 500)
  }
  )
}

var promise = test(1)
  .then(() => {
    return test(2)
  })
  .then(() => {
    return test(3)
  })
  .then(() => {
    console.log('success')
  })
  .catch((err) => {
    console.log('failed ' + err.times)
  })