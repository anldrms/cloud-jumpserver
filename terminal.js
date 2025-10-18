// Terminal functionality
class Terminal {
    constructor() {
        this.output = document.getElementById('terminalOutput');
        this.input = document.getElementById('terminalInput');
        this.history = [];
        this.historyIndex = -1;
        this.currentPath = '~';
        
        this.commands = {
            help: this.showHelp.bind(this),
            clear: this.clear.bind(this),
            cls: this.clear.bind(this),
            aws: this.awsInfo.bind(this),
            azure: this.azureInfo.bind(this),
            gcp: this.gcpInfo.bind(this),
            alibaba: this.alibabaInfo.bind(this),
            oracle: this.oracleInfo.bind(this),
            'list-clouds': this.listClouds.bind(this),
            'compare': this.compareCommand.bind(this),
            'pricing': this.pricingCommand.bind(this),
            'regions': this.regionsCommand.bind(this),
            'whois': this.whoisCommand.bind(this),
            'ping': this.pingCommand.bind(this),
            'dns': this.dnsCommand.bind(this),
            'cidr': this.cidrCommand.bind(this),
            'ip': this.ipCommand.bind(this),
            'about': this.aboutCommand.bind(this),
            'echo': this.echoCommand.bind(this),
            'date': this.dateCommand.bind(this),
            'ls': this.lsCommand.bind(this),
            'pwd': this.pwdCommand.bind(this),
        };
        
        this.init();
    }
    
