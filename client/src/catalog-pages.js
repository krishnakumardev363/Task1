const catalog = window.CATALOG || {};
const values = Object.values(catalog);
const categoryLabels = {iphone:'iPhone', ipad:'iPad', mac:'Mac', airpods:'AirPods'};
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function card(product){
  return `<article class="product-card category-product-card"><div class="product-art"><img src="${product.image}" alt="${esc(product.name)} original concept illustration" loading="lazy"></div><div class="product-card-content"><p class="product-category">${categoryLabels[product.category]}</p><h3>${esc(product.name)}</h3><p>${esc(product.tagline)}</p><small class="feature-line">${esc(product.features)}</small><div class="card-actions"><a class="card-link" href="product.html?id=${product.id}">View product ↗</a><span class="price">From $${product.price.toLocaleString()}</span></div></div></article>`;
}

const categoryPage = document.querySelector('.category-page');
if(categoryPage){
  const category = categoryPage.dataset.category;
  const grid = document.querySelector('#category-grid');
  const search = document.querySelector('#category-search');
  const count = document.querySelector('#result-count');
  const render = () => {
    const query = (search.value || '').trim().toLowerCase();
    const matches = values.filter(product => product.category === category && (`${product.name} ${product.tagline} ${product.features}`.toLowerCase().includes(query)));
    grid.innerHTML = matches.length ? matches.map(card).join('') : '<p class="empty-state">No models match that search. Try a different name or feature.</p>';
    count.textContent = `${matches.length} model${matches.length === 1 ? '' : 's'}`;
  };
  search.addEventListener('input', render);
  render();
}

const detail = document.querySelector('#product-detail');
if(detail){
  const id = new URLSearchParams(location.search).get('id');
  const product = catalog[id] || values[0];
  document.title = `${product.name} — Apple Concept`;
  detail.innerHTML = `<a class="back-link" href="${product.category}.html">← Back to ${categoryLabels[product.category]} collection</a><div class="detail-grid"><div class="detail-visual"><img src="${product.image}" alt="${esc(product.name)} original concept illustration"></div><div class="detail-copy"><p class="eyebrow">${categoryLabels[product.category]} · EDUCATIONAL CONCEPT</p><h1>${esc(product.name)}</h1><p class="detail-tagline">${esc(product.tagline)}</p><p class="detail-description">${esc(product.description)}</p><div class="detail-price">From <strong>$${product.price.toLocaleString()}</strong></div><div class="detail-spec-list">${Object.entries(product.specs).map(([key,value]) => `<div><small>${esc(key)}</small><span>${esc(value)}</span></div>`).join('')}</div><div class="detail-actions"><button class="button button-dark" data-add-cart="${product.id}">Add to cart <span>+</span></button><a class="button button-ghost" href="${product.category}.html">Explore ${categoryLabels[product.category]} <span>↗</span></a></div></div></div><section class="related-products"><p class="eyebrow">MORE IN ${categoryLabels[product.category].toUpperCase()}</p><div class="product-grid">${values.filter(item => item.category === product.category && item.id !== product.id).slice(0,3).map(card).join('')}</div></section>`;
}
