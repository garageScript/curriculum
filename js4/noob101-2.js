fs.readdir('/home', (err, names)=>{
  const namesString = names.reduce((acc,cur) =>{ 
    if(cur != "noob101"){
      acc += cur +'\n';;
      // console.log(acc);
    }
    return acc;
  });
  fs.writeFile('list.txt', namesString , (err)=>{
    if(err) throw err;
    console.log("The list.txt has been updated");
  });
});
