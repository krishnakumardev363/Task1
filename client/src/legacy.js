const assetMap = {"airpods-4": "assets/images/airpods-4.svg", "airpods-lite": "assets/images/airpods-lite.svg", "airpods-max-2": "assets/images/airpods-max-2.svg", "airpods-max-se": "assets/images/airpods-max-se.svg", "airpods-mini": "assets/images/airpods-mini.svg", "airpods-pro-2": "assets/images/airpods-pro-2.svg", "airpods-pro-3": "assets/images/airpods-pro-3.svg", "airpods-spatial": "assets/images/airpods-spatial.svg", "airpods-sport": "assets/images/airpods-sport.svg", "airpods-studio": "assets/images/airpods-studio.svg", "ipad-10": "assets/images/ipad-10.svg", "ipad-air-11": "assets/images/ipad-air-11.svg", "ipad-air-13": "assets/images/ipad-air-13.svg", "ipad-flex": "assets/images/ipad-flex.svg", "ipad-mini-cellular": "assets/images/ipad-mini-cellular.svg", "ipad-mini": "assets/images/ipad-mini.svg", "ipad-pro-11": "assets/images/ipad-pro-11.svg", "ipad-pro-13": "assets/images/ipad-pro-13.svg", "ipad-se": "assets/images/ipad-se.svg", "ipad-studio": "assets/images/ipad-studio.svg", "iphone-12": "assets/images/iphone-12.svg", "iphone-14": "assets/images/iphone-14.svg", "iphone-15-pro": "assets/images/iphone-15-pro.svg", "iphone-15": "assets/images/iphone-15.svg", "iphone-16-pro": "assets/images/iphone-16-pro.svg", "iphone-16": "assets/images/iphone-16.svg", "iphone-17-air": "assets/images/iphone-17-air.svg", "iphone-17-pro-max": "assets/images/iphone-17-pro-max.svg", "iphone-17": "assets/images/iphone-17.svg", "iphone-se": "assets/images/iphone-se.svg", "macbook-air-13": "assets/images/macbook-air-13.svg", "macbook-air-15": "assets/images/macbook-air-15.svg", "macbook-carbon": "assets/images/macbook-carbon.svg", "macbook-flex": "assets/images/macbook-flex.svg", "macbook-max": "assets/images/macbook-max.svg", "macbook-neo": "assets/images/macbook-neo.svg", "macbook-pro-14": "assets/images/macbook-pro-14.svg", "macbook-pro-16": "assets/images/macbook-pro-16.svg", "macbook-se": "assets/images/macbook-se.svg", "macbook-studio": "assets/images/macbook-studio.svg"};
const officialCardImages = {iphone:'assets/official/iphone-official.png', ipad:'assets/official/ipad-official.jpg', mac:'assets/official/mac-official.jpg', airpods:'assets/official/airpods-official.jpg'};

