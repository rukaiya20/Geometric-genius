// Color_hover

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }

//   random color for card-one

  document.addEventListener("mouseover", function(){
    document.getElementById('card-one-hover').innerHTML;
    document.getElementById('card-one-hover').style.backgroundColor = randomColor(); 
  });

  //   random color for card-two

  document.addEventListener("mouseover", function(){
    document.getElementById('card-two-hover').innerHTML;
    document.getElementById('card-two-hover').style.backgroundColor = randomColor(); 
  });

  //   random color for card-three

  document.addEventListener("mouseover", function(){
    document.getElementById('card-three-hover').innerHTML;
    document.getElementById('card-three-hover').style.backgroundColor = randomColor(); 
  });

  //   random color for card-four

  document.addEventListener("mouseover", function(){
    document.getElementById('card-four-hover').innerHTML;
    document.getElementById('card-four-hover').style.backgroundColor = randomColor(); 
  });

  //   random color for card-five

  document.addEventListener("mouseover", function(){
    document.getElementById('card-five-hover').innerHTML;
    document.getElementById('card-five-hover').style.backgroundColor = randomColor(); 
  });

  //   random color for card-six

  document.addEventListener("mouseover", function(){
    document.getElementById('card-six-hover').innerHTML;
    document.getElementById('card-six-hover').style.backgroundColor = randomColor(); 
  });

// -------------------------------------------------------------------------------->

let serial = 0;

// Card-one...>

document.getElementById('btn-triangle').addEventListener('click', function melo(hello){
    serial += 1;
    const cardTitlemain = document.getElementById('triangle-card-title');
    const cardTitle = cardTitlemain.innerText;
    const triangleInputfirststring = document.getElementById('triangle-input-first').value;
    const triangleInputstringsecond = document.getElementById('triangle-input-second').value;

    if(triangleInputfirststring == "" || triangleInputstringsecond == "" || triangleInputfirststring <= 0 || triangleInputstringsecond <= 0){
        return alert('Please enter a number');
    }

    const triangletotal = 0.5 * parseFloat(triangleInputfirststring) * parseFloat(triangleInputstringsecond);

    const triangletotalamount = triangletotal.toFixed(2);

    dispalydata(cardTitle, triangletotalamount);
   
})
// ----------------------------------------------

// card-two

document.getElementById('btn-rectangle').addEventListener('click', function (){
    serial += 1;
    const cardTitlemain = document.getElementById('rectangle-card-title');
    const cardTitle = cardTitlemain.innerText;
    const rectangleInputfirststring = document.getElementById('rectangle-first-input').value;
    const rectangleInputstringsecond = document.getElementById('rectangle-second-input').value;

    if(rectangleInputfirststring == "" || rectangleInputstringsecond == "" || rectangleInputfirststring <= 0 || rectangleInputstringsecond <= 0){
        return alert('Please enter a number');
    }

    const rectangletotal = parseFloat(rectangleInputfirststring) * parseFloat(rectangleInputstringsecond);

    const rectangletotalamount = rectangletotal.toFixed(2);

    dispalydata(cardTitle, rectangletotalamount);
   
})

// --------------------------------------------


// card three 

document.getElementById('brn-Parallelogram').addEventListener('click', function (){
    serial += 1;
    const cardTitlemain = document.getElementById('Parallelogram-card-titel');
    const cardTitle = cardTitlemain.innerText;
    const ParallelogramInputfirststring = document.getElementById('Parallelogram-card-inputone').value;
    const ParallelogramInputstringsecond = document.getElementById('Parallelogram-card-inputtwo').value;

    if(ParallelogramInputfirststring == "" || ParallelogramInputstringsecond == "" || ParallelogramInputfirststring <= 0 || ParallelogramInputstringsecond <= 0){
        return alert('Please enter a number');
    }

    const Parallelogramtotal = parseFloat(ParallelogramInputfirststring) * parseFloat(ParallelogramInputstringsecond);

    const Parallelogramtotalamount = Parallelogramtotal.toFixed(2);

    dispalydata(cardTitle, Parallelogramtotalamount);
   
})

// ------------------------------------------------

// card four

document.getElementById('brn-rhombus').addEventListener('click', function (){
    serial += 1;
    const cardTitlemain = document.getElementById('rhombus-card-titel');
    const cardTitle = cardTitlemain.innerText;
    const rhombusInputfirststring = document.getElementById('rhombus-card-inputone').value;
    const rhombusInputstringsecond = document.getElementById('rhombus-card-inputtwo').value;

    if(rhombusInputfirststring == "" || rhombusInputstringsecond == "" || rhombusInputfirststring <= 0 || rhombusInputstringsecond <= 0){
        return alert('Please enter a number');
    }

    const rhombustotal =0.5 * parseFloat(rhombusInputfirststring) * parseFloat(rhombusInputstringsecond);

    const rhombustotalamount = rhombustotal.toFixed(2);

    dispalydata(cardTitle, rhombustotalamount);
   
})

// card five

document.getElementById('brn-pentagon').addEventListener('click', function (){
    serial += 1;
    const cardTitlemain = document.getElementById('pentagon-card-titel');
    const cardTitle = cardTitlemain.innerText;
    const pentagonInputfirststring = document.getElementById('pentagon-card-inputone').value;
    const pentagonInputstringsecond = document.getElementById('pentagon-card-inputtwo').value;

    if(pentagonInputfirststring == "" || pentagonInputstringsecond == "" || pentagonInputfirststring <= 0 || pentagonInputstringsecond <= 0){
        return alert('Please enter a number');
    }

    const pentagontotal =0.5 * parseFloat(pentagonInputfirststring) * parseFloat(pentagonInputstringsecond);

    const pentagontotalamount = pentagontotal.toFixed(2);

    dispalydata(cardTitle, pentagontotalamount);
   
})

// card six

document.getElementById('btn-ellipse').addEventListener('click', function (){
    serial += 1;
    const cardTitlemain = document.getElementById('ellipse-card-titel');
    const cardTitle = cardTitlemain.innerText;
    const ellipseInputfirststring = document.getElementById('ellipse-card-inputone').value;
    const ellipseInputstringsecond = document.getElementById('ellipse-card-inputtwo').value;

    if(ellipseInputfirststring == "" || ellipseInputstringsecond == "" ||ellipseInputfirststring <= 0 || ellipseInputstringsecond <= 0){
        return alert('Please enter a number');
    }

    const ellipsetotal = parseFloat(ellipseInputfirststring) * parseFloat(ellipseInputstringsecond);

    const ellipsetotalamount =ellipsetotal.toFixed(2);

    dispalydata(cardTitle, ellipsetotalamount);
   
})

// ------------------------->

// common function

function dispalydata(cardTitle, triangletotalamount){
      
    const container = document.getElementById('table-container');

    const tr = document.createElement("tr");
    tr.innerHTML =`
     <td>${serial}</td>
     <td>${cardTitle}</td>
     <td>${triangletotalamount}cm<sup>2</sup></td>
     <button class ="bg-blue-500 px-4 py-1 mt-3 rounded w-full">Covert to m<sup>2</sup></button>
    `
    container.appendChild(tr);
}



