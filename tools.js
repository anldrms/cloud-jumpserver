// Network and Cloud Tools Functions

// WHOIS Lookup (simulated - in production, you'd use an API)
function performWhois() {
    const input = document.getElementById('whoisInput').value;
    const result = document.getElementById('whoisResult');
    
    if (!input) {
        result.innerHTML = '<span class="error">Please enter a domain or IP address</span>';
        return;
    }
    
    result.innerHTML = '<span class="loading">Looking up WHOIS information...</span>';
    
    setTimeout(() => {
        result.innerHTML = `
<span class="success">WHOIS Information for: ${input}</span>

Domain Name: ${input}
Registry Domain ID: D123456789-LROR
Registrar: Example Registrar, Inc.
Registrar WHOIS Server: whois.example.com
Registrar URL: http://www.example.com
Updated Date: 2024-01-15T10:00:00Z
Creation Date: 2020-01-15T10:00:00Z
Expiration Date: 2025-01-15T10:00:00Z
Registrar Registration Expiration Date: 2025-01-15T10:00:00Z

Status: clientTransferProhibited
Status: clientUpdateProhibited

Name Server: ns1.example.com
Name Server: ns2.example.com

<span class="warning">Note: This is a simulated response. For actual WHOIS data, integrate with a WHOIS API service.</span>
        `;
    }, 1000);
}

// IP Block Information
function getIPBlockInfo() {
    const input = document.getElementById('ipBlockInput').value;
    const result = document.getElementById('ipBlockResult');
    
    if (!input) {
        result.innerHTML = '<span class="error">Please enter an IP address or CIDR</span>';
        return;
    }
    
    result.innerHTML = '<span class="loading">Retrieving IP block information...</span>';
    
    setTimeout(() => {
        // Parse CIDR or IP
        const ipInfo = parseIPorCIDR(input);
        
        result.innerHTML = `
<span class="success">IP Block Information for: ${input}</span>

IP Address: ${ipInfo.ip}
Network: ${ipInfo.network}
Broadcast: ${ipInfo.broadcast}
Netmask: ${ipInfo.netmask}
CIDR: ${ipInfo.cidr}
Wildcard: ${ipInfo.wildcard}
Network Size: ${ipInfo.size} addresses
Usable Hosts: ${ipInfo.usableHosts}
First Host: ${ipInfo.firstHost}
Last Host: ${ipInfo.lastHost}
IP Type: ${ipInfo.type}
IP Class: ${ipInfo.class}

<span class="info">Geolocation:</span>
Country: United States
Region: California
City: San Francisco
ISP: Example ISP
Organization: Example Org

<span class="warning">Note: This is a simulated response. For actual data, integrate with IP geolocation APIs.</span>
        `;
    }, 1000);
}

// Ping/Latency Test (simulated)
function performPing() {
    const input = document.getElementById('pingInput').value;
    const result = document.getElementById('pingResult');
    
    if (!input) {
        result.innerHTML = '<span class="error">Please enter a hostname or IP address</span>';
        return;
    }
    
    result.innerHTML = '<span class="loading">Pinging ' + input + '...</span>';
    
    setTimeout(() => {
        const latencies = [
            Math.floor(Math.random() * 50) + 10,
            Math.floor(Math.random() * 50) + 10,
            Math.floor(Math.random() * 50) + 10,
            Math.floor(Math.random() * 50) + 10
        ];
        const avg = latencies.reduce((a, b) => a + b) / latencies.length;
        
        result.innerHTML = `
<span class="success">Ping statistics for ${input}:</span>

Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

Reply from ${input}: time=${latencies[0]}ms
Reply from ${input}: time=${latencies[1]}ms
Reply from ${input}: time=${latencies[2]}ms
Reply from ${input}: time=${latencies[3]}ms

<span class="info">Round Trip Times:</span>
Minimum = ${Math.min(...latencies)}ms
Maximum = ${Math.max(...latencies)}ms
Average = ${avg.toFixed(0)}ms

<span class="warning">Note: This is a simulated ping. For actual network tests, use native ping tools or specialized services.</span>
        `;
    }, 2000);
}

// DNS Lookup (simulated)
function performDNS() {
    const input = document.getElementById('dnsInput').value;
    const result = document.getElementById('dnsResult');
    
    if (!input) {
        result.innerHTML = '<span class="error">Please enter a domain name</span>';
        return;
    }
    
    result.innerHTML = '<span class="loading">Performing DNS lookup...</span>';
    
    setTimeout(() => {
        result.innerHTML = `
<span class="success">DNS Records for: ${input}</span>

<span class="info">A Records (IPv4):</span>
${input}    IN  A       192.0.2.1
${input}    IN  A       192.0.2.2

<span class="info">AAAA Records (IPv6):</span>
${input}    IN  AAAA    2001:db8::1
${input}    IN  AAAA    2001:db8::2

<span class="info">MX Records (Mail):</span>
${input}    IN  MX  10  mail1.${input}
${input}    IN  MX  20  mail2.${input}

<span class="info">NS Records (Name Servers):</span>
${input}    IN  NS      ns1.${input}
${input}    IN  NS      ns2.${input}

<span class="info">TXT Records:</span>
${input}    IN  TXT     "v=spf1 include:_spf.${input} ~all"

<span class="warning">Note: This is a simulated DNS lookup. For actual DNS queries, integrate with DNS APIs or use native tools.</span>
        `;
    }, 1000);
}