const catalog = [
  ['iphone-17-pro-max','iPhone 17 Pro Max','iphone',1499,'Pro camera system · A19 Pro concept','Titanium build, 48MP camera system, all-day battery'],
  ['iphone-17-air','iPhone 17 Air','iphone',999,'Ultra-thin design · A19 concept','Lightweight frame, edge-to-edge display, spatial audio'],
  ['iphone-17','iPhone 17','iphone',899,'Everyday power · A19 concept','Bright display, advanced camera, fast wireless charging'],
  ['iphone-16-pro','iPhone 16 Pro','iphone',1099,'Pro capture · A18 Pro concept','ProMotion display, titanium finish, cinematic video'],
  ['iphone-16','iPhone 16','iphone',799,'Powerful and personal · A18 concept','Action button, intelligent photography, USB-C'],
  ['iphone-15-pro','iPhone 15 Pro','iphone',999,'Lightweight pro · A17 Pro concept','Grade 5 titanium, customizable button, USB-C'],
  ['iphone-15','iPhone 15','iphone',699,'Colorful essentials · A16 concept','Dynamic Island, 48MP main camera, OLED display'],
  ['iphone-14','iPhone 14','iphone',599,'Reliable everyday phone · A15 concept','Crash detection, dual-camera system, OLED display'],
  ['iphone-12','iPhone 12','iphone',449,'Classic 5G concept · A14 concept','5G connectivity, Ceramic Shield, MagSafe concept'],
  ['iphone-se','iPhone SE Concept','iphone',399,'Compact and capable · SE concept','Pocket-friendly form, Touch ID concept, fast chip'],
  ['ipad-pro-13','iPad Pro 13-inch','ipad',1299,'Studio power · M-series concept','Ultra Retina display, desktop-class apps, Pencil support'],
  ['ipad-pro-11','iPad Pro 11-inch','ipad',999,'Pro power in a compact frame','ProMotion display, M-series concept, Thunderbolt'],
  ['ipad-air-13','iPad Air 13-inch','ipad',799,'Room for every idea','Colorful design, M-series concept, landscape camera'],
  ['ipad-air-11','iPad Air 11-inch','ipad',599,'Light, bright, capable','All-day battery, Pencil support, fast Wi-Fi concept'],
  ['ipad-10','iPad 10th gen','ipad',449,'The everyday iPad concept','Colorful edge-to-edge design, USB-C, stereo speakers'],
  ['ipad-mini','iPad mini','ipad',499,'Small size. Big imagination.','Ultra-portable, Pencil support, compact Liquid display'],
  ['ipad-mini-cellular','iPad mini Cellular','ipad',649,'Ideas that travel','Cellular concept, compact display, all-day battery'],
  ['ipad-studio','iPad Studio Concept','ipad',899,'A creative canvas','Large color-accurate display, studio audio, Pencil Pro concept'],
  ['ipad-flex','iPad Flex Concept','ipad',1099,'A new way to fold space','Flexible display concept, multitasking modes, smart hinge'],
  ['ipad-se','iPad SE Concept','ipad',349,'Simple, capable, accessible','Essential apps, durable design, accessible controls'],
  ['macbook-pro-16','MacBook Pro 16-inch','mac',2499,'Maximum creative power · M-series concept','XDR display, pro ports, studio-grade performance'],
  ['macbook-pro-14','MacBook Pro 14-inch','mac',1999,'Serious power, portable form','Pro display, quiet thermals, long battery life'],
  ['macbook-air-15','MacBook Air 15-inch','mac',1299,'More room to breathe','Fanless design, bright display, immersive speakers'],
  ['macbook-air-13','MacBook Air 13-inch','mac',999,'Thin, light, ready','All-day battery, silent design, instant wake'],
  ['macbook-neo','MacBook Neo Concept','mac',799,'A fresh start for Mac','Lightweight shell, focused workspace, smart battery'],
  ['macbook-studio','MacBook Studio Concept','mac',1699,'Desktop thinking, mobile form','High-performance chip, color workflow, pro connectivity'],
  ['macbook-max','MacBook Max Concept','mac',2999,'The limit is the beginning','Multi-display workflow, maximum memory, advanced cooling'],
  ['macbook-flex','MacBook Flex Concept','mac',1599,'A laptop that adapts','Convertible hinge concept, touch workspace, Pencil input'],
  ['macbook-se','MacBook SE Concept','mac',699,'Essential Mac experience','Reliable performance, accessible price, durable enclosure'],
  ['macbook-carbon','MacBook Carbon Concept','mac',1899,'Lighter by design','Low-impact materials concept, pro battery, quiet keyboard'],
  ['airpods-pro-3','AirPods Pro 3','airpods',249,'Adaptive audio · Pro concept','Adaptive noise control, spatial audio, USB-C case'],
  ['airpods-max-2','AirPods Max 2','airpods',549,'Sound at full scale','Over-ear comfort, high-fidelity drivers, smart case'],
  ['airpods-4','AirPods 4','airpods',129,'Open, effortless sound','Personalized spatial audio, compact case, voice isolation'],
  ['airpods-pro-2','AirPods Pro 2','airpods',199,'Quiet when you need it','Active noise cancellation, transparency mode, MagSafe concept'],
  ['airpods-lite','AirPods Lite Concept','airpods',99,'Simple sound, beautifully made','Lightweight fit, clear calls, long listening time'],
  ['airpods-sport','AirPods Sport Concept','airpods',179,'Made to move','Secure fit, sweat-resistant concept, awareness mode'],
  ['airpods-studio','AirPods Studio Concept','airpods',399,'Your personal listening room','Studio tuning, adaptive comfort, lossless concept'],
  ['airpods-mini','AirPods Mini Concept','airpods',89,'Tiny case, big sound','Ultra-compact design, quick pairing, clear voice pickup'],
  ['airpods-max-se','AirPods Max SE Concept','airpods',349,'Immersive sound for everyone','Comfortable over-ear design, spatial audio, shared listening'],
  ['airpods-spatial','AirPods Spatial Concept','airpods',299,'Sound with a sense of place','Head tracking concept, room-aware audio, adaptive EQ']
];

