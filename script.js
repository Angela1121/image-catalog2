fetch('images.json')
.then(r=>r.json())
.then(data=>{
  const g=document.getElementById('gallery');
  data.forEach(src=>{
    const img=document.createElement('img');
    img.src = src;
    g.appendChild(img);
  });
});