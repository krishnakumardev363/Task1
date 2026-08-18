const assetMap = {"airpods-4": "assets/images/airpods-4.svg", "airpods-lite": "assets/images/airpods-lite.svg", "airpods-max-2": "assets/images/airpods-max-2.svg", "airpods-max-se": "assets/images/airpods-max-se.svg", "airpods-mini": "assets/images/airpods-mini.svg", "airpods-pro-2": "assets/images/airpods-pro-2.svg", "airpods-pro-3": "assets/images/airpods-pro-3.svg", "airpods-spatial": "assets/images/airpods-spatial.svg", "airpods-sport": "assets/images/airpods-sport.svg", "airpods-studio": "assets/images/airpods-studio.svg", "ipad-10": "assets/images/ipad-10.svg", "ipad-air-11": "assets/images/ipad-air-11.svg", "ipad-air-13": "assets/images/ipad-air-13.svg", "ipad-flex": "assets/images/ipad-flex.svg", "ipad-mini-cellular": "assets/images/ipad-mini-cellular.svg", "ipad-mini": "assets/images/ipad-mini.svg", "ipad-pro-11": "assets/images/ipad-pro-11.svg", "ipad-pro-13": "assets/images/ipad-pro-13.svg", "ipad-se": "assets/images/ipad-se.svg", "ipad-studio": "assets/images/ipad-studio.svg", "iphone-12": "assets/images/iphone-12.svg", "iphone-14": "assets/images/iphone-14.svg", "iphone-15-pro": "assets/images/iphone-15-pro.svg", "iphone-15": "assets/images/iphone-15.svg", "iphone-16-pro": "assets/images/iphone-16-pro.svg", "iphone-16": "assets/images/iphone-16.svg", "iphone-17-air": "assets/images/iphone-17-air.svg", "iphone-17-pro-max": "assets/images/iphone-17-pro-max.svg", "iphone-17": "assets/images/iphone-17.svg", "iphone-se": "assets/images/iphone-se.svg", "macbook-air-13": "assets/images/macbook-air-13.svg", "macbook-air-15": "assets/images/macbook-air-15.svg", "macbook-carbon": "assets/images/macbook-carbon.svg", "macbook-flex": "assets/images/macbook-flex.svg", "macbook-max": "assets/images/macbook-max.svg", "macbook-neo": "assets/images/macbook-neo.svg", "macbook-pro-14": "assets/images/macbook-pro-14.svg", "macbook-pro-16": "assets/images/macbook-pro-16.svg", "macbook-se": "assets/images/macbook-se.svg", "macbook-studio": "assets/images/macbook-studio.svg"};
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
  id,name,category,price,tagline,features,image:assetMap[id],description:tagline+'. '+features,  specs:{Category:categoryLabels[category],Highlights:features,Concept:'Original educational visual'}
}]));


const configData = {
  phone:{base:899,label:'iPhone Concept',spec:'iPhone Concept',colors:{violet:'#2f6f9f',silver:'#c9ccd5',graphite:'#383840',coral:'#a36f61'}},
  laptop:{base:1499,label:'MacBook Concept',spec:'MacBook Concept',colors:{violet:'#315e7d',silver:'#c9ccd5',graphite:'#383840',coral:'#a36f61'}},
  watch:{base:399,label:'Apple Watch Concept',spec:'Apple Watch Concept',colors:{violet:'#2f6f9f',silver:'#c9ccd5',graphite:'#383840',coral:'#a36f61'}}
};

window.CATALOG = productData;
