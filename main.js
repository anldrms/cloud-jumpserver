// Main application functionality

// Show cloud details in modal
function showCloudDetails(provider) {
    const modal = document.getElementById('cloudModal');
    const modalBody = document.getElementById('modalBody');
    const data = cloudProviders[provider];
    
    if (!data) {
        alert('Provider information not available');
        return;
    }
    
    let html = `
        <h2>${data.name}</h2>
        <div style="margin: 2rem 0;">
            <h3>Regions (${data.regions.length})</h3>
            <div class="region-grid">
                ${data.regions.map(region => `
                    <div class="region-card">
                        <h4>${region.name}</h4>
                        <p><strong>Code:</strong> ${region.code}</p>
                        <p><strong>Zones:</strong> ${region.zones}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        <div style="margin: 2rem 0;">
            <h3>Key Services</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
                ${data.services.map(service => `
                    <span style="background: var(--card-bg); padding: 0.5rem 1rem; border-radius: 5px;">${service}</span>
                `).join('')}
            </div>
        </div>
        <div style="margin: 2rem 0;">
            <h3>Service Categories</h3>
            ${Object.entries(data.features).map(([category, services]) => `
                <div style="margin: 1rem 0;">
                    <strong style="color: var(--secondary-color);">${category.charAt(0).toUpperCase() + category.slice(1)}:</strong>
                    <p style="color: var(--text-secondary); margin-top: 0.5rem;">${services}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('cloudModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cloudModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Compare pricing
function comparePricing() {
    const serviceType = document.getElementById('serviceType').value;
    const region = document.getElementById('region').value;
    const resultsDiv = document.getElementById('pricingResults');
    
    const data = pricingData[serviceType];
    
    if (!data) {
        resultsDiv.innerHTML = '<p class="error">Pricing data not available for this service type.</p>';
        return;
    }
    
    let html = `
        <h3>Pricing Comparison - ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} (${region})</h3>
        <table class="pricing-table">
            <thead>
                <tr>
                    <th>Provider</th>
    `;
    
    // Get tier names from first provider
    const tiers = Object.keys(data.aws).filter(k => k !== 'unit');
    tiers.forEach(tier => {
        html += `<th>${tier.charAt(0).toUpperCase() + tier.slice(1)}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    // Add rows for each provider
    Object.entries(data).forEach(([provider, prices]) => {
        html += `<tr><td><strong>${provider.toUpperCase()}</strong></td>`;
        tiers.forEach(tier => {
            const price = prices[tier];
            html += `<td>$${price.toFixed(4)} ${prices.unit}</td>`;
        });
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    html += `
        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(255, 170, 0, 0.1); border-radius: 5px;">
            <p class="warning"><strong>Note:</strong> These are approximate prices for comparison purposes. 
            Actual pricing may vary based on region, commitment terms, and volume discounts. 
            Always check the official provider websites for current pricing.</p>
        </div>
    `;
    
    resultsDiv.innerHTML = html;
}

// Compare cloud providers
function compareProviders() {
    const provider1 = document.getElementById('provider1').value;
    const provider2 = document.getElementById('provider2').value;
    const resultsDiv = document.getElementById('comparisonResults');
    
    if (provider1 === provider2) {
        resultsDiv.innerHTML = '<p class="error">Please select two different providers to compare.</p>';
        return;
    }
    
    const data1 = cloudProviders[provider1];
    const data2 = cloudProviders[provider2];
    const ratings1 = comparisonData.ratings[provider1];
    const ratings2 = comparisonData.ratings[provider2];
    
    let html = `
        <h3>Comparison: ${data1.name} vs ${data2.name}</h3>
        <div class="comparison-grid">
            <div class="provider-comparison">
                <h3>${data1.name}</h3>
                <div class="comparison-item">
                    <span class="comparison-label">Regions:</span>
                    ${data1.regions.length} regions
                </div>
                <div class="comparison-item">
                    <span class="comparison-label">Services:</span>
                    ${data1.services.length}+ core services
                </div>
                ${Object.entries(data1.features).map(([category, services]) => `
                    <div class="comparison-item">
                        <span class="comparison-label">${category.charAt(0).toUpperCase() + category.slice(1)}:</span>
                        ${services}
                    </div>
                `).join('')}
            </div>
            <div class="provider-comparison">
                <h3>${data2.name}</h3>
                <div class="comparison-item">
                    <span class="comparison-label">Regions:</span>
                    ${data2.regions.length} regions
                </div>
                <div class="comparison-item">
                    <span class="comparison-label">Services:</span>
                    ${data2.services.length}+ core services
                </div>
                ${Object.entries(data2.features).map(([category, services]) => `
                    <div class="comparison-item">
                        <span class="comparison-label">${category.charAt(0).toUpperCase() + category.slice(1)}:</span>
                        ${services}
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div style="margin-top: 2rem;">
            <h3>Feature Ratings (1-5 scale)</h3>
            <table class="pricing-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>${data1.name}</th>
                        <th>${data2.name}</th>
                        <th>Winner</th>
                    </tr>
                </thead>
                <tbody>
                    ${comparisonData.features.map(feature => {
                        const rating1 = ratings1[feature];
                        const rating2 = ratings2[feature];
                        const winner = rating1 > rating2 ? data1.name : 
                                      rating2 > rating1 ? data2.name : 'Tie';
                        return `
                            <tr>
                                <td>${feature}</td>
                                <td>${'⭐'.repeat(rating1)} (${rating1})</td>
                                <td>${'⭐'.repeat(rating2)} (${rating2})</td>
                                <td><strong>${winner}</strong></td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(0, 204, 153, 0.1); border-radius: 5px;">
            <h4>Summary:</h4>
            <p>Both providers offer excellent cloud services with their own strengths. Consider your specific needs:</p>
            <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
                <li>Choose ${data1.name} if you need ${data1.regions.length > data2.regions.length ? 'more global regions' : 'their specific service ecosystem'}</li>
                <li>Choose ${data2.name} if you prioritize ${data2.regions.length > data1.regions.length ? 'extensive regional coverage' : 'their specialized services'}</li>
                <li>Consider factors like existing infrastructure, team expertise, and specific service requirements</li>
            </ul>
        </div>
    `;
    
    resultsDiv.innerHTML = html;
}

// Load regions for selected provider
function loadRegions() {
    const provider = document.getElementById('cloudProvider').value;
    const regionDiv = document.getElementById('regionInfo');
    const data = cloudProviders[provider];
    
    if (!data) {
        regionDiv.innerHTML = '<p class="error">Region data not available.</p>';
        return;
    }
    
    let html = data.regions.map(region => `
        <div class="region-card">
            <h4>${region.name}</h4>
            <p><strong>Code:</strong> ${region.code}</p>
            <p><strong>Availability Zones:</strong> ${region.zones}</p>
            <p><strong>Status:</strong> <span class="success">Active</span></p>
        </div>
    `).join('');
    
    regionDiv.innerHTML = html;
}

// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Load default regions
    loadRegions();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus terminal
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('terminalInput').focus();
        }
        
        // Escape to close modal
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Add tooltips or additional interactions as needed
    console.log('Cloud Jumpserver Platform Initialized');
    console.log('Version: 1.0.0');
    console.log('Press Ctrl+K to focus terminal');
});

// Utility function to format numbers
function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

// Utility function to format currency
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showCloudDetails,
        closeModal,
        comparePricing,
        compareProviders,
        loadRegions,
        formatNumber,
        formatCurrency
    };
}
