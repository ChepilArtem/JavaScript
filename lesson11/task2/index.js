const contact = [{
    name: 'Art',
    phoneNumber: '777-777-7'
},
{
    name: 'Lol',
    phoneNumber: '666-666-6'
},
{
    name: 'Pol',
    phoneNumber: '999-999-9'
}]

const sortContacts = (contact, incr = true) => {
    if (!Array.isArray(contact))
        return null;

    const res = contact
        .sort((a, b) => {
            if (!incr) {
                return b.name.localeCompare(a.name);
            } else {
                return a.name.localeCompare(b.name);
            }
        });
    return res;
};

console.log(sortContacts(contact));