/**
 * VOLT MOTORS - Vehicle Catalog Database
 * High-definition luxury and performance automotive collection
 */

const VEHICLES_DATA = [
  {
    id: "bmw-m4-competition",
    brand: "BMW",
    model: "M4 Competition",
    fullName: "BMW M4 Competition Coupé",
    year: 2024,
    price: 79100,
    bodyType: "Sports",
    fuelType: "Petrol",
    transmission: "8-speed M Steptronic",
    drivetrain: "Rear-Wheel Drive / M xDrive",
    hp: 503,
    torque: "650 Nm",
    acceleration: "3.4s",
    topSpeed: "290 km/h",
    engine: "3.0L BMW M TwinPower Turbo Inline 6-Cylinder",
    efficiency: "10.1 L/100km",
    isFeatured: true,
    isNew: true,
    tag: "High Performance",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The BMW M4 Competition Coupé represents the peak of motorsport engineering adapted for the road. Featuring a high-revving M TwinPower Turbo inline-6 engine producing 503 horsepower, track-tuned adaptive M suspension, and aggressive carbon fiber aerodynamics.",
    specs: {
      power: "503 HP @ 6,250 RPM",
      torque: "650 Nm @ 2,750 - 5,500 RPM",
      zeroToHundred: "3.4 seconds",
      topSpeed: "290 km/h (M Driver's Package)",
      curbWeight: "1,725 kg",
      cargoCapacity: "440 Liters",
      fuelCapacity: "59 Liters"
    },
    features: [
      "Carbon Fiber Roof & M Carbon Bucket Seats",
      "Harman Kardon Surround Sound System",
      "Adaptive M Suspension with active differential",
      "BMW Curved Display with M-specific iDrive 8.5",
      "M Drive Professional with 10-stage traction control",
      "Active Driving Assistant Pro with 360° cameras"
    ]
  },
  {
    id: "porsche-911-gt3-rs",
    brand: "Porsche",
    model: "911 GT3 RS",
    fullName: "Porsche 911 GT3 RS (992)",
    year: 2024,
    price: 223800,
    bodyType: "Sports",
    fuelType: "Petrol",
    transmission: "7-speed Porsche Doppelkupplung (PDK)",
    drivetrain: "Rear-Wheel Drive",
    hp: 518,
    torque: "465 Nm",
    acceleration: "3.0s",
    topSpeed: "296 km/h",
    engine: "4.0L Naturally Aspirated Boxer 6-Cylinder",
    efficiency: "13.4 L/100km",
    isFeatured: true,
    isNew: true,
    tag: "Track Weapon",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Uncompromised motorsport technology for road and track. With active DRS aerodynamics, central radiator concept, and 518 hp naturally aspirated flat-six revving to 9,000 RPM, the 911 GT3 RS redefines driver engagement.",
    specs: {
      power: "518 HP @ 8,500 RPM",
      torque: "465 Nm @ 6,300 RPM",
      zeroToHundred: "3.0 seconds",
      topSpeed: "296 km/h",
      curbWeight: "1,450 kg",
      cargoCapacity: "132 Liters",
      fuelCapacity: "64 Liters"
    },
    features: [
      "Active Aerodynamic Drag Reduction System (DRS)",
      "Weissach Package Carbon Anti-roll Bars",
      "Club Sport Package with Titanium Roll Cage",
      "Steering-wheel mounted rotary dials for suspension & differential",
      "Porsche Ceramic Composite Brakes (PCCB)",
      "Lightweight magnesium forged wheels"
    ]
  },
  {
    id: "audi-rs-etron-gt",
    brand: "Audi",
    model: "RS e-tron GT",
    fullName: "Audi RS e-tron GT Carbon Black",
    year: 2024,
    price: 106500,
    bodyType: "Electric",
    fuelType: "Electric",
    transmission: "2-speed Automatic (Rear axle)",
    drivetrain: "electric quattro All-Wheel Drive",
    hp: 637,
    torque: "830 Nm",
    acceleration: "3.1s",
    topSpeed: "250 km/h",
    engine: "Dual Permanently Excited Synchronous Motors (93.4 kWh)",
    efficiency: "472 km Range (WLTP)",
    isFeatured: true,
    isNew: false,
    tag: "Electric Grand Tourer",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Audi RS e-tron GT combines breathtaking sculptural proportions with instant electric thrust. Delivering 637 horsepower in boost mode and 800-volt charging capability, it represents the modern pinnacle of silent high-speed touring.",
    specs: {
      power: "637 HP (Boost Mode)",
      torque: "830 Nm Instant Torque",
      zeroToHundred: "3.1 seconds",
      topSpeed: "250 km/h (electronically limited)",
      batteryCapacity: "93.4 kWh (800V Architecture)",
      range: "472 km WLTP",
      fastCharging: "5% to 80% in 22.5 mins (270 kW DC)"
    },
    features: [
      "800-Volt ultra-fast DC charging architecture",
      "Three-chamber adaptive air suspension",
      "All-wheel steering with dynamic torque vectoring",
      "Bang & Olufsen 3D Premium Sound System",
      "Matrix LED Headlights with Audi Laser Light",
      "e-tron Sport Sound acoustic engineering"
    ]
  },
  {
    id: "mercedes-amg-g63",
    brand: "Mercedes-AMG",
    model: "G 63",
    fullName: "Mercedes-AMG G 63 Magno Edition",
    year: 2024,
    price: 179000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "AMG SPEEDSHIFT TCT 9G",
    drivetrain: "AMG Performance 4MATIC (All-Wheel Drive)",
    hp: 577,
    torque: "850 Nm",
    acceleration: "4.5s",
    topSpeed: "240 km/h",
    engine: "Handcrafted AMG 4.0L V8 Biturbo",
    efficiency: "14.4 L/100km",
    isFeatured: true,
    isNew: true,
    tag: "Iconic Luxury SUV",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The timeless silhouette of the G-Class imbued with untamed AMG V8 twin-turbocharged power. Exceptional off-road capabilities paired with bespoke handcrafted Nappa leather luxury.",
    specs: {
      power: "577 HP @ 6,000 RPM",
      torque: "850 Nm @ 2,500 - 3,500 RPM",
      zeroToHundred: "4.5 seconds",
      topSpeed: "240 km/h",
      curbWeight: "2,560 kg",
      towingCapacity: "3,500 kg",
      groundClearance: "241 mm"
    },
    features: [
      "Three 100% Differential Locks",
      "AMG RIDE CONTROL suspension with active damping",
      "AMG Performance Exhaust System with side pipes",
      "Burmester High-End 3D Surround Sound",
      "Superior Line Interior with diamond-quilted Nappa leather",
      "22-inch AMG forged cross-spoke wheels"
    ]
  },
  {
    id: "lucid-air-sapphire",
    brand: "Lucid",
    model: "Air Sapphire",
    fullName: "Lucid Air Sapphire Tri-Motor",
    year: 2024,
    price: 249000,
    bodyType: "Electric",
    fuelType: "Electric",
    transmission: "Single-speed Direct Drive",
    drivetrain: "Tri-Motor Torque-Vectoring All-Wheel Drive",
    hp: 1234,
    torque: "1940 Nm",
    acceleration: "1.89s",
    topSpeed: "330 km/h",
    engine: "Tri-Motor Electric Drive Unit (118 kWh)",
    efficiency: "687 km Range (EPA)",
    isFeatured: true,
    isNew: true,
    tag: "Super Sedan EV",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The world's first luxury electric super-sports sedan. With 1,234 horsepower, zero-to-sixty in under two seconds, and over 400 miles of range, Lucid Air Sapphire sets an entirely new benchmark for performance.",
    specs: {
      power: "1,234 HP",
      torque: "1,940 Nm",
      zeroToHundred: "1.89 seconds",
      topSpeed: "330 km/h",
      range: "687 km (EPA Est.)",
      quarterMile: "8.95 sec @ 254 km/h",
      batteryCapacity: "118 kWh"
    },
    features: [
      "Torque-Vectoring Twin Rear Motor Unit",
      "Track-tuned carbon-ceramic brakes (420mm front discs)",
      "Glass Canopy electrochromic panoramic roof",
      "34-inch 5K Glass Cockpit floating display",
      "21-speaker Surreal Sound Pro spatial audio",
      "DreamDrive Pro ADAS with 32 sensors and LiDAR"
    ]
  },
  {
    id: "aston-martin-db12",
    brand: "Aston Martin",
    model: "DB12",
    fullName: "Aston Martin DB12 Super Tourer",
    year: 2024,
    price: 245000,
    bodyType: "Luxury",
    fuelType: "Petrol",
    transmission: "8-speed Automatic with Electronic Rear Diff",
    drivetrain: "Rear-Wheel Drive",
    hp: 671,
    torque: "800 Nm",
    acceleration: "3.5s",
    topSpeed: "325 km/h",
    engine: "4.0L Twin-Turbocharged V8",
    efficiency: "12.2 L/100km",
    isFeatured: true,
    isNew: true,
    tag: "Super Tourer",
    image: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Defining a new genre: The World's First Super Tourer. Aston Martin DB12 pairs athletic elegance with blistering twin-turbo performance and a handcrafted bespoke digital cabin.",
    specs: {
      power: "671 HP @ 6,000 RPM",
      torque: "800 Nm @ 2,750 - 6,000 RPM",
      zeroToHundred: "3.5 seconds",
      topSpeed: "325 km/h",
      curbWeight: "1,685 kg",
      weightDistribution: "48:52 Front/Rear",
      fuelCapacity: "78 Liters"
    },
    features: [
      "Next-generation Aston Martin In-house Infotainment",
      "Intelligent Adaptive Bilstein DTX dampers",
      "Electronic Rear Differential (E-Diff)",
      "Bowers & Wilkins 1,170W 15-speaker Audio",
      "Hand-stitched Bridge of Weir aromatic leather",
      "21-inch Michelin Pilot Sport 5S bespoke tires"
    ]
  },
  {
    id: "porsche-taycan-turbo-s",
    brand: "Porsche",
    model: "Taycan Turbo S",
    fullName: "Porsche Taycan Turbo S Cross Turismo",
    year: 2024,
    price: 197500,
    bodyType: "Electric",
    fuelType: "Electric",
    transmission: "2-speed Automatic Transmission",
    drivetrain: "All-Wheel Drive",
    hp: 750,
    torque: "1050 Nm",
    acceleration: "2.7s",
    topSpeed: "260 km/h",
    engine: "Dual Permanent Magnet Synchronous Motors (93.4 kWh)",
    efficiency: "452 km Range (WLTP)",
    isFeatured: false,
    isNew: true,
    tag: "High Electric Utility",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The soul of a Porsche sports car combined with the versatility of an all-road touring body and zero emissions. Launch control unlocks 750 horsepower of instant catapult acceleration.",
    specs: {
      power: "750 HP (Overboost with Launch Control)",
      torque: "1,050 Nm Overboost Torque",
      zeroToHundred: "2.7 seconds",
      topSpeed: "260 km/h",
      range: "452 km (WLTP)",
      fastCharging: "10% to 80% in 21 mins",
      cargoCapacity: "1,212 Liters (Seats folded)"
    },
    features: [
      "Adaptive Air Suspension with Smart Lift",
      "Porsche Dynamic Chassis Control Sport (PDCC Sport)",
      "Off-road Design Package with increased ground clearance",
      "Passenger Touchscreen Display Integration",
      "Burmester 3D High-End Surround Sound System",
      "Porsche Electric Sport Sound"
    ]
  },
  {
    id: "bmw-i7-m70",
    brand: "BMW",
    model: "i7 M70 xDrive",
    fullName: "BMW i7 M70 xDrive Luxury Sedan",
    year: 2024,
    price: 168500,
    bodyType: "Luxury",
    fuelType: "Electric",
    transmission: "Single-speed Automatic",
    drivetrain: "BMW xDrive Intelligent All-Wheel Drive",
    hp: 650,
    torque: "1100 Nm",
    acceleration: "3.5s",
    topSpeed: "250 km/h",
    engine: "Dual High-Efficiency M eDrive Motors (101.7 kWh)",
    efficiency: "560 km Range (WLTP)",
    isFeatured: false,
    isNew: true,
    tag: "Flagship Luxury",
    image: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The most powerful all-electric BMW ever built. A theatre on wheels featuring a 31.3-inch 8K BMW Theatre Screen, Executive Lounge Seating, and crystal headlight illumination.",
    specs: {
      power: "650 HP in M Launch Control",
      torque: "1,100 Nm in M Sport Boost",
      zeroToHundred: "3.5 seconds",
      topSpeed: "250 km/h",
      range: "560 km (WLTP)",
      batteryCapacity: "101.7 kWh",
      fastCharging: "170 km range added in 10 mins (195 kW)"
    },
    features: [
      "31.3-inch BMW Theatre Screen in rear with Amazon Fire TV",
      "Bowers & Wilkins Diamond 4D Surround Sound (39 speakers)",
      "Executive Lounge Seating with reclining massage seats",
      "BMW Interaction Bar with dynamic ambient light crystals",
      "Automatic opening & closing luxury comfort doors",
      "Integral Active Steering with Executive Drive Pro"
    ]
  },
  {
    id: "range-rover-sv",
    brand: "Range Rover",
    model: "SV Autobiography",
    fullName: "Range Rover SV Autobiography Long Wheelbase",
    year: 2024,
    price: 218300,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "8-speed Automatic with CommandShift",
    drivetrain: "Intelligent All-Wheel Drive (iAWD)",
    hp: 606,
    torque: "750 Nm",
    acceleration: "4.4s",
    topSpeed: "261 km/h",
    engine: "4.4L Twin-Turbocharged V8 Mild Hybrid",
    efficiency: "11.7 L/100km",
    isFeatured: false,
    isNew: false,
    tag: "Presidential SUV",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The pinnacle of British luxury and peerless refinement. Offering SV Signature Suite 4-seat configuration with electrically deployable club table and refrigerated compartment.",
    specs: {
      power: "606 HP @ 5,500 RPM",
      torque: "750 Nm @ 1,800 - 5,000 RPM",
      zeroToHundred: "4.4 seconds",
      topSpeed: "261 km/h",
      curbWeight: "2,620 kg",
      towingCapacity: "3,500 kg",
      wadingDepth: "900 mm"
    },
    features: [
      "SV Signature Suite 4-Seat Executive Architecture",
      "Tailgate Event Suite with leather cushions & speakers",
      "Meridian Signature Sound System with Active Noise Cancellation",
      "Ceramic interior gear shifter and controls",
      "Electronic Air Suspension with Dynamic Response Pro",
      "All-Wheel Steering for 10.9m turning circle"
    ]
  },
  {
    id: "mercedes-amg-gt-63-s",
    brand: "Mercedes-AMG",
    model: "GT 63 S E",
    fullName: "Mercedes-AMG GT 63 S E Performance 4-Door",
    year: 2024,
    price: 180000,
    bodyType: "Sedan",
    fuelType: "Hybrid",
    transmission: "AMG SPEEDSHIFT MCT 9G",
    drivetrain: "AMG Performance 4MATIC+",
    hp: 831,
    torque: "1400 Nm",
    acceleration: "2.8s",
    topSpeed: "316 km/h",
    engine: "4.0L V8 Biturbo + Electric Motor (F1 Hybrid Tech)",
    efficiency: "7.9 L/100km",
    isFeatured: false,
    isNew: true,
    tag: "F1-Derived Hybrid",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Formula 1 hybrid powertrain technology on the road. Combining a handcrafted 4.0L Biturbo V8 with an ultra-lightweight direct-cooled battery for a staggering 831 combined horsepower.",
    specs: {
      power: "831 Combined HP",
      torque: "1,400 Nm System Torque",
      zeroToHundred: "2.8 seconds",
      topSpeed: "316 km/h",
      curbWeight: "2,380 kg",
      batteryCapacity: "6.1 kWh High-Performance Battery",
      electricRange: "12 km Zero-Emission City Mode"
    },
    features: [
      "AMG Performance 4MATIC+ with Drift Mode",
      "AMG Ceramic High-Performance Composite Brakes",
      "AMG RIDE CONTROL+ multi-chamber air suspension",
      "Aerodynamics Package with active rear wing",
      "AMG Track Pace telemetry logger",
      "Burmester Surround Sound with AMG Sound Experience"
    ]
  },
  {
    id: "tesla-model-s-plaid",
    brand: "Tesla",
    model: "Model S Plaid",
    fullName: "Tesla Model S Plaid Tri-Motor",
    year: 2024,
    price: 89990,
    bodyType: "Sedan",
    fuelType: "Electric",
    transmission: "Single-speed Direct Drive",
    drivetrain: "Tri-Motor All-Wheel Drive with Carbon Sleeves",
    hp: 1020,
    torque: "1420 Nm",
    acceleration: "1.99s",
    topSpeed: "322 km/h",
    engine: "Tri-Motor Electric Powertrain with Carbon-Sleeved Rotors",
    efficiency: "600 km Range (EPA)",
    isFeatured: false,
    isNew: false,
    tag: "Tri-Motor Hyper-Sedan",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Sub-two-second acceleration in a full-sized luxury sedan. Plaid features three high-performance carbon-sleeved motors delivering continuous power output up to 322 km/h.",
    specs: {
      power: "1,020 HP Peak Power",
      torque: "1,420 Nm Instant Torque",
      zeroToHundred: "1.99 seconds",
      topSpeed: "322 km/h (with Track Package)",
      range: "600 km (EPA)",
      dragCoefficient: "0.208 Cd",
      quarterMile: "9.23 seconds @ 250 km/h"
    },
    features: [
      "17-inch cinematic tilt touchscreen with 10 teraflops gaming",
      "Yoke or Round steering with capacitive touch controls",
      "Tri-zone climate control with HEPA filtration",
      "22-speaker 960W audio system with Active Road Noise Cancelling",
      "Full Self-Driving Capability hardware suite",
      "Torque Vectoring with carbon-wrapped rotors"
    ]
  },
  {
    id: "ferrari-296-gtb",
    brand: "Ferrari",
    model: "296 GTB",
    fullName: "Ferrari 296 GTB Assetto Fiorano",
    year: 2024,
    price: 322986,
    bodyType: "Sports",
    fuelType: "Hybrid",
    transmission: "8-speed F1 Dual-Clutch Transmission",
    drivetrain: "Rear-Wheel Drive",
    hp: 819,
    torque: "740 Nm",
    acceleration: "2.9s",
    topSpeed: "330 km/h",
    engine: "3.0L 120° V6 Twin-Turbo + Plug-in Electric Motor",
    efficiency: "6.4 L/100km",
    isFeatured: false,
    isNew: true,
    tag: "Hybrid Supercar",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The evolution of the mid-rear-engined two-seater sports berlinetta concept from Maranello. A 120° V6 turbo engine paired with an electric motor produces a thrilling 819 hp symphony.",
    specs: {
      power: "819 Combined HP @ 8,000 RPM",
      torque: "740 Nm @ 6,250 RPM",
      zeroToHundred: "2.9 seconds",
      topSpeed: "330 km/h",
      curbWeight: "1,470 kg (with Assetto Fiorano pack)",
      electricRange: "25 km (eDrive Mode)",
      fioranoLapTime: "1' 21.0\""
    },
    features: [
      "Assetto Fiorano Track Package with Multimatic shock absorbers",
      "Carbon-fiber high-downforce front flaps & rear diffuser",
      "Ferrari Dynamic Enhancer 2.0 with ABS evo 6-way chassis sensor",
      "Full digital cockpit with capacitive steering wheel",
      "Titanium sport exhaust system with central exit",
      "Carbon fiber racing seats with 4-point harnesses"
    ]
  }
];