const categoryLabels = {iphone:'iPhone', ipad:'iPad', mac:'Mac', airpods:'AirPods'};
const productData = Object.fromEntries(catalog.map(([id,name,category,price,tagline,features]) => [id, {
  id,name,category,price,tagline,features,image:officialCardImages[category],description:tagline+'. '+features,  specs:{Category:categoryLabels[category],Highlights:features,Concept:'Apple product visual'}
}]));


const configData = {
  phone:{base:899,label:'iPhone Concept',spec:'iPhone Concept',colors:{violet:'#2f6f9f',silver:'#c9ccd5',graphite:'#383840',coral:'#a36f61'}},
  laptop:{base:1499,label:'MacBook Concept',spec:'MacBook Concept',colors:{violet:'#315e7d',silver:'#c9ccd5',graphite:'#383840',coral:'#a36f61'}},
  watch:{base:399,label:'Apple Watch Concept',spec:'Apple Watch Concept',colors:{violet:'#2f6f9f',silver:'#c9ccd5',graphite:'#383840',coral:'#a36f61'}}
};

window.CATALOG = productData;
document.addEventListener('DOMContentLoaded',()=>{
  const revealItems=[...document.querySelectorAll('.reveal')];
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');if(entry.target.classList.contains('stat-card')){const counter=entry.target.querySelector('[data-count]');if(counter&&!counter.dataset.done){counter.dataset.done='true';const target=Number(counter.dataset.count);let current=0;const step=Math.max(1,Math.ceil(target/34));const tick=()=>{current=Math.min(target,current+step);counter.textContent=current;if(current<target&&!reduceMotion)requestAnimationFrame(tick)};tick()}}}}),{threshold:.14});
  revealItems.forEach(item=>observer.observe(item));
  const sections=[...document.querySelectorAll('main section[id]')], links=[...document.querySelectorAll('.nav-link')];
  const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))}}),{rootMargin:'-40% 0px -50%'});sections.forEach(section=>sectionObserver.observe(section));
  if(!reduceMotion){const hero=document.querySelector('.hero'),sphere=document.querySelector('.sphere');hero.addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*12,y=(e.clientY/innerHeight-.5)*12;sphere.style.transform=`translate(${x}px,${y}px)`});hero.addEventListener('pointerleave',()=>sphere.style.transform='');window.addEventListener('scroll',()=>{const scroll=window.scrollY;sphere.style.marginTop=`${scroll*.12}px`},{passive:true})}
});