    init() {
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.executeCommand(this.input.value);
                this.input.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory(-1);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory(1);
            }
        });
        
        document.getElementById('clearTerminal').addEventListener('click', () => {
            this.clear();
        });
        
        document.getElementById('copyTerminal').addEventListener('click', () => {
            this.copyOutput();
        });
        
        this.welcomeMessage();
    }
    
    welcomeMessage() {
        this.writeLine('╔═══════════════════════════════════════════════════════════╗', 'info');
        this.writeLine('║   Welcome to Cloud Jumpserver Terminal v1.0              ║', 'info');
        this.writeLine('║   Multi-Cloud Operations Platform                         ║', 'info');
        this.writeLine('╚═══════════════════════════════════════════════════════════╝', 'info');
        this.writeLine('');
        this.writeLine('Type "help" for available commands', 'success');
        this.writeLine('');
    }
    
    executeCommand(input) {
        if (!input.trim()) return;
        
        this.history.push(input);
        this.historyIndex = this.history.length;
        
        this.writeLine(`$ ${input}`, 'info');
        
        const parts = input.trim().split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);
        
        if (this.commands[command]) {
            this.commands[command](args);
        } else {
            this.writeLine(`Command not found: ${command}`, 'error');
            this.writeLine('Type "help" for available commands', 'warning');
        }
        
        this.scrollToBottom();
    }
    
    showHelp(args) {
        this.writeLine('═══════════════════ Available Commands ═══════════════════', 'success');
        this.writeLine('');
        this.writeLine('Cloud Information:', 'info');
        this.writeLine('  aws              - Show AWS information');
        this.writeLine('  azure            - Show Azure information');
        this.writeLine('  gcp              - Show GCP information');
        this.writeLine('  alibaba          - Show Alibaba Cloud information');
        this.writeLine('  oracle           - Show Oracle Cloud information');
        this.writeLine('  list-clouds      - List all supported cloud providers');
        this.writeLine('');
        this.writeLine('Comparison & Pricing:', 'info');
        this.writeLine('  compare <p1> <p2>     - Compare two cloud providers');
        this.writeLine('  pricing <service>     - Show pricing for a service');
        this.writeLine('  regions <provider>    - Show regions for a provider');
        this.writeLine('');
        this.writeLine('Network Tools:', 'info');
        this.writeLine('  whois <domain>        - Perform WHOIS lookup');
        this.writeLine('  ping <host>           - Ping a host');
        this.writeLine('  dns <domain>          - DNS lookup');
        this.writeLine('  cidr <cidr>           - CIDR calculator');
        this.writeLine('  ip <address>          - IP information');
        this.writeLine('');
        this.writeLine('System Commands:', 'info');
        this.writeLine('  help             - Show this help message');
        this.writeLine('  clear, cls       - Clear terminal');
        this.writeLine('  echo <text>      - Echo text');
        this.writeLine('  date             - Show current date and time');
        this.writeLine('  about            - About this platform');
        this.writeLine('  pwd              - Print working directory');
        this.writeLine('  ls               - List available tools');
        this.writeLine('');
    }
    
    awsInfo(args) {
        this.writeLine('═══════════════════ Amazon Web Services (AWS) ═══════════════════', 'success');
        this.writeLine('Provider: Amazon Web Services', 'info');
        this.writeLine('Regions: 32 regions worldwide', 'info');
        this.writeLine('Availability Zones: 102', 'info');
        this.writeLine('Services: 200+ services', 'info');
        this.writeLine('');
        this.writeLine('Popular Regions:');
        this.writeLine('  • us-east-1 (N. Virginia)');
        this.writeLine('  • us-west-2 (Oregon)');
        this.writeLine('  • eu-west-1 (Ireland)');
        this.writeLine('  • ap-southeast-1 (Singapore)');
        this.writeLine('  • ap-northeast-1 (Tokyo)');
        this.writeLine('');
        this.writeLine('Key Services: EC2, S3, RDS, Lambda, ECS, EKS, CloudFront');
        this.writeLine('');
    }
    
    azureInfo(args) {
        this.writeLine('═══════════════════ Microsoft Azure ═══════════════════', 'success');
        this.writeLine('Provider: Microsoft Azure', 'info');
        this.writeLine('Regions: 60+ regions worldwide', 'info');
        this.writeLine('Availability Zones: 160+', 'info');
        this.writeLine('Services: 200+ services', 'info');
        this.writeLine('');
        this.writeLine('Popular Regions:');
        this.writeLine('  • East US (Virginia)');
        this.writeLine('  • West Europe (Netherlands)');
        this.writeLine('  • Southeast Asia (Singapore)');
        this.writeLine('  • UK South (London)');
        this.writeLine('  • Japan East (Tokyo)');
        this.writeLine('');
        this.writeLine('Key Services: Virtual Machines, Blob Storage, SQL Database, AKS, Functions');
        this.writeLine('');
    }
    
    gcpInfo(args) {
        this.writeLine('═══════════════════ Google Cloud Platform (GCP) ═══════════════════', 'success');
        this.writeLine('Provider: Google Cloud Platform', 'info');
        this.writeLine('Regions: 40+ regions worldwide', 'info');
        this.writeLine('Zones: 121 zones', 'info');
        this.writeLine('Services: 100+ services', 'info');
        this.writeLine('');
        this.writeLine('Popular Regions:');
        this.writeLine('  • us-central1 (Iowa)');
        this.writeLine('  • us-east1 (South Carolina)');
        this.writeLine('  • europe-west1 (Belgium)');
        this.writeLine('  • asia-southeast1 (Singapore)');
        this.writeLine('  • asia-northeast1 (Tokyo)');
        this.writeLine('');
        this.writeLine('Key Services: Compute Engine, Cloud Storage, BigQuery, GKE, Cloud Functions');
        this.writeLine('');
    }
    
    alibabaInfo(args) {
        this.writeLine('═══════════════════ Alibaba Cloud ═══════════════════', 'success');
        this.writeLine('Provider: Alibaba Cloud', 'info');
        this.writeLine('Regions: 27 regions worldwide', 'info');
        this.writeLine('Availability Zones: 86', 'info');
        this.writeLine('Services: 200+ services', 'info');
        this.writeLine('');
        this.writeLine('Popular Regions:');
        this.writeLine('  • China (Hangzhou)');
        this.writeLine('  • Singapore');
        this.writeLine('  • US (Silicon Valley)');
        this.writeLine('  • Germany (Frankfurt)');
        this.writeLine('  • Japan (Tokyo)');
        this.writeLine('');
        this.writeLine('Key Services: ECS, OSS, RDS, Container Service, Function Compute');
        this.writeLine('');
    }
    
    oracleInfo(args) {
        this.writeLine('═══════════════════ Oracle Cloud Infrastructure (OCI) ═══════════════════', 'success');
        this.writeLine('Provider: Oracle Cloud Infrastructure', 'info');
        this.writeLine('Regions: 44 regions worldwide', 'info');
        this.writeLine('Availability Domains: Multiple per region', 'info');
        this.writeLine('Services: 100+ services', 'info');
        this.writeLine('');
        this.writeLine('Popular Regions:');
        this.writeLine('  • US East (Ashburn)');
        this.writeLine('  • US West (Phoenix)');
        this.writeLine('  • UK South (London)');
        this.writeLine('  • Germany Central (Frankfurt)');
        this.writeLine('  • Japan East (Tokyo)');
        this.writeLine('');
        this.writeLine('Key Services: Compute, Object Storage, Autonomous Database, Container Engine');
        this.writeLine('');
    }
    
    listClouds(args) {
        this.writeLine('═══════════════════ Supported Cloud Providers ═══════════════════', 'success');
        this.writeLine('');
        this.writeLine('1. Amazon Web Services (AWS)', 'info');
        this.writeLine('2. Microsoft Azure', 'info');
        this.writeLine('3. Google Cloud Platform (GCP)', 'info');
        this.writeLine('4. Alibaba Cloud', 'info');
        this.writeLine('5. Oracle Cloud Infrastructure (OCI)', 'info');
        this.writeLine('6. IBM Cloud', 'info');
        this.writeLine('7. DigitalOcean', 'info');
        this.writeLine('8. Linode', 'info');
        this.writeLine('9. Vultr', 'info');
        this.writeLine('10. Tencent Cloud', 'info');
        this.writeLine('');
        this.writeLine('Use command: <provider-name> for more details', 'warning');
        this.writeLine('');
    }
    
    compareCommand(args) {
        if (args.length < 2) {
            this.writeLine('Usage: compare <provider1> <provider2>', 'error');
            this.writeLine('Example: compare aws azure', 'info');
            return;
        }
        
        this.writeLine(`Comparing ${args[0].toUpperCase()} vs ${args[1].toUpperCase()}...`, 'success');
        this.writeLine('');
        this.writeLine('Feature Comparison:', 'info');
        this.writeLine('─────────────────────────────────────────────────────────');
        this.writeLine(`Compute:       ${args[0]} = EC2/VM | ${args[1]} = VM/Compute`);
        this.writeLine(`Storage:       ${args[0]} = S3/Block | ${args[1]} = Blob/Block`);
        this.writeLine(`Database:      ${args[0]} = RDS/DynamoDB | ${args[1]} = SQL/NoSQL`);
        this.writeLine(`Kubernetes:    ${args[0]} = EKS/AKS | ${args[1]} = AKS/GKE`);
        this.writeLine(`Serverless:    ${args[0]} = Lambda | ${args[1]} = Functions`);
        this.writeLine('');
    }
    
    pricingCommand(args) {
        const service = args[0] || 'compute';
        this.writeLine(`Pricing information for: ${service}`, 'success');
        this.writeLine('');
        this.writeLine('Note: Prices vary by region and usage. Check provider websites for current pricing.', 'warning');
        this.writeLine('');
        this.writeLine('Visit the Pricing Comparison section for detailed comparisons', 'info');
        this.writeLine('');
    }
    
    regionsCommand(args) {
        const provider = args[0] || 'aws';
        this.writeLine(`Regions for ${provider.toUpperCase()}:`, 'success');
        this.writeLine('');
        this.writeLine('Loading region information...', 'info');
        this.writeLine('Use the Region Information section for detailed region data', 'info');
        this.writeLine('');
    }
    
    whoisCommand(args) {
        if (!args[0]) {
            this.writeLine('Usage: whois <domain or IP>', 'error');
            return;
        }
        this.writeLine(`Performing WHOIS lookup for: ${args[0]}`, 'info');
        this.writeLine('');
        this.writeLine('Domain Information:', 'success');
        this.writeLine('  Registrar: Example Registrar Inc.');
        this.writeLine('  Created: 2020-01-01');
        this.writeLine('  Expires: 2025-01-01');
        this.writeLine('  Status: Active');
        this.writeLine('');
        this.writeLine('Note: Use the WHOIS tool in the Tools section for actual lookups', 'warning');
        this.writeLine('');
    }
    
    pingCommand(args) {
        if (!args[0]) {
            this.writeLine('Usage: ping <host>', 'error');
            return;
        }
        this.writeLine(`Pinging ${args[0]}...`, 'info');
        this.writeLine('');
        this.writeLine('Reply from simulated ping (use Tools section for actual tests):', 'warning');
        this.writeLine('  Latency: ~20ms');
        this.writeLine('  Status: Reachable');
        this.writeLine('');
    }
    
    dnsCommand(args) {
        if (!args[0]) {
            this.writeLine('Usage: dns <domain>', 'error');
            return;
        }
        this.writeLine(`DNS lookup for: ${args[0]}`, 'info');
        this.writeLine('');
        this.writeLine('DNS Records (simulated):', 'success');
        this.writeLine('  A:     192.0.2.1');
        this.writeLine('  AAAA:  2001:db8::1');
        this.writeLine('  MX:    mail.example.com');
        this.writeLine('  NS:    ns1.example.com, ns2.example.com');
        this.writeLine('');
        this.writeLine('Use the DNS tool in Tools section for actual lookups', 'warning');
        this.writeLine('');
    }
    
    cidrCommand(args) {
        if (!args[0]) {
            this.writeLine('Usage: cidr <CIDR notation>', 'error');
            this.writeLine('Example: cidr 10.0.0.0/24', 'info');
            return;
        }
        this.writeLine(`CIDR calculation for: ${args[0]}`, 'info');
        this.writeLine('');
        this.writeLine('Network Information:', 'success');
        this.writeLine('  Network:     10.0.0.0');
        this.writeLine('  Broadcast:   10.0.0.255');
        this.writeLine('  Hosts:       254');
        this.writeLine('  First Host:  10.0.0.1');
        this.writeLine('  Last Host:   10.0.0.254');
        this.writeLine('');
        this.writeLine('Use the CIDR Calculator in Tools section for accurate calculations', 'warning');
        this.writeLine('');
    }
    
    ipCommand(args) {
        if (!args[0]) {
            this.writeLine('Usage: ip <IP address>', 'error');
            return;
        }
        this.writeLine(`IP Information for: ${args[0]}`, 'info');
        this.writeLine('');
        this.writeLine('IP Details:', 'success');
        this.writeLine('  Type: IPv4');
        this.writeLine('  Class: A/B/C');
        this.writeLine('  Private: Yes/No');
        this.writeLine('');
        this.writeLine('Use the IP Block Info tool for detailed information', 'warning');
        this.writeLine('');
    }
    
    aboutCommand(args) {
        this.writeLine('═══════════════════ Cloud Jumpserver Platform ═══════════════════', 'success');
        this.writeLine('');
        this.writeLine('Version: 1.0.0', 'info');
        this.writeLine('Purpose: Multi-cloud operations and management platform', 'info');
        this.writeLine('');
        this.writeLine('Features:', 'success');
        this.writeLine('  • Multi-cloud information and comparison');
        this.writeLine('  • Network tools (WHOIS, DNS, Ping, CIDR)');
        this.writeLine('  • Pricing comparison across providers');
        this.writeLine('  • Region information and latency data');
        this.writeLine('  • Web-based terminal for quick operations');
        this.writeLine('');
        this.writeLine('Built for: Cloud Engineers, DevOps, and SRE Teams', 'info');
        this.writeLine('');
    }
    
    echoCommand(args) {
        this.writeLine(args.join(' '));
    }
    
    dateCommand(args) {
        const now = new Date();
        this.writeLine(now.toString(), 'info');
    }
    
    pwdCommand(args) {
        this.writeLine(this.currentPath, 'info');
    }
    
    lsCommand(args) {
        this.writeLine('Available tools and sections:', 'success');
        this.writeLine('');
        this.writeLine('  cloud-info/     - Cloud provider information');
        this.writeLine('  pricing/        - Pricing comparisons');
        this.writeLine('  tools/          - Network and cloud tools');
        this.writeLine('  regions/        - Region information');
        this.writeLine('  comparison/     - Provider comparisons');
        this.writeLine('');
    }
    
    clear() {
        this.output.innerHTML = '';
        this.welcomeMessage();
    }
    
    writeLine(text, type = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        line.textContent = text;
        this.output.appendChild(line);
    }
    
    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }
    
    navigateHistory(direction) {
        this.historyIndex += direction;
        if (this.historyIndex < 0) {
            this.historyIndex = 0;
        } else if (this.historyIndex >= this.history.length) {
            this.historyIndex = this.history.length;
            this.input.value = '';
            return;
        }
        this.input.value = this.history[this.historyIndex] || '';
    }
    
    copyOutput() {
        const text = this.output.innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert('Terminal output copied to clipboard!');
        });
    }
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.terminal = new Terminal();
});
