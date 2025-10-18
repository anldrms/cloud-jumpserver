// Cloud providers data
const cloudProviders = {
    aws: {
        name: 'Amazon Web Services',
        regions: [
            { name: 'US East (N. Virginia)', code: 'us-east-1', zones: 6 },
            { name: 'US East (Ohio)', code: 'us-east-2', zones: 3 },
            { name: 'US West (N. California)', code: 'us-west-1', zones: 3 },
            { name: 'US West (Oregon)', code: 'us-west-2', zones: 4 },
            { name: 'Europe (Ireland)', code: 'eu-west-1', zones: 3 },
            { name: 'Europe (London)', code: 'eu-west-2', zones: 3 },
            { name: 'Europe (Paris)', code: 'eu-west-3', zones: 3 },
            { name: 'Europe (Frankfurt)', code: 'eu-central-1', zones: 3 },
            { name: 'Asia Pacific (Singapore)', code: 'ap-southeast-1', zones: 3 },
            { name: 'Asia Pacific (Tokyo)', code: 'ap-northeast-1', zones: 4 },
            { name: 'Asia Pacific (Seoul)', code: 'ap-northeast-2', zones: 4 },
            { name: 'Asia Pacific (Mumbai)', code: 'ap-south-1', zones: 3 },
            { name: 'Asia Pacific (Sydney)', code: 'ap-southeast-2', zones: 3 },
            { name: 'South America (São Paulo)', code: 'sa-east-1', zones: 3 },
            { name: 'Canada (Central)', code: 'ca-central-1', zones: 3 },
            { name: 'Middle East (Bahrain)', code: 'me-south-1', zones: 3 }
        ],
        services: ['EC2', 'S3', 'RDS', 'Lambda', 'ECS', 'EKS', 'DynamoDB', 'CloudFront', 'Route53', 'VPC'],
        features: {
            compute: 'EC2, Lambda, Fargate, Lightsail',
            storage: 'S3, EBS, EFS, Glacier',
            database: 'RDS, DynamoDB, Aurora, ElastiCache',
            networking: 'VPC, CloudFront, Route53, Direct Connect',
            containers: 'ECS, EKS, Fargate',
            serverless: 'Lambda, API Gateway, Step Functions'
        }
    },
    azure: {
        name: 'Microsoft Azure',
        regions: [
            { name: 'East US', code: 'eastus', zones: 3 },
            { name: 'East US 2', code: 'eastus2', zones: 3 },
            { name: 'West US', code: 'westus', zones: 2 },
            { name: 'West US 2', code: 'westus2', zones: 3 },
            { name: 'West Europe', code: 'westeurope', zones: 3 },
            { name: 'North Europe', code: 'northeurope', zones: 3 },
            { name: 'Southeast Asia', code: 'southeastasia', zones: 3 },
            { name: 'East Asia', code: 'eastasia', zones: 2 },
            { name: 'Japan East', code: 'japaneast', zones: 3 },
            { name: 'Japan West', code: 'japanwest', zones: 2 },
            { name: 'UK South', code: 'uksouth', zones: 3 },
            { name: 'UK West', code: 'ukwest', zones: 2 },
            { name: 'Australia East', code: 'australiaeast', zones: 3 },
            { name: 'Brazil South', code: 'brazilsouth', zones: 3 },
            { name: 'Canada Central', code: 'canadacentral', zones: 3 }
        ],
        services: ['Virtual Machines', 'Blob Storage', 'Azure SQL', 'Functions', 'AKS', 'Cosmos DB', 'App Service', 'CDN', 'DNS', 'VNet'],
        features: {
            compute: 'Virtual Machines, App Service, Container Instances',
            storage: 'Blob Storage, File Storage, Disk Storage',
            database: 'SQL Database, Cosmos DB, PostgreSQL, MySQL',
            networking: 'Virtual Network, CDN, Traffic Manager, ExpressRoute',
            containers: 'AKS, Container Instances, Container Registry',
            serverless: 'Functions, Logic Apps, Event Grid'
        }
    },
    gcp: {
        name: 'Google Cloud Platform',
        regions: [
            { name: 'Iowa (us-central1)', code: 'us-central1', zones: 4 },
            { name: 'South Carolina (us-east1)', code: 'us-east1', zones: 4 },
            { name: 'N. Virginia (us-east4)', code: 'us-east4', zones: 3 },
            { name: 'Oregon (us-west1)', code: 'us-west1', zones: 3 },
            { name: 'Belgium (europe-west1)', code: 'europe-west1', zones: 3 },
            { name: 'London (europe-west2)', code: 'europe-west2', zones: 3 },
            { name: 'Frankfurt (europe-west3)', code: 'europe-west3', zones: 3 },
            { name: 'Singapore (asia-southeast1)', code: 'asia-southeast1', zones: 3 },
            { name: 'Tokyo (asia-northeast1)', code: 'asia-northeast1', zones: 3 },
            { name: 'Mumbai (asia-south1)', code: 'asia-south1', zones: 3 },
            { name: 'Sydney (australia-southeast1)', code: 'australia-southeast1', zones: 3 },
            { name: 'São Paulo (southamerica-east1)', code: 'southamerica-east1', zones: 3 }
        ],
        services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Functions', 'GKE', 'BigQuery', 'App Engine', 'CDN', 'DNS', 'VPC'],
        features: {
            compute: 'Compute Engine, App Engine, Cloud Run',
            storage: 'Cloud Storage, Persistent Disk, Filestore',
            database: 'Cloud SQL, Firestore, BigQuery, Bigtable',
            networking: 'VPC, Cloud CDN, Cloud DNS, Cloud Interconnect',
            containers: 'GKE, Cloud Run, Container Registry',
            serverless: 'Cloud Functions, Cloud Run, App Engine'
        }
    },
    alibaba: {
        name: 'Alibaba Cloud',
        regions: [
            { name: 'China (Hangzhou)', code: 'cn-hangzhou', zones: 8 },
            { name: 'China (Shanghai)', code: 'cn-shanghai', zones: 8 },
            { name: 'China (Beijing)', code: 'cn-beijing', zones: 10 },
            { name: 'China (Shenzhen)', code: 'cn-shenzhen', zones: 5 },
            { name: 'Singapore', code: 'ap-southeast-1', zones: 3 },
            { name: 'US (Silicon Valley)', code: 'us-west-1', zones: 2 },
            { name: 'US (Virginia)', code: 'us-east-1', zones: 2 },
            { name: 'Germany (Frankfurt)', code: 'eu-central-1', zones: 2 },
            { name: 'UK (London)', code: 'eu-west-1', zones: 2 },
            { name: 'Japan (Tokyo)', code: 'ap-northeast-1', zones: 2 },
            { name: 'India (Mumbai)', code: 'ap-south-1', zones: 2 },
            { name: 'Australia (Sydney)', code: 'ap-southeast-2', zones: 2 }
        ],
        services: ['ECS', 'OSS', 'RDS', 'Function Compute', 'Container Service', 'Table Store', 'CDN', 'DNS', 'VPC'],
        features: {
            compute: 'ECS, Elastic GPU Service, Simple Application Server',
            storage: 'OSS, Block Storage, NAS, Archive Storage',
            database: 'RDS, PolarDB, MongoDB, Redis',
            networking: 'VPC, CDN, Global Acceleration, Express Connect',
            containers: 'Container Service, Container Registry',
            serverless: 'Function Compute, Serverless Kubernetes'
        }
    },
    oracle: {
        name: 'Oracle Cloud Infrastructure',
        regions: [
            { name: 'US East (Ashburn)', code: 'us-ashburn-1', zones: 3 },
            { name: 'US West (Phoenix)', code: 'us-phoenix-1', zones: 3 },
            { name: 'US West (San Jose)', code: 'us-sanjose-1', zones: 1 },
            { name: 'Canada (Toronto)', code: 'ca-toronto-1', zones: 1 },
            { name: 'Canada (Montreal)', code: 'ca-montreal-1', zones: 1 },
            { name: 'UK South (London)', code: 'uk-london-1', zones: 3 },
            { name: 'Germany Central (Frankfurt)', code: 'eu-frankfurt-1', zones: 3 },
            { name: 'Netherlands (Amsterdam)', code: 'eu-amsterdam-1', zones: 1 },
            { name: 'Japan East (Tokyo)', code: 'ap-tokyo-1', zones: 1 },
            { name: 'Japan Central (Osaka)', code: 'ap-osaka-1', zones: 1 },
            { name: 'South Korea (Seoul)', code: 'ap-seoul-1', zones: 1 },
            { name: 'India West (Mumbai)', code: 'ap-mumbai-1', zones: 1 },
            { name: 'Australia East (Sydney)', code: 'ap-sydney-1', zones: 1 },
            { name: 'Australia Southeast (Melbourne)', code: 'ap-melbourne-1', zones: 1 }
        ],
        services: ['Compute', 'Block Volume', 'Autonomous Database', 'Functions', 'Container Engine', 'Object Storage', 'CDN', 'DNS', 'VCN'],
        features: {
            compute: 'Compute, Bare Metal, VM, GPU',
            storage: 'Object Storage, Block Volume, File Storage, Archive',
            database: 'Autonomous Database, Exadata, MySQL, NoSQL',
            networking: 'VCN, Load Balancing, FastConnect, DNS',
            containers: 'Container Engine for Kubernetes, Container Registry',
            serverless: 'Functions, API Gateway, Events'
        }
    },
    ibm: {
        name: 'IBM Cloud',
        regions: [
            { name: 'Dallas', code: 'us-south', zones: 3 },
            { name: 'Washington DC', code: 'us-east', zones: 3 },
            { name: 'Toronto', code: 'ca-tor', zones: 3 },
            { name: 'London', code: 'eu-gb', zones: 3 },
            { name: 'Frankfurt', code: 'eu-de', zones: 3 },
            { name: 'Tokyo', code: 'jp-tok', zones: 3 },
            { name: 'Sydney', code: 'au-syd', zones: 3 },
            { name: 'São Paulo', code: 'br-sao', zones: 3 }
        ],
        services: ['Virtual Servers', 'Object Storage', 'Databases', 'Functions', 'Kubernetes', 'Watson AI', 'CDN', 'DNS', 'VPC'],
        features: {
            compute: 'Virtual Servers, Bare Metal, Power Systems',
            storage: 'Object Storage, Block Storage, File Storage',
            database: 'Db2, PostgreSQL, MongoDB, Redis',
            networking: 'VPC, CDN, Direct Link, DNS',
            containers: 'Kubernetes Service, OpenShift, Container Registry',
            serverless: 'Cloud Functions, Code Engine'
        }
    }
};

