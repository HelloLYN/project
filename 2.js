function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// async function series() {
//   await wait(2000);
//   await wait(2000);

//   return 'DONE!';
// }

// series();

async function parallel() {
  const wait1 = wait(2000);
  const wait2 = wait(2000);

  await wait1;
  await wait2;

  return 'DONE!';
}

parallel();