// CIDR Calculator
function calculateCIDR() {
    const input = document.getElementById('cidrInput').value;
    const result = document.getElementById('cidrResult');
    
    if (!input) {
        result.innerHTML = '<span class="error">Please enter a CIDR notation (e.g., 10.0.0.0/24)</span>';
        return;
    }
    
    const cidrInfo = calculateCIDRInfo(input);
    
    if (cidrInfo.error) {
        result.innerHTML = `<span class="error">${cidrInfo.error}</span>`;
        return;
    }
    
    result.innerHTML = `
<span class="success">CIDR Calculation for: ${input}</span>

<span class="info">Network Information:</span>
Network Address:    ${cidrInfo.network}
Broadcast Address:  ${cidrInfo.broadcast}
Netmask:           ${cidrInfo.netmask}
Wildcard Mask:     ${cidrInfo.wildcard}
CIDR Notation:     /${cidrInfo.cidrBits}

<span class="info">Address Range:</span>
First IP:          ${cidrInfo.firstIP}
Last IP:           ${cidrInfo.lastIP}
Total Addresses:   ${cidrInfo.totalAddresses}
Usable Hosts:      ${cidrInfo.usableHosts}

<span class="info">Binary Representation:</span>
Network:           ${cidrInfo.networkBinary}
Netmask:           ${cidrInfo.netmaskBinary}

<span class="info">IP Class:</span>
Class:             ${cidrInfo.class}
Type:              ${cidrInfo.type}
    `;
}

// Subnet Calculator
function calculateSubnet() {
    const input = document.getElementById('subnetInput').value;
    const result = document.getElementById('subnetResult');
    
    if (!input) {
        result.innerHTML = '<span class="error">Please enter an IP address with mask (e.g., 192.168.1.0/24)</span>';
        return;
    }
    
    const subnetInfo = calculateCIDRInfo(input);
    
    if (subnetInfo.error) {
        result.innerHTML = `<span class="error">${subnetInfo.error}</span>`;
        return;
    }
    
    // Calculate subnets
    const subnets = calculateSubnets(input, 4); // Show 4 example subnets
    
    result.innerHTML = `
<span class="success">Subnet Information for: ${input}</span>

<span class="info">Original Network:</span>
Network:           ${subnetInfo.network}/${subnetInfo.cidrBits}
Usable Hosts:      ${subnetInfo.usableHosts}

<span class="info">Example Subnet Division (into 4 subnets):</span>
${subnets.map((subnet, i) => `
Subnet ${i + 1}:
  Network:         ${subnet.network}/${subnet.cidr}
  Range:           ${subnet.firstIP} - ${subnet.lastIP}
  Usable Hosts:    ${subnet.hosts}
`).join('\n')}

<span class="info">Recommendations:</span>
• Each subnet can accommodate ${subnets[0].hosts} hosts
• Reserve first IP for network, last for broadcast
• Consider leaving room for future growth
    `;
}

// Helper function to parse IP or CIDR
function parseIPorCIDR(input) {
    const parts = input.split('/');
    const ip = parts[0];
    const cidr = parts[1] || '32';
    
    return {
        ip: ip,
        network: calculateNetwork(ip, cidr),
        broadcast: calculateBroadcast(ip, cidr),
        netmask: cidrToNetmask(parseInt(cidr)),
        cidr: `/${cidr}`,
        wildcard: calculateWildcard(cidr),
        size: Math.pow(2, 32 - parseInt(cidr)),
        usableHosts: Math.pow(2, 32 - parseInt(cidr)) - 2,
        firstHost: incrementIP(calculateNetwork(ip, cidr)),
        lastHost: decrementIP(calculateBroadcast(ip, cidr)),
        type: isPrivateIP(ip) ? 'Private' : 'Public',
        class: getIPClass(ip)
    };
}

