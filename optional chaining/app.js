// optional chaining ==> ' ? '

const people = [
    {
        name: 'bob',
        location: { street: '123 main street',
                    timezone: { offset: '+7:00' }
         }
    },
    {
        name: 'peter',
        location: { street: '123 Pine Street' }
    },
    {
        name: 'susan',
        location: { street: '123 Apple Street', 
                    timezone: { offset: '+9:00'}
        }
    }
]


people.forEach((person) => {
    // console.log(person.name);
    // console.log(person.location);

    // console.log(person.location.timezone.offset);  // <--- if one error found, then code breaks after that point

    //optional chaining in detail:
    // console.log(person.location && 
    //         person.location.timezone && 
    //         person.location.timezone.offset
    // )

    // in short cut we use ? operator for optional chaining
    // console.log(person.location.timezone?.street);  // <-- here code runs, and shows undefined for missing value

    console.log(person?.location?.timezone?.offset || "hello world");
 
})