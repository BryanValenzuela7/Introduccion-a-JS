function Cards({id, personal_info:{address, phone_number,zipcode}, employee_name, employee_salary, employee_age, image:{profile_image, description}}){
    const card = document.createElement('div')
    card.className ='card'
    card.innerHTML = `
    <img src='${profile_image}' alt='${description}' class='card-avatar'/>
    <div class='card-people'>
        <p class='card-people_name'> ${employee_name}</p>
        <p class='card-people_age'> ${employee_age}</p>
        <p class='card-people_salary'> ${employee_salary}</p>
        <p class='card-people_address'> ${address}</p>
        <p class='card-people_zipcode'> ${zipcode}</p>
        <p class='card-people_phone'> ${phone_number}</p>
    </div>
    `
    return card
}
export default Cards
/**
 * id: 1,
    personal_info: {
      address: '3271 Stuart Street',
      phone_number: '412-526-1316',
      zipcode: '15201',
    },
    employee_name: 'Tiger Nixon',
    employee_salary: 320800,
    employee_age: 61,
    image: {
      profile_image:
        'https://images.unsplash.com/photo-1543117976-792a2d6ddb1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3388&q=80',
      description: 'Internet Image',
 */