const { fork } = require('child_process');
const sender = fork(__dirname + '/child.js');

sender.on('message', msg => {
  console.log('主进程收到子进程的信息：', msg);
});

sender.send('Hey! 子进程');