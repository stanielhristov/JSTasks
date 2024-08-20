const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Първият промис се изпълни след 5 секунди");
    resolve("Първият промис е успешен");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Вторият промис се изпълни след 7 секунди");
    resolve("Вторият промис е успешен");
  }, 7000);
});

const promise3 = Promise.all([promise1, promise2])
  .then((results) => {
    console.log("Третият промис се изпълни, след като и двата предходни промиса се изпълниха");
    console.log("Резултати от предходните промиси: ", results);
  })
  .catch((error) => {
    console.log("Някой от промисите се провали: ", error);
  });

// Извеждаме резултатите от третия промис
promise3.then(() => {
  console.log("Всички промиси са изпълнени успешно.");
});