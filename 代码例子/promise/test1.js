function test(project) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('success')
      } else {
        let error = new Error('fail')
        error.project = project
        reject(error)
      }
    }, 500)
  }
  )
}

Promise.all([
  test('project1'),
  test('project2')
]).then((data) => {
  console.log(data)
}).catch((err) => {
  console.log('failed ' + err.project)
})