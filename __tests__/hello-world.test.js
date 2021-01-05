const axios = require('axios');

const fetchData = async () => {
    return await axios.get('http://localhost:3000/hello-world');
}

test('Fetch testing.', () => {
    return fetchData()
    .then(res => {
        expect(res.data.message).toBe('Hello World!!');
    });
});