// Helper function to calculate CIDR info
function calculateCIDRInfo(cidr) {
    try {
        const parts = cidr.split('/');
        if (parts.length !== 2) {
            return { error: 'Invalid CIDR notation. Use format: x.x.x.x/y' };
        }
        
        const ip = parts[0];
        const bits = parseInt(parts[1]);
        
        if (bits < 0 || bits > 32) {
            return { error: 'CIDR bits must be between 0 and 32' };
        }
        
        const ipParts = ip.split('.').map(Number);
        if (ipParts.length !== 4 || ipParts.some(p => p < 0 || p > 255)) {
            return { error: 'Invalid IP address format' };
        }
        
        const netmask = cidrToNetmask(bits);
        const network = calculateNetwork(ip, bits);
        const broadcast = calculateBroadcast(ip, bits);
        const totalAddresses = Math.pow(2, 32 - bits);
        const usableHosts = totalAddresses > 2 ? totalAddresses - 2 : totalAddresses;
        
        return {
            network: network,
            broadcast: broadcast,
            netmask: netmask,
            wildcard: calculateWildcard(bits),
            cidrBits: bits,
            firstIP: bits < 31 ? incrementIP(network) : network,
            lastIP: bits < 31 ? decrementIP(broadcast) : broadcast,
            totalAddresses: totalAddresses,
            usableHosts: usableHosts,
            networkBinary: ipToBinary(network),
            netmaskBinary: ipToBinary(netmask),
            class: getIPClass(ip),
            type: isPrivateIP(ip) ? 'Private' : 'Public'
        };
    } catch (e) {
        return { error: 'Error calculating CIDR: ' + e.message };
    }
}

// Helper functions for IP calculations
function cidrToNetmask(bits) {
    const mask = [];
    for (let i = 0; i < 4; i++) {
        const n = Math.min(bits, 8);
        mask.push(256 - Math.pow(2, 8 - n));
        bits -= n;
    }
    return mask.join('.');
}

function calculateNetwork(ip, cidr) {
    const ipParts = ip.split('.').map(Number);
    const netmask = cidrToNetmask(parseInt(cidr)).split('.').map(Number);
    const network = ipParts.map((part, i) => part & netmask[i]);
    return network.join('.');
}

function calculateBroadcast(ip, cidr) {
    const network = calculateNetwork(ip, cidr).split('.').map(Number);
    const wildcard = calculateWildcard(cidr).split('.').map(Number);
    const broadcast = network.map((part, i) => part | wildcard[i]);
    return broadcast.join('.');
}

function calculateWildcard(cidr) {
    const netmask = cidrToNetmask(parseInt(cidr)).split('.').map(Number);
    const wildcard = netmask.map(part => 255 - part);
    return wildcard.join('.');
}

function incrementIP(ip) {
    const parts = ip.split('.').map(Number);
    let carry = 1;
    for (let i = 3; i >= 0 && carry; i--) {
        parts[i] += carry;
        carry = Math.floor(parts[i] / 256);
        parts[i] %= 256;
    }
    return parts.join('.');
}

function decrementIP(ip) {
    const parts = ip.split('.').map(Number);
    let borrow = 1;
    for (let i = 3; i >= 0 && borrow; i--) {
        parts[i] -= borrow;
        if (parts[i] < 0) {
            parts[i] += 256;
            borrow = 1;
        } else {
            borrow = 0;
        }
    }
    return parts.join('.');
}

function ipToBinary(ip) {
    return ip.split('.').map(part => 
        parseInt(part).toString(2).padStart(8, '0')
    ).join('.');
}

function isPrivateIP(ip) {
    const parts = ip.split('.').map(Number);
    return (
        parts[0] === 10 ||
        (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
        (parts[0] === 192 && parts[1] === 168)
    );
}

function getIPClass(ip) {
    const firstOctet = parseInt(ip.split('.')[0]);
    if (firstOctet >= 1 && firstOctet <= 126) return 'A';
    if (firstOctet >= 128 && firstOctet <= 191) return 'B';
    if (firstOctet >= 192 && firstOctet <= 223) return 'C';
    if (firstOctet >= 224 && firstOctet <= 239) return 'D (Multicast)';
    if (firstOctet >= 240 && firstOctet <= 255) return 'E (Reserved)';
    return 'Unknown';
}

function calculateSubnets(cidr, count) {
    const info = calculateCIDRInfo(cidr);
    if (info.error) return [];
    
    const newBits = info.cidrBits + Math.ceil(Math.log2(count));
    const subnetSize = Math.pow(2, 32 - newBits);
    const subnets = [];
    
    let currentIP = info.network;
    for (let i = 0; i < count; i++) {
        const subnet = {
            network: currentIP,
            cidr: newBits,
            firstIP: incrementIP(currentIP),
            lastIP: decrementIP(calculateBroadcast(currentIP, newBits)),
            hosts: Math.pow(2, 32 - newBits) - 2
        };
        subnets.push(subnet);
        
        // Calculate next subnet
        const parts = currentIP.split('.').map(Number);
        let value = (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
        value += subnetSize;
        currentIP = [
            (value >>> 24) & 255,
            (value >>> 16) & 255,
            (value >>> 8) & 255,
            value & 255
        ].join('.');
    }
    
    return subnets;
}