// Pricing data (approximate, for comparison purposes)
const pricingData = {
    compute: {
        aws: { small: 0.0116, medium: 0.0464, large: 0.0928, unit: 'per hour' },
        azure: { small: 0.0120, medium: 0.0480, large: 0.0960, unit: 'per hour' },
        gcp: { small: 0.0095, medium: 0.0380, large: 0.0760, unit: 'per hour' },
        alibaba: { small: 0.0090, medium: 0.0360, large: 0.0720, unit: 'per hour' },
        oracle: { small: 0.0085, medium: 0.0340, large: 0.0680, unit: 'per hour' }
    },
    storage: {
        aws: { standard: 0.023, infrequent: 0.0125, archive: 0.004, unit: 'per GB/month' },
        azure: { hot: 0.0184, cool: 0.010, archive: 0.002, unit: 'per GB/month' },
        gcp: { standard: 0.020, nearline: 0.010, coldline: 0.004, unit: 'per GB/month' },
        alibaba: { standard: 0.020, infrequent: 0.010, archive: 0.003, unit: 'per GB/month' },
        oracle: { standard: 0.0255, infrequent: 0.01, archive: 0.0025, unit: 'per GB/month' }
    },
    database: {
        aws: { small: 0.017, medium: 0.068, large: 0.136, unit: 'per hour' },
        azure: { small: 0.018, medium: 0.072, large: 0.144, unit: 'per hour' },
        gcp: { small: 0.0150, medium: 0.060, large: 0.120, unit: 'per hour' },
        alibaba: { small: 0.014, medium: 0.056, large: 0.112, unit: 'per hour' },
        oracle: { small: 0.016, medium: 0.064, large: 0.128, unit: 'per hour' }
    },
    network: {
        aws: { in: 0, out: 0.09, unit: 'per GB' },
        azure: { in: 0, out: 0.087, unit: 'per GB' },
        gcp: { in: 0, out: 0.085, unit: 'per GB' },
        alibaba: { in: 0, out: 0.080, unit: 'per GB' },
        oracle: { in: 0, out: 0.0085, unit: 'per GB' }
    }
};

