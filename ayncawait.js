const p = new Promise((resolve,reject) => {
    resolve("rajalakshmi");
});

const getData=  async () =>{
   const data = await p;
   console.log(data)
}

getData();
