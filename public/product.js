const products = [

    {
        "name": "Lenovo ThinkPad X1 Carbon",
        "brand_name": "Lenovo",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/v14-gen-4/v14-gen-4-01-500x500.webp",
        "description": "Lenovo ThinkPad X1 Carbon is a premium business laptop with a 14-inch FHD display, Intel Core i7 processor, 16GB RAM, and 1TB SSD. Known for its lightweight and durability.",
        "price": 75999,
        "category": "Laptop",
        "ratings": 4.8,
        "date_time": "7/15/2024, 8:05 PM"
    },
    {
        "name": "HP Spectre x360",
        "brand_name": "HP",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/acer/aspire-5-a515-57g-57le/aspire-5-a515-57g-57le-01-500x500.webp",
        "description": "HP Spectre x360 is a convertible laptop featuring a 13.3-inch 4K UHD touchscreen, Intel Core i7 processor, 16GB RAM, and 512GB SSD. It offers flexibility and power for creative users.",
        "price": 72999,
        "category": "Laptop",
        "ratings": 4.7,
        "date_time": "7/27/2024, 11:06 PM"
    },
    {
        "name": "Dell XPS 15",
        "brand_name": "Dell",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/legion-7-16arha7/legion-7-16arha7-06-500x500.webp",
        "description": "Dell XPS 15 features a 15.6-inch 4K UHD display, Intel Core i9 processor, 32GB RAM, and 1TB SSD. It's designed for professionals who need high-end performance and graphics.",
        "price": 79999,
        "category": "Laptop",
        "ratings": 4.9,
        "date_time": "7/25/2024, 2:07 PM"
    },
    {
        "name": "ASUS VivoBook S14",
        "brand_name": "ASUS",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-light-5-14abr8/ideapad-light-5-14abr8-01-500x500.webp",
        "description": "ASUS VivoBook S14 is a stylish and compact laptop with a 14-inch FHD display, Intel Core i5 processor, 8GB RAM, and 512GB SSD. Ideal for students and everyday tasks.",
        "price": 48999,
        "category": "Laptop",
        "ratings": 4.5,
        "date_time": "3/9/2024, 10:08 PM"
    },
    {
        "name": "Acer Nitro 5",
        "brand_name": "Acer",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/legion-slim-5-16ahp9/legion-slim-5-16ahp9-01-500x500.webp",
        "description": "Acer Nitro 5 is a gaming laptop with a 15.6-inch FHD display, AMD Ryzen 7 processor, NVIDIA GeForce GTX 1650, 16GB RAM, and 512GB SSD. Designed for gaming enthusiasts on a budget.",
        "price": 64999,
        "category": "Laptop",
        "ratings": 4.6,
        "date_time": "6/15/2024, 4:29 PM"
    },
    {
        "name": "Apple MacBook Pro 14",
        "brand_name": "Apple",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/msi/modern-14-c12m/modern-14-c12m-01-500x500.webp",
        "description": "Apple MacBook Pro 14 offers a 14-inch Liquid Retina XDR display, Apple M1 Pro chip, 16GB RAM, and 512GB SSD. Perfect for creative professionals needing top-tier performance.",
        "price": 79900,
        "category": "Laptop",
        "ratings": 4.9,
        "date_time": "8/1/2024, 7:51 PM"
    },
    {
        "name": "Microsoft Surface Laptop 5",
        "brand_name": "Microsoft",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-500x500.webp",
        "description": "Microsoft Surface Laptop 5 comes with a 13.5-inch touchscreen, Intel Core i5 processor, 8GB RAM, and 256GB SSD. It combines a sleek design with efficient performance.",
        "price": 68999,
        "category": "Laptop",
        "ratings": 4.7,
        "date_time": "5/17/2024, 9:25 PM"
    },
    {
        "name": "HP Pavilion 14",
        "brand_name": "HP",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/legion-pro-5-16arx8/legion-pro-5-16arx8-01-500x500.webp",
        "description": "The HP Pavilion 14 features a 14-inch FHD display, Intel Core i3 processor, 4GB RAM, and 256GB SSD. It's a reliable option for basic computing tasks and students.",
        "price": 32999,
        "category": "Laptop",
        "ratings": 4.2,
        "date_time": "7/10/2024, 10:34 PM"
    },
    {
        "name": "Lenovo Yoga 7i",
        "brand_name": "Lenovo",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/asus/x515ep/x515ep-01-500x500.webp",
        "description": "Lenovo Yoga 7i is a versatile 2-in-1 laptop with a 14-inch touchscreen, Intel Core i7 processor, 16GB RAM, and 512GB SSD. It offers a flexible experience for work and play.",
        "price": 69999,
        "category": "Laptop",
        "ratings": 4.6,
        "date_time": "7/28/2024, 8:11 PM"
    },
    {
        "name": "ASUS TUF Gaming F15",
        "brand_name": "ASUS",
        "img": "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/thinkpad-l13-gen-4/thinkpad-l13-gen-4-01-500x500.webp",
        "description": "ASUS TUF Gaming F15 is a robust gaming laptop with a 15.6-inch FHD display, Intel Core i5 processor, NVIDIA GeForce RTX 3050, 8GB RAM, and 512GB SSD. Built for durability and performance.",
        "price": 74999,
        "category": "Laptop",
        "ratings": 4.7,
        "date_time": "7/29/2024, 11:23 PM"
    },
    {
        "name": "HP Pavilion Gaming Desktop",
        "brand_name": "HP",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/ryzen-7-5700g-gigabyte-desktop-pc-02-500x500.webp",
        "description": "HP Pavilion Gaming Desktop features an AMD Ryzen 5 processor, NVIDIA GeForce GTX 1660 Super graphics card, 8GB RAM, and 256GB SSD. Ideal for gaming enthusiasts.",
        "price": 65999,
        "category": "Desktop",
        "ratings": 4.5,
        "date_time": "7/23/2024, 12:39 PM"
    },
    {
        "name": "Dell OptiPlex 7080",
        "brand_name": "Dell",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/amd-ryzen-7-5700g-desktop-pc-02-500x500.webp",
        "description": "Dell OptiPlex 7080 is a powerful business desktop with an Intel Core i7 processor, 16GB RAM, and 512GB SSD. Designed for high productivity and efficiency.",
        "price": 74999,
        "category": "Desktop",
        "ratings": 4.7,
        "date_time": "8/3/2024, 2:28 PM"
    },
    {
        "name": "Apple iMac 24-inch",
        "brand_name": "Apple",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/intel-core-i3-12100-12th-gen-desktop-pc-03-500x500.webp",
        "description": "Apple iMac 24-inch features a stunning Retina 4.5K display, Apple M1 chip, 8GB RAM, and 256GB SSD. A sleek and powerful desktop for creative professionals.",
        "price": 84999,
        "category": "Desktop",
        "ratings": 4.8,
        "date_time": "6/8/2024, 7:41 PM"
    },
    {
        "name": "Lenovo ThinkCentre M720",
        "brand_name": "Lenovo",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/10th-gen-core-i3-10105-custom-desktop-pc-500x500.webp",
        "description": "Lenovo ThinkCentre M720 is a reliable desktop with an Intel Core i5 processor, 8GB RAM, and 256GB SSD. It offers solid performance for everyday business tasks.",
        "price": 45999,
        "category": "Desktop",
        "ratings": 4.3,
        "date_time": "6/13/2024, 3:53 PM"
    },
    {
        "name": "Acer Aspire TC-885",
        "brand_name": "Acer",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/10th-gen-core-i3-02-500x500.webp",
        "description": "Acer Aspire TC-885 is a versatile desktop with an Intel Core i3 processor, 8GB RAM, and 1TB HDD. Suitable for home and office use.",
        "price": 32999,
        "category": "Desktop",
        "ratings": 4.2,
        "date_time": "7/15/2024, 8:29 PM"
    },
    {
        "name": "ASUS ROG Strix GA15",
        "brand_name": "ASUS",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/14th-gen-core-i5-14500-custom-desktop-pc-500x500.webp",
        "description": "ASUS ROG Strix GA15 is a high-performance gaming desktop with an AMD Ryzen 7 processor, NVIDIA GeForce RTX 3060, 16GB RAM, and 1TB SSD.",
        "price": 89999,
        "category": "Desktop",
        "ratings": 4.9,
        "date_time": "6/21/2024, 4:27 PM"
    },
    {
        "name": "CyberPowerPC Gamer Xtreme VR",
        "brand_name": "CyberPowerPC",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/intel-core-i3-12100-12th-gen-budget-desktop-pc-02-500x500.webp",
        "description": "CyberPowerPC Gamer Xtreme VR is a gaming desktop with an Intel Core i5 processor, NVIDIA GeForce GTX 1660 graphics card, 8GB RAM, and 500GB SSD. Ready for VR gaming.",
        "price": 57999,
        "category": "Desktop",
        "ratings": 4.6,
        "date_time": "5/16/2024, 11:29 PM"
    },
    {
        "name": "MSI Trident 3 10SI-002US",
        "brand_name": "MSI",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/amd-ryzen-5-5600g-desktop-pc-07-500x500.webp",
        "description": "MSI Trident 3 10SI-002US is a compact gaming desktop with an Intel Core i5 processor, NVIDIA GeForce GTX 1660 Super, 8GB RAM, and 512GB SSD.",
        "price": 69999,
        "category": "Desktop",
        "ratings": 4.7,
        "date_time": "7/18/2024, 4:36 PM"
    },
    {
        "name": "HP EliteDesk 800 G6",
        "brand_name": "HP",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/amd-ryzen-5-2400g-desktop-pc-04-500x500.webp",
        "description": "HP EliteDesk 800 G6 is a business desktop with an Intel Core i7 processor, 16GB RAM, and 512GB SSD. Built for security and reliability.",
        "price": 77999,
        "category": "Desktop",
        "ratings": 4.8,
        "date_time": "4/11/2024, 2:36 PM"
    },
    {
        "name": "Lenovo IdeaCentre 3",
        "brand_name": "Lenovo",
        "img": "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/athlon-3000g-budget-desktop-pc-01-500x500.webp",
        "description": "Lenovo IdeaCentre 3 is a budget-friendly desktop with an AMD Ryzen 3 processor, 8GB RAM, and 1TB HDD. Perfect for home use and basic computing needs.",
        "price": 28999,
        "category": "Desktop",
        "ratings": 4.1,
        "date_time": "6/19/2024, 7:36 PM"
    },
    {
        "name": "Dell UltraSharp U2720Q",
        "brand_name": "Dell",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/dell/e2020h/e2020h-01-500x500.webp",
        "description": "Dell UltraSharp U2720Q features a 27-inch 4K UHD display with an ultra-thin bezel, offering exceptional color accuracy and clarity for professional work.",
        "price": 64999,
        "category": "Monitor",
        "ratings": 4.8,
        "date_time": "8/7/2024, 10:36 PM"
    },
    {
        "name": "ASUS ROG Swift PG259QN",
        "brand_name": "ASUS",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/philips/279m1rv/momentum-279m1rv-500x500.webp",
        "description": "ASUS ROG Swift PG259QN is a 24.5-inch gaming monitor with a 360Hz refresh rate and 1ms response time, designed for competitive gamers who demand the highest performance.",
        "price": 74999,
        "category": "Monitor",
        "ratings": 4.9,
        "date_time": "7/12/2024, 9:36 PM"
    },
    {
        "name": "Samsung Odyssey G7",
        "brand_name": "Samsung",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/samsung/ls19a330nhwxxl/ls19a330nhwxxl-01-500x500.webp",
        "description": "Samsung Odyssey G7 features a 27-inch QHD curved display with a 240Hz refresh rate and 1ms response time, offering an immersive gaming experience.",
        "price": 56999,
        "category": "Monitor",
        "ratings": 4.7,
        "date_time": "6/13/2024, 7:36 PM"
    },
    {
        "name": "LG 34WK95U-W",
        "brand_name": "LG",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/philips/325e8/325e8-01-500x500.webp",
        "description": "LG 34WK95U-W is a 34-inch UltraWide monitor with a 5K2K resolution, providing expansive screen real estate and outstanding detail for multitasking and content creation.",
        "price": 74999,
        "category": "Monitor",
        "ratings": 4.8,
        "date_time": "8/4/2024, 9:36 PM"
    },
    {
        "name": "Acer Predator XB273K",
        "brand_name": "Acer",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/samsung/ls19a330nhwxxl/ls19a330nhwxxl-01-500x500.webp",
        "description": "Acer Predator XB273K is a 27-inch 4K UHD gaming monitor with NVIDIA G-SYNC support and a 144Hz refresh rate, designed for high-performance gaming.",
        "price": 69999,
        "category": "Monitor",
        "ratings": 4.6,
        "date_time": "8/14/2024, 10:38 PM"
    },
    {
        "name": "BenQ PD3220U",
        "brand_name": "BenQ",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/philips/271v8b/271v8b-01-500x500.webp",
        "description": "BenQ PD3220U is a 32-inch 4K UHD monitor with AQCOLOR technology, offering precise color accuracy for creative professionals and designers.",
        "price": 67999,
        "category": "Monitor",
        "ratings": 4.7,
        "date_time": "6/19/2024, 11:15 PM"
    },
    {
        "name": "HP Omen X 27",
        "brand_name": "HP",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/pc-power/pcgm22u/pcgm22u-001-500x500.webp",
        "description": "HP Omen X 27 is a 27-inch gaming monitor with a 240Hz refresh rate, 1ms response time, and AMD FreeSync support, providing a smooth gaming experience.",
        "price": 59999,
        "category": "Monitor",
        "ratings": 4.5,
        "date_time": "6/18/2024, 9:17 PM"
    },
    {
        "name": "Dell S2721DGF",
        "brand_name": "Dell",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/philips/evnia-27m2n5500/evnia-27m2n5500-01-500x500.webp",
        "description": "Dell S2721DGF is a 27-inch QHD monitor with a 165Hz refresh rate and 1ms response time, featuring an IPS panel for vibrant colors and wide viewing angles.",
        "price": 54999,
        "category": "Monitor",
        "ratings": 4.6,
        "date_time": "8/7/2024, 10:15 PM"
    },
    {
        "name": "LG UltraGear 27GN950",
        "brand_name": "LG",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/philips/evnia-24m1n3200za/evnia-24m1n3200za-01-500x500.webp",
        "description": "LG UltraGear 27GN950 is a 27-inch 4K UHD gaming monitor with a 144Hz refresh rate and NVIDIA G-SYNC compatibility, designed for immersive gaming experiences.",
        "price": 74999,
        "category": "Monitor",
        "ratings": 4.8,
        "date_time": "8/2/2024, 3:15 PM"
    },
    {
        "name": "ASUS ProArt PA32UCX",
        "brand_name": "ASUS",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/dell/e1920h/e1920h-01-500x500.jpg",
        "description": "ASUS ProArt PA32UCX is a 32-inch 4K HDR monitor with excellent color accuracy and uniformity, ideal for professional photographers and video editors.",
        "price": 89999,
        "category": "Monitor",
        "ratings": 4.9,
        "date_time": "7/17/2024, 2:34 PM"
    },
    {
        "name": "ViewSonic Elite XG270QG",
        "brand_name": "ViewSonic",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/philips/241v8/221v8-01-500x500.jpg",
        "description": "ViewSonic Elite XG270QG features a 27-inch QHD display with a 165Hz refresh rate, NVIDIA G-SYNC support, and fast 1ms response time, optimized for gaming.",
        "price": 69999,
        "category": "Monitor",
        "ratings": 4.7,
        "date_time": "7/3/2024, 12:15 PM"
    },
    {
        "name": "Philips 275E1S",
        "brand_name": "Philips",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/hp-monitor/v20/v20-500x500.jpg",
        "description": "Philips 275E1S is a 27-inch 4K UHD monitor with an ultra-narrow bezel and excellent color reproduction, designed for multimedia and everyday tasks.",
        "price": 45999,
        "category": "Monitor",
        "ratings": 4.4,
        "date_time": "8/7/2024, 8:15 PM"
    },
    {
        "name": "AOC CQ32G1",
        "brand_name": "AOC",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/xiaomi/redmi-g24-180hz/redmi-g24-180hz-01-500x500.webp",
        "description": "AOC CQ32G1 is a 31.5-inch QHD curved monitor with a 144Hz refresh rate and 1ms response time, providing a dynamic and immersive gaming experience.",
        "price": 49999,
        "category": "Monitor",
        "ratings": 4.5,
        "date_time": "8/9/2024, 2:37 PM"
    },
    {
        "name": "BenQ EX3501R",
        "brand_name": "BenQ",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/xiaomi/redmi-g24/redmi-g24-01-500x500.webp",
        "description": "BenQ EX3501R is a 35-inch ultrawide curved monitor with a 3440x1440 resolution and HDR support, providing a wide and immersive viewing experience for work and play.",
        "price": 64999,
        "category": "Monitor",
        "ratings": 4.6,
        "date_time": "8/4/2024, 2:39 PM"
    },
    {
        "name": "Samsung CRG5",
        "brand_name": "Samsung",
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/value-top/s24ifr100/s24ifr100-01-500x500.webp",
        "description": "Samsung CRG5 is a 27-inch curved gaming monitor with a 240Hz refresh rate and 1ms response time, designed to deliver a smooth and immersive gaming experience.",
        "price": 54999,
        "category": "Monitor",
        "ratings": 4.4,
        "date_time": "5/12/2024, 4:39 PM"
    },
    {
        "name": "Canon EOS R5",
        "brand_name": "Canon",
        "img": "https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/250d/250d-1-500x500.jpg",
        "description": "Canon EOS R5 is a full-frame mirrorless camera with a 45MP sensor, 8K video recording, and advanced autofocus. Ideal for both professional photography and videography.",
        "price": 389999,
        "category": "Camera",
        "ratings": 4.9,
        "date_time": "8/5/2024, 11:45 PM"
    },
    {
        "name": "Nikon Z6 II",
        "brand_name": "Nikon",
        "img": "https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/eos-6d-mark-ii%20/eos-6d-mark-ii-01-500x500.jpg",
        "description": "Nikon Z6 II is a full-frame mirrorless camera with a 24.5MP sensor, dual EXPEED 6 processors, and 4K UHD video recording. Great for versatile shooting needs.",
        "price": 229999,
        "category": "Camera",
        "ratings": 4.7,
        "date_time": "4/15/2024, 11:45 PM"
    },
    {
        "name": "Sony Alpha A7 III",
        "brand_name": "Sony",
        "img": "https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/200d-ii/200d-ii-500x500.jpg",
        "description": "Sony Alpha A7 III is a full-frame mirrorless camera with a 24.2MP sensor, BIONZ X processor, and 4K video capabilities. Known for its excellent low-light performance.",
        "price": 279999,
        "category": "Camera",
        "ratings": 4.8,
        "date_time": "7/19/2024, 8:45 PM"
    },
    {
        "name": "Fujifilm X-T4",
        "brand_name": "Fujifilm",
        "img": "https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/4000d/4000d-1-500x500.jpg",
        "description": "Fujifilm X-T4 is a mirrorless camera with a 26.1MP APS-C sensor, in-body image stabilization, and 4K video recording. It offers excellent color reproduction and a compact design.",
        "price": 179999,
        "category": "Camera",
        "ratings": 4.7,
        "date_time": "7/13/2024, 10:45 PM"
    },
    {
        "name": "Olympus OM-D E-M1 Mark III",
        "brand_name": "Olympus",
        "img": "https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/2000d/2000d-01-500x500.webp",
        "description": "Olympus OM-D E-M1 Mark III is a Micro Four Thirds mirrorless camera with a 20.4MP sensor, advanced image stabilization, and 4K video recording. Ideal for outdoor and travel photography.",
        "price": 149999,
        "category": "Camera",
        "ratings": 4.6,
        "date_time": "6/17/2024, 7:45 PM"
    }

]
