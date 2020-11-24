fetch('cockpit/api/collections/get/workexperience?token=52868d34409f294fb8cee621dbfbef', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        filter: { status: true },
        limit: 10,
        populate: 1, // resolve linked collection items

        lang: 'de' // return normalized language fields (fieldA_de => fieldA)
    })
})
    .then(res => res.json())
    .then(res => console.log(res));