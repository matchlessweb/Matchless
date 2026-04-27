import crypto from 'crypto';

const apiKey = '2TSBhGZMELDoe27RjRQleVcCxgM9w9VmcJlJD6ouuFUqFTNn4vrlEnypzez8';
const url = 'https://mcp.surecontact.com/start';

async function rpc(method, params) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-API-Key': apiKey, 'Accept': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', method: 'tools/call', params: { name: method, arguments: params }, id: 1 })
    });
    const data = await res.json();
    if (data.error) throw new Error(JSON.stringify(data.error));
    return JSON.parse(data.result.content[0].text);
}

async function run() {
    try {
        const fields = [
            { id: crypto.randomUUID(), type: 'text', label: 'First Name', required: true, mapping: { type: 'primary', field: 'first_name' } },
            { id: crypto.randomUUID(), type: 'email', label: 'Email Address', required: true, mapping: { type: 'primary', field: 'email' } },
            { id: crypto.randomUUID(), type: 'url', label: 'Website URL', required: true },
            { id: crypto.randomUUID(), type: 'select', label: 'Biggest Bottleneck', required: true, options: [
                { label: 'Not getting enough leads', value: 'Not getting enough leads' },
                { label: 'Leads are low quality', value: 'Leads are low quality' },
                { label: 'Website looks outdated', value: 'Website looks outdated' },
                { label: 'I honestly don\'t know', value: 'I honestly don\'t know' }
            ]}
        ];

        console.log("Creating Form...");
        const created = await rpc('create-form-tool', {
            name: "Revenue Audit Application",
            description: "Lead magnet form for video teardowns",
            fields: fields
        });
        
        console.log("Publishing Form...");
        const published = await rpc('publish-form-tool', { form_uuid: created.uuid });
        
        console.log("FORM CREATED SUCCESSFULLY!");
        console.log("Form UUID:", published.uuid);
        console.log("Field Mappings:");
        fields.forEach(f => console.log(`- ${f.label}: ${f.id}`));

    } catch (e) {
        console.error("FAILED:", e);
    }
}
run();
