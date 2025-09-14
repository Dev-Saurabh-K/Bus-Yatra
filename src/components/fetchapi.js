  // Simulate bus movement
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBus((prev) => ({
//         lat: prev.lat + (Math.random() - 0.5) * 0.001,
//         lng: prev.lng + (Math.random() - 0.5) * 0.001,
//       }));
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);


// const URL='http://localhost:5000/bus';
// function loc() {
//     setInterval(async()=>{
//         const res= await fetch(URL);
//         const data=await res.json();
//         console.log(data.lat,data.lng);
        
//     },8000)
// }

// loc();

const URL='http://localhost:5000/bus';
async function loc() {
    const res= await fetch(URL);
    const data=await res.json();
    console.log(data.lat,data.lng);  
}

setInterval(async()=>{
    loc();
},8000)