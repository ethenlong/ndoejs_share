
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('err'))
    }, 300)
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })

  setTimeout(() => {
    console.log(promise)
  }, 800)