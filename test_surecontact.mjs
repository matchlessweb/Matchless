const fetchOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': '2TSBhGZMELDoe27RjRQleVcCxgM9w9VmcJlJD6ouuFUqFTNn4vrlEnypzez8',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        "jsonrpc": "2.0",
        "method": "tools/list",
        "id": 1
    })
};
const res = await fetch('https://mcp.surecontact.com/start', fetchOptions);
console.log(await res.text());
