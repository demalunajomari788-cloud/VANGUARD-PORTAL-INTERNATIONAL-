// show/hide section
function showSection(id){
    document.querySelectorAll('section').forEach(sec=>sec.style.display='none');
    document.getElementById(id).style.display='block';
}

// toggle background music
function toggleMusic(){
    const music=document.getElementById('bg-music');
    if(music.paused) music.play(); else music.pause();
}

// voice welcome
function playWelcome(){
    const msg=new SpeechSynthesisUtterance("Welcome to Vanguard Elite Security Portal, Agent.");
    window.speechSynthesis.speak(msg);
}

// Agent login/logout
function agentLogin(){
    const user=document.getElementById('agent-username').value;
    const code=document.getElementById('agent-code').value;
    const dashboard=document.getElementById('agent-dashboard');
    if(user && code){
        dashboard.style.display='block';
        playWelcome();
        alert("Login Successful!");
    } else {
        dashboard.style.display='none';
        alert("Please enter both username and message code.");
    }
}
function logoutAgent(){
    const dashboard=document.getElementById('agent-dashboard');
    dashboard.style.display='none';
    document.getElementById('agent-username').value='';
    document.getElementById('agent-code').value='';
}

// missions
function showMission(m){
    const data={
        "Alpha":"Secure VIP convoy. Follow security SOP at all times.",
        "Bravo":"Cyber intercept operation. Use encrypted channels.",
        "Charlie":"Urban field recon. Gather intel & report promptly.",
        "Delta":"Emergency incident response. Coordinate with HQ."
    };
    const p=document.getElementById('mission-popup');
    p.innerHTML=`<strong>${m}</strong><br>${data[m]}`;
    p.style.display="block";
}

// civilian region
function showRegion(r){
    const info={
        "Middle East":"Officer: Jomari Demaluna<br>Address: Sheikh Zayed Road, Trade Centre, Dubai",
        "Philippines":"Officer: Lorenz Cells<br>Address: 5th Ave Cor 11th St, BGC, Taguig",
        "Indonesia":"Officer: Wendirick Belardo<br>Address: Jl. Thamrin No.88, Jakarta",
        "Japan":"Officer: Takahiro Sato<br>Address: 2‑1 Ginza, Chuo City, Tokyo",
        "China":"Officer: Li Wei<br>Address: East Nanjing Rd, Shanghai",
        "Singapore":"Officer: Shiela Villanueva<br>Address: Orchard Rd, Singapore",
        "US":"Officer: John Smith<br>Address: 350 Fifth Ave, New York",
        "Mexico":"Officer: Elmanuel Oida<br>Address: Av. Juarez 55, Mexico City",
        "North Korea":"Officer: Sofia Nericka Rojo<br>Address: Mansudae St, Pyongyang",
        "Zimbabwe":"Officer: Rose Ann Hilotin<br>Address: Samora Machel Ave, Harare"
    };
    const p=document.getElementById('region-popup');
    p.innerHTML=`<strong>${r} Branch</strong><br>${info[r]}`;
    p.style.display="block";
}

// service coverage
function showCoverage(region){
    const branches={
        "Philippines":["Fort BGC, Taguig","Quezon Ave, Quezon City","Mabini St, Ermita, Manila","Abreeza, Davao City","La Union Blvd, San Fernando"],
        "US":["350 Fifth Ave, NYC","S Sunset Blvd, LA","Michigan Ave, Chicago","Peachtree St, Atlanta","Market St, San Francisco"],
        "Singapore":["Orchard Rd","Marina Bay Sands","Raffles Place","Changi Business Park","Tampines Ave"],
        "Japan":["Shibuya Crossing, Tokyo","Umeda, Osaka","Sapporo Station","Hakata, Fukuoka","Kyoto Central"],
        "China":["East Nanjing Rd, Shanghai","Tiananmen, Beijing","Guangzhou Ave, Guangzhou","Shenzhen CBD","Chengdu Hi-Tech"],
        "Indonesia":["Jl. Thamrin, Jakarta","Bali Kuta","Jl. Sudirman, Bandung","Surabaya Central","Medan Polonia"],
        "Middle East":["Sheikh Zayed Rd, Dubai","King Fahd Rd, Riyadh","Corniche, Abu Dhabi","Salwa Rd, Doha","Al Khobar St"],
        "Mexico":["Av. Juarez, Mexico City","Paseo Montejo, Merida","Av. Insurgentes, Cancun","Av. Universidad, Puebla","Av. Revolucion, Guadalajara"],
        "North Korea":["Pyongyang Central"],
        "Zimbabwe":["Harare CBD","Bulawayo Main"]
    };
    const list=branches[region]||[];
    let html=`<strong>Branches in ${region}</strong><div class='address-list'>`;
    list.forEach(a=>html+=a+"<br>");
    html+="</div>";
    const p=document.getElementById('coverage-popup');
    p.innerHTML=html;
    p.style.display="block";
}

// help desk
function submitHelp(){
    const name=document.getElementById('help-name').value;
    const email=document.getElementById('help-email').value;
    const msg=document.getElementById('help-message').value;
    if(name && email && msg){
        window.location.href=`mailto:demalunajomari16@gmail.com?subject=Help Desk from ${name}&body=Name:${name}%0AEmail:${email}%0AMessage:${msg}`;
    } else alert("Fill all fields.");
}

// Learn more
function showLearn(topic){
    const info={
        "Mission":"Vanguard Elite Security provides strategic global protection and intelligence services with integrity and precision.",
        "History":"Founded in 2010, Vanguard expanded across multiple continents with a network of elite operatives, advanced tech, and unwavering commitment to safety.",
        "Services":"Services include VIP protection, risk assessment, investigation, cyber surveillance, and emergency response tailored to client needs.",
        "Values":"Integrity, vigilance, discretion, innovation, and excellence guide every action and operation at Vanguard Elite Security."
    };
    const p=document.getElementById('learn-popup');
    p.innerHTML=`<strong>${topic}</strong><br>${info[topic]}`;
    p.style.display="block";
}