document.addEventListener('DOMContentLoaded', () => {
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const body = document.body;
  const header = $('.site-header');
  const toast = $('.toast');
  let toastTimer;

  function showToast(message){ toast.textContent=message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('show'),2800); }
  $$('[data-toast]').forEach(button=>button.addEventListener('click',()=>showToast(button.dataset.toast)));

  const menuToggle=$('.menu-toggle'), navMenu=$('.nav-menu');
  menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!open));navMenu.classList.toggle('open',!open)});
  $$('.nav-link').forEach(link=>link.addEventListener('click',()=>{menuToggle.setAttribute('aria-expanded','false');navMenu.classList.remove('open')}));

  const savedTheme=localStorage.getItem('nova-theme'); if(savedTheme==='dark') body.classList.add('dark');
  $('#theme-toggle').addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('nova-theme',body.classList.contains('dark')?'dark':'light');showToast(`${body.classList.contains('dark')?'Dark':'Light'} mode enabled.`)});
  $('.to-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

  function renderProducts(filter='all', query=''){
    const grid=$('#product-grid'); grid.innerHTML='';
    Object.entries(productData).forEach(([id,p])=>{const haystack=`${p.name} ${p.category} ${p.tagline} ${p.features}`.toLowerCase();if(filter!=='all'&&p.category!==filter)return;if(query&&!haystack.includes(query.toLowerCase()))return; const card=document.createElement('article'); card.className='product-card reveal visible'; card.innerHTML=`<div class="product-image"><img src="${p.image}" alt="${p.name} product image" loading="lazy"></div><div class="product-body"><p class="product-category">${p.category}</p><h3>${p.name}</h3><p>${p.tagline}</p><small class="feature-line">${p.features}</small><div class="card-actions"><a class="card-link details" href="product.html?id=${id}" data-product="${id}">View product ↗</a><button class="card-link add-link" data-add-cart="${id}">Add to cart +</button><span class="price">From $${p.price.toLocaleString()}</span></div></div>`;grid.appendChild(card)});
    $$('.details',grid).forEach(button=>button.addEventListener('contextmenu',event=>{event.preventDefault();openModal(button.dataset.product)}));
  }
  renderProducts();
  let activeFilter='all';$$('.filter').forEach(button=>button.addEventListener('click',()=>{$$('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');activeFilter=button.dataset.filter;renderProducts(activeFilter,$('#product-search')?.value||'')}));$('#product-search')?.addEventListener('input',event=>renderProducts(activeFilter,event.target.value));

  const modal=$('#product-modal');
  function openModal(id){const p=productData[id];$('#modal-kicker').textContent=p.category.toUpperCase();$('#modal-title').textContent=p.name;$('#modal-description').textContent=p.description;$('#modal-art').innerHTML=`<img src="${p.image}" alt="${p.name} product image">`;$('#modal-specs').innerHTML=Object.entries(p.specs).map(([k,v])=>`<span>${k}: ${v}</span>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');$('.modal-close').focus()}
  function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
  $('.modal-close').addEventListener('click',closeModal);$('.modal-backdrop').addEventListener('click',closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

  let config={product:'phone',color:'violet',storage:'256GB'};
  function updateConfig(){const d=configData[config.product];const extra=config.storage==='512GB'?150:config.storage==='1TB'?300:0;$('#config-price').textContent=`$${(d.base+extra).toLocaleString()}`;$('#config-spec').textContent=`${d.spec} · ${config.storage}`;$('.phone-preview').style.background=`linear-gradient(140deg,${d.colors[config.color]},#211a38)`;$('.explorer-panel .eyebrow').textContent=`MAKE IT YOURS · ${d.label.toUpperCase()}`}
  $('#config-product').addEventListener('change',e=>{config.product=e.target.value;updateConfig()});$$('.swatch').forEach(button=>button.addEventListener('click',()=>{$$('.swatch').forEach(b=>b.classList.remove('active'));button.classList.add('active');config.color=button.dataset.color;updateConfig()}));$$('#storage button').forEach(button=>button.addEventListener('click',()=>{$$('#storage button').forEach(b=>b.classList.remove('active'));button.classList.add('active');config.storage=button.dataset.storage;updateConfig()}));$('#reset-config').addEventListener('click',()=>{$('#config-product').value='phone';$$('.swatch').forEach((b,i)=>b.classList.toggle('active',i===0));$$('#storage button').forEach((b,i)=>b.classList.toggle('active',i===0));config={product:'phone',color:'violet',storage:'256GB'};updateConfig();showToast('Configuration reset.')});updateConfig();

  function comparison(){const a=productData[$('#compare-a').value],b=productData[$('#compare-b').value];$('#head-a').textContent=a.name;$('#head-b').textContent=b.name;const rows=[['Starting price',`$${a.price.toLocaleString()}`,`$${b.price.toLocaleString()}`],['Highlights',a.features,b.features],['Category',a.specs.Category,b.specs.Category],['Concept note',a.specs.Concept,b.specs.Concept]];$('#comparison-body').innerHTML=rows.map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join('')}
  $('#compare-a').addEventListener('change',comparison);$('#compare-b').addEventListener('change',comparison);comparison();

  $$('.eco-node').forEach(node=>node.addEventListener('click',()=>{$$('.eco-node').forEach(n=>n.classList.remove('selected'));node.classList.add('selected');$('#eco-detail').textContent=`${node.dataset.eco} is ready when you are—continuity keeps your work, health, and ideas moving.`}));
  $('#contact-form').addEventListener('submit',e=>{e.preventDefault();let valid=true;$$('input,textarea',e.target).forEach(field=>{const wrapper=field.closest('.field');const bad=!field.value.trim()||(field.type==='email'&&!/^\S+@\S+\.\S+$/.test(field.value));wrapper.classList.toggle('invalid',bad);if(bad)valid=false});if(valid){e.target.reset();showToast('Message received. Thank you for reaching out.')}});
  window.addEventListener('scroll',()=>{const y=window.scrollY;header.classList.toggle('scrolled',y>20);$('.to-top').classList.toggle('show',y>700);const max=document.documentElement.scrollHeight-window.innerHeight;$('.scroll-progress').style.width=`${max?y/max*100:0}%`},{passive:true});
});

const cartCatalog = window.CATALOG || {};
const cartKey = 'apple-concept-cart';
const readCart = () => JSON.parse(localStorage.getItem(cartKey) || '[]');
const saveCart = cart => { localStorage.setItem(cartKey, JSON.stringify(cart)); updateCartBadge(); };
const money = value => `$${Number(value).toLocaleString()}`;
function updateCartBadge(){ const count = readCart().reduce((total,item)=>total+item.quantity,0); document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count); }
function addToCart(id){ const product=cartCatalog[id]; if(!product)return; const cart=readCart(); const existing=cart.find(item=>item.id===id); if(existing) existing.quantity+=1; else cart.push({id,quantity:1}); saveCart(cart); showCartToast(`${product.name} added to cart.`); }
function changeQuantity(id, delta){ const cart=readCart(); const item=cart.find(entry=>entry.id===id); if(!item)return; item.quantity+=delta; saveCart(cart.filter(entry=>entry.quantity>0)); renderCartPage(); }
function removeItem(id){ saveCart(readCart().filter(item=>item.id!==id)); renderCartPage(); }
function showCartToast(message){ let toast=document.querySelector('.cart-toast'); if(!toast){toast=document.createElement('div');toast.className='cart-toast';document.body.appendChild(toast)} toast.textContent=message; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),2200); }
function renderCartPage(){ const root=document.querySelector('#cart-root'); if(!root)return; const items=readCart().map(item=>({...item,product:cartCatalog[item.id]})).filter(item=>item.product); if(!items.length){root.innerHTML='<div class="cart-empty"><p class="eyebrow">YOUR CART</p><h1>Nothing here<br><em>yet.</em></h1><p>Your saved products will appear here.</p><a class="button button-dark" href="index.html#products">Explore products <span>↗</span></a></div>';return} const subtotal=items.reduce((total,item)=>total+item.product.price*item.quantity,0); root.innerHTML=`<div class="cart-layout"><div><a class="back-link" href="index.html#products">← Continue shopping</a><p class="eyebrow">YOUR CART</p><h1>Make it<br><em>yours.</em></h1><div class="cart-list">${items.map(item=>`<article class="cart-line"><img src="${item.product.image}" alt="${item.product.name}"><div class="cart-line-copy"><p class="product-category">${item.product.category}</p><h3>${item.product.name}</h3><p>${item.product.tagline}</p><div class="quantity-control"><button data-cart-minus="${item.id}" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-cart-plus="${item.id}" aria-label="Increase quantity">+</button><button class="remove-link" data-cart-remove="${item.id}">Remove</button></div></div><strong>${money(item.product.price*item.quantity)}</strong></article>`).join('')}</div></div><aside class="cart-summary"><p class="eyebrow">SUMMARY</p><div><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div><span>Shipping</span><span>Calculated at checkout</span></div><div class="summary-total"><span>Total</span><strong>${money(subtotal)}</strong></div><a class="button button-dark full" href="checkout.html">Continue to checkout <span>→</span></a><p class="cart-note">Checkout preview. No payment is processed.</p></aside></div>`; }
function renderCheckout(){ const root=document.querySelector('#checkout-root'); if(!root)return; const items=readCart().map(item=>({...item,product:cartCatalog[item.id]})).filter(item=>item.product); if(!items.length){root.innerHTML='<div class="cart-empty"><p class="eyebrow">CHECKOUT</p><h1>Your cart is<br><em>empty.</em></h1><a class="button button-dark" href="index.html#products">Return to products <span>↗</span></a></div>';return} const total=items.reduce((sum,item)=>sum+item.product.price*item.quantity,0); root.innerHTML=`<div class="checkout-layout"><form class="checkout-form" id="checkout-form"><a class="back-link" href="cart.html">← Back to cart</a><p class="eyebrow">CHECKOUT</p><h1>Almost<br><em>there.</em></h1><div class="checkout-fields"><label>Full name<input name="name" required placeholder="Your name"></label><label>Email<input name="email" type="email" required placeholder="you@example.com"></label><label>Shipping address<textarea name="address" required rows="3" placeholder="Your shipping address"></textarea></label></div><button class="button button-dark" type="submit">Place order <span>↗</span></button><p class="cart-note">This checkout preview does not collect payment or submit a real order.</p></form><aside class="cart-summary"><p class="eyebrow">ORDER SUMMARY</p>${items.map(item=>`<div class="summary-item"><span>${item.product.name} × ${item.quantity}</span><strong>${money(item.product.price*item.quantity)}</strong></div>`).join('')}<div class="summary-total"><span>Total</span><strong>${money(total)}</strong></div></aside></div>`; document.querySelector('#checkout-form').addEventListener('submit',event=>{event.preventDefault();document.querySelector('#checkout-form').innerHTML='<div class="success-state"><p class="eyebrow">THANK YOU</p><h2>Your order<br><em>is ready.</em></h2><p>Checkout is complete. No payment was processed.</p><a class="button button-dark" href="index.html">Return home <span>↗</span></a></div>';localStorage.removeItem(cartKey);updateCartBadge();}); }

document.addEventListener('click',event=>{const add=event.target.closest('[data-add-cart]');if(add){event.preventDefault();addToCart(add.dataset.addCart)}const plus=event.target.closest('[data-cart-plus]');if(plus)changeQuantity(plus.dataset.cartPlus,1);const minus=event.target.closest('[data-cart-minus]');if(minus)changeQuantity(minus.dataset.cartMinus,-1);const remove=event.target.closest('[data-cart-remove]');if(remove)removeItem(remove.dataset.cartRemove);});
updateCartBadge(); renderCartPage(); renderCheckout();