const CATEGORIES_DATA = [
  {
    id: "suv",
    name: "SUV",
    title: "LUXURY & PERFORMANCE SUVs",
    count: "4 Models Available",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=800&q=80",
    filterKey: "SUV"
  },
  {
    id: "sedan",
    name: "SEDAN",
    title: "EXECUTIVE & SPORT SEDANS",
    count: "3 Models Available",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    filterKey: "Sedan"
  },
  {
    id: "sports",
    name: "SPORTS",
    title: "HIGH PERFORMANCE COUPÉS",
    count: "5 Models Available",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    filterKey: "Sports"
  },
  {
    id: "electric",
    name: "ELECTRIC",
    title: "NEXT-GEN EV ARCHITECTURE",
    count: "4 Models Available",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
    filterKey: "Electric"
  },
  {
    id: "luxury",
    name: "LUXURY",
    title: "BESPOKE GRAND TOURERS",
    count: "3 Models Available",
    image: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=800&q=80",
    filterKey: "Luxury"
  }
];

const CONFIGURATOR_DATA = {
  baseCar: {
    id: "volt-custom-m4",
    name: "BMW M4 Competition Coupé",
    basePrice: 79100,
    specs: {
      power: "503 HP",
      acceleration: "3.4s (0-100)",
      topSpeed: "290 km/h"
    }
  },
  colors: [
    {
      id: "stealth-black",
      name: "Obsidian Black Metallic",
      colorCode: "#0f1012",
      price: 0,
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "volt-cyan",
      name: "Volt Frozen Cyan",
      colorCode: "#00b4d8",
      price: 2400,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "alpine-white",
      name: "Alpine Pure White",
      colorCode: "#eef2f5",
      price: 0,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "daytona-grey",
      name: "Daytona Matte Grey",
      colorCode: "#4a4e54",
      price: 1800,
      image: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "isle-green",
      name: "Isle of Man Emerald",
      colorCode: "#0d3b2f",
      price: 2900,
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  wheels: [
    {
      id: "w-20-forged",
      name: "20\" M Forged Graphite 826M",
      price: 0,
      desc: "Lightweight forged alloy with diamond cut lip"
    },
    {
      id: "w-21-aero",
      name: "21\" Aero Carbon Bi-Color",
      price: 3200,
      desc: "Aerodynamic carbon-composite blades for high-speed stability"
    },
    {
      id: "w-20-spoke",
      name: "20\" Multi-Spoke Gloss Jet Black",
      price: 1500,
      desc: "Ultra-deep concave profile with track gloss finish"
    }
  ],
  interiors: [
    {
      id: "int-black",
      name: "Black Full Merino Leather",
      price: 0,
      color: "#181818",
      desc: "Supple perforated leather with Anthracite Alcantara headliner"
    },
    {
      id: "int-cyan",
      name: "Silverstone & Cyan Contrast Stitching",
      price: 2100,
      color: "#d4dfe6",
      desc: "Two-tone sport leather with electric cyan accent piping"
    },
    {
      id: "int-orange",
      name: "Kyalami Orange & Carbon Inserts",
      price: 2800,
      color: "#d95d1e",
      desc: "Track-inspired motorsport heritage orange with matte carbon weave"
    }
  ],
  packages: [
    {
      id: "pkg-carbon",
      name: "M Carbon Exterior & Track Pack",
      price: 8500,
      desc: "Carbon front inlets, rear diffuser, spoiler, and Carbon Bucket Seats (-9.6kg)"
    },
    {
      id: "pkg-executive",
      name: "Executive & Tech Suite",
      price: 4200,
      desc: "Head-Up Display, Gesture Control, Remote Engine Start & Laser Lights"
    },
    {
      id: "pkg-sound",
      name: "Bowers & Wilkins Diamond 3D Sound",
      price: 3600,
      desc: "16-speaker 1,400W system with active noise cancellation"
    }
  ]
};

const REVIEWS_DATA = [
  {
    id: 1,
    rating: 5,
    quote: "The purchasing experience at VOLT MOTORS sets a new standard for luxury automotive. Transparent pricing, zero pressure, and the vehicle was delivered in immaculate showroom condition.",
    author: "Alexander Wright",
    role: "Verified Owner",
    vehicle: "Porsche 911 GT3 RS",
    location: "Zurich / London",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    rating: 5,
    quote: "From customizing my BMW M4 in the online studio to taking delivery within ten days, everything was seamless. The test-drive at my home was punctual and effortless.",
    author: "Elena Rostova",
    role: "Verified Owner",
    vehicle: "BMW M4 Competition Coupé",
    location: "Monaco",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    rating: 5,
    quote: "VOLT MOTORS understood exactly what I was looking for in a high-performance EV. The Audi RS e-tron GT exceeded every expectation. True professionals.",
    author: "Marcus Vance",
    role: "Verified Owner",
    vehicle: "Audi RS e-tron GT Carbon",
    location: "Munich",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];