// Cloud comparison data
const comparisonData = {
    features: [
        'Global Regions',
        'Availability Zones',
        'Total Services',
        'Free Tier',
        'Support Quality',
        'Documentation',
        'Market Share',
        'Enterprise Focus',
        'Startup Friendly',
        'Multi-region Setup'
    ],
    ratings: {
        aws: {
            'Global Regions': 5,
            'Availability Zones': 5,
            'Total Services': 5,
            'Free Tier': 4,
            'Support Quality': 4,
            'Documentation': 5,
            'Market Share': 5,
            'Enterprise Focus': 5,
            'Startup Friendly': 4,
            'Multi-region Setup': 4
        },
        azure: {
            'Global Regions': 5,
            'Availability Zones': 5,
            'Total Services': 5,
            'Free Tier': 4,
            'Support Quality': 4,
            'Documentation': 4,
            'Market Share': 4,
            'Enterprise Focus': 5,
            'Startup Friendly': 3,
            'Multi-region Setup': 4
        },
        gcp: {
            'Global Regions': 4,
            'Availability Zones': 5,
            'Total Services': 4,
            'Free Tier': 5,
            'Support Quality': 4,
            'Documentation': 5,
            'Market Share': 3,
            'Enterprise Focus': 4,
            'Startup Friendly': 5,
            'Multi-region Setup': 5
        },
        alibaba: {
            'Global Regions': 4,
            'Availability Zones': 4,
            'Total Services': 4,
            'Free Tier': 3,
            'Support Quality': 3,
            'Documentation': 3,
            'Market Share': 3,
            'Enterprise Focus': 4,
            'Startup Friendly': 3,
            'Multi-region Setup': 3
        },
        oracle: {
            'Global Regions': 4,
            'Availability Zones': 3,
            'Total Services': 3,
            'Free Tier': 5,
            'Support Quality': 4,
            'Documentation': 4,
            'Market Share': 2,
            'Enterprise Focus': 5,
            'Startup Friendly': 3,
            'Multi-region Setup': 3
        }
    }
};

// Export data for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cloudProviders, pricingData, comparisonData };
}
