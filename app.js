
const team = document.querySelector('.team');
const lists = document.querySelector('.lists');
const tbody = document.querySelector('.box table tbody');


devs.map(data => {

    team.innerHTML += `
    
        <div class="team-item">
            <img src="${data.photo}" alt="">
            <h2>${data.name}<h2>
            <p>${data.skill}</p>
            <span>${data.age}</span>
            <p>${data.location}</p>
            <p>Lorem ipsum, dolor sit amet.</p>
        </div>
    `;
});


//Student data//

students.map(data => {

    lists.innerHTML +=`
        <div class="data-item">
            <img src="${data.photo} " alt="">
            <h2>Name :${data.name} </h2>
            <h3>Father :${data.father}</h3>
            <h3>Mother :${data.mother} </h3>
            <span>Place :${data.place} </span>
            <h3>Class :${data.class}</h3>
            <h4>Section :${data.section}</h4>
            
        </div>
    `;
});

//Phone book//
number.map((data, index) => {
    tbody.innerHTML +=`
                <tr>
                    <td>${index+1} </td>
                    <td>${data.name}</td>
                    <td>${data.age}</td>
                    <td>${data.skill}</td>
                    <td>${data.phone}</td>
                    <td>${data.place}</td>
                    <td>${data.relationship}</td>
                    <td><img style="height:50px;width:50px;" src="${data.photo}"></td>
                </tr>
    `;
});