test(function (err, data) {
  if (err) {
    return console.log('Err' + err)
  }
  console.log(data)
});

// callback hell

// test(function (err) {
//   if (err) {
//     return console.log('Err' + err)
//   }

//   test(function (err) {
//     if (err) {
//       return console.log('Err' + err)
//     }

//     test(function (err) {
//       if (err) {
//         return console.log('Err' + err)
//       }
//       console.log('success')
//     })
//   })
// })

// var count = 0

// test(function (err) {
//   if (err) {
//     return console.log('Err' + err)
//   }
//   count++;
//   if (count === 2) {
//     console.log('success')
//   } else {
//     console.log('count ' + count)
//   }
// })

// test(function (err) {
//   if (err) {
//     return console.log('Err' + err)
//   }
//   count++;
//   if (count === 2) {
//     console.log('success')
//   } else {
//     console.log('count ' + count)
//   }
// })


function test(callback) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      callback(null, 'success')
    } else {
      callback(new Error('fail'))
    }
  }, 500)
}