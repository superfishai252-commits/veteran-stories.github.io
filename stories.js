// Demo stories used in timeline and map pages
const demoStories = [
  {
    id: 1,
    name: "Ethan M. Calloway",
    displayName: "Staff Sergeant Ethan Calloway (Ret.)",
    branch: "Army",
    rank: "Sergeant First Class",
    conflict: "World War II",
    yearFrom: "1943",
    yearTo: "1946",
    location: "Normandy, France",
    lat: 49.4426,
    lng: 0.6393,
    unit: "101st Airborne Division",
    story: "I jumped into Normandy on D-Day, June 6, 1944. The sky was black with flares, and every man was praying. We landed miles off target, but we regrouped and pushed inland. I'll never forget the look of the hedgerows — perfect cover for the Germans, but we climbed through them anyway. The silence after the battle was worse than the noise. Hundreds of faces I'd shared a bunk with, gone in an afternoon."
  },
  {
    id: 2,
    name: "James R. Whitfield",
    displayName: "Chief Petty Officer James Whitfield (Ret.)",
    branch: "Navy",
    rank: "Chief Petty Officer",
    conflict: "World War II",
    yearFrom: "1942",
    yearTo: "1945",
    location: "Pacific Ocean (Midway)",
    lat: 28.2144,
    lng: -177.3107,
    unit: "USS Enterprise (CV-6)",
    story: "I was on the Enterprise during the Battle of Midway. When the dive bombers came in, the sky filled with planes — ours and the Jap's. We took hits on our own deck and had to keep flying. By the end of the battle, three of their carriers were burning. I lost my best friend that day. We were all kids — sixteen, seventeen — thrust into the biggest naval battle in history."
  },
  {
    id: 3,
    name: "Robert A. Kimball",
    displayName: "Major Robert Kimball (Ret.)",
    branch: "Air Force",
    rank: "Major",
    conflict: "Korean War",
    yearFrom: "1951",
    yearTo: "1953",
    location: "Chosin Reservoir, Korea",
    lat: 40.48,
    lng: 127.43,
    unit: "31st Fighter-Interceptor Wing",
    story: "We flew supply missions into the Chosin Reservoir while temperatures dropped to forty below. The roads were mined, the runways under fire. I watched C-119s come in with their landing gear torn off and still try to set down. We dropped supplies by parachute because nobody could reach the surrounded Marines. The cold was a enemy in itself — fuel froze in the lines, guns would jam from the frost."
  },
  {
    id: 4,
    name: "William T. Delaney",
    displayName: "Private First Class William Delaney (Ret.)",
    branch: "Army",
    rank: "Private First Class",
    conflict: "Vietnam War",
    yearFrom: "1968",
    yearTo: "1969",
    location: "Cu Chi, Vietnam",
    lat: 11.1278,
    lng: 106.4878,
    unit: "1st Cavalry Division, Airmobile",
    story: "I was nineteen when I landed in Vietnam. The jungle was alive — insects, snakes, the constant drip of water. We spent more time in the canopy than on the ground. I'll never forget our first firefight in the Cu Chi tunnels. The Viet Cong had built an entire underground city down there. We couldn't fight what we couldn't see. That war taught me about fear, about friendship, and about the weight of carrying a rifle in a country that didn't want us there."
  },
  {
    id: 5,
    name: "Marcus D. Richardson",
    displayName: "Staff Sergeant Marcus Richardson (Ret.)",
    branch: "Marines",
    rank: "Staff Sergeant",
    conflict: "Gulf War",
    yearFrom: "1990",
    yearTo: "1991",
    location: "Iraqi-Kuwaiti Border",
    lat: 29.3759,
    lng: 47.9774,
    unit: "1st Marine Division",
    story: "In the desert, the heat hit you like a hammer. We dug in on the Kuwaiti border and waited for the ground offensive that everyone said would last forty-eight hours. We had night-vision gear that looked like science fiction — everything green and ghostly. When we went in, the Iraqi army just fell apart. But in the retreat, they lit the oil wells on fire. Thousands of them. Black smoke everywhere. It was beautiful and terrible at the same time."
  },
  {
    id: 6,
    name: "Daniel P. Reyes",
    displayName: "Captain Daniel Reyes (Ret.)",
    branch: "Army",
    rank: "First Lieutenant",
    conflict: "Iraq War",
    yearFrom: "2004",
    yearTo: "2005",
    location: "Baghdad, Iraq",
    lat: 33.3152,
    lng: 44.3661,
    unit: "3rd Infantry Division",
    story: "I was a twenty-four-year-old lieutenant leading a platoon through the streets of Baghdad. Every intersection was a potential ambush. We patrolled in Humvees with no real armor — just a .50 cal on top. The people of Baghdad were the most important part. They were scared of us and scared of everyone else. Trying to earn trust in that environment, knowing that one wrong move could cost your entire squad... it keeps you up at night. But we built relationships with local leaders that I'm proud of."
  },
  {
    id: 7,
    name: "Sarah E. Mitchell",
    displayName: "1st Lieutenant Sarah Mitchell (Ret.)",
    branch: "Navy",
    rank: "Lieutenant",
    conflict: "War on Terror",
    yearFrom: "2003",
    yearTo: "2007",
    location: "Bagram, Afghanistan",
    lat: 34.7208,
    lng: 68.7897,
    unit: "U.S. Navy Medical Corps",
    story: "As a Navy medic deployed to Bagram, I worked in the surgical tent under the most brutal conditions. There's a particular kind of courage in the people who come in with what should have killed them — and then don't. I held the hands of boys who'd been here three weeks. Some of them came home. Some didn't. The mountain country of Afghanistan — where we operated — is the most beautiful place I've ever seen. It's also one of the harshest. The war there has no front lines."
  },
  {
    id: 8,
    name: "Thomas G. O'Brien",
    displayName: "Lieutenant Commander Thomas O'Brien (Ret.)",
    branch: "Navy",
    rank: "Lieutenant Commander",
    conflict: "War on Terror",
    yearFrom: "2002",
    yearTo: "2006",
    location: "Persian Gulf / Arabian Sea",
    lat: 26.0667,
    lng: 56.3333,
    unit: "USS Kitty Hawk (CV-63)",
    story: "I deployed six times on the Kitty Hawk, flying missions over Afghanistan and Iraq from the deck of a carrier thousands of miles from home. The routine was brutal — six months at sea, nothing but ocean on every side. But you develop a bond with the people around you that you can't explain. When we flew those long night missions over Kandahar, the city lights below were the only thing connecting us to the people we were trying to help. It was one of the hardest, most meaningful things I've ever done."
  },
  {
    id: 9,
    name: "Harold J. Whitcomb",
    displayName: "Master Sergeant Harold Whitcomb (Ret.)",
    branch: "Air Force",
    rank: "Master Sergeant",
    conflict: "Vietnam War",
    yearFrom: "1966",
    yearTo: "1969",
    location: "Da Nang, Vietnam",
    lat: 16.0471,
    lng: 108.2062,
    unit: "435th Air Rescue Squadron",
    story: "I was a helicopter pilot in Vietnam, running medevac and supply missions. Every flight was a gamble — the terrain, the weather, the enemy all working against you. We flew into LZs under fire, landed, and picked up the wounded. I remember one flight where I had to set down in a rice paddy — water coming up to the doors — but we got every one of them out. The pilots who didn't come back are the ones I still see in my dreams."
  },
  {
    id: 10,
    name: "Patricia A. Donovan",
    displayName: "Lieutenant Patricia Donovan (Ret.)",
    branch: "Coast Guard",
    rank: "Lieutenant",
    conflict: "War on Terror",
    yearFrom: "2003",
    yearTo: "2005",
    location: "Strait of Hormuz",
    lat: 26.7263,
    lng: 56.2993,
    unit: "Coast Guard Cutter Bertholf (WMSL-750)",
    story: "As a Coast Guard officer in the Strait of Hormuz, I boarded suspect vessels looking for weapons heading to insurgents. There's something very different about the Coast Guard experience — we're law enforcement first, military second. We gave surrender instructions in three languages before we even opened the hatch. When we found nothing, we let them go with a warning. When we found weapons, we detained the crew and turned them over. The Gulf was beautiful at dawn — impossible to reconcile with what was happening."
  },
  {
    id: 11,
    name: "Frank L. Kowalski",
    displayName: "Captain Frank Kowalski (Ret.)",
    branch: "Army",
    rank: "Captain",
    conflict: "Afghanistan War",
    yearFrom: "2010",
    yearTo: "2011",
    location: "Kunar Province, Afghanistan",
    lat: 34.7728,
    lng: 71.0776,
    unit: "75th Ranger Regiment",
    story: "I led a Ranger company through the mountains of Kunar. This is where the terrain tries to kill you before the enemy does. We ran patrols at 12,000 feet — every step is a battle. The people in the valley below — the villagers — were incredibly brave to live under the constant threat of Taliban harassment. We tried to help. Some days it felt like a drop in the ocean, but we tried. I still write letters to families of Rangers who didn't come home. I carry them every day."
  },
  {
    id: 12,
    name: "Angela M. Torres",
    displayName: "Specialist Angela Torres (Ret.)",
    branch: "National Guard",
    rank: "Specialist",
    conflict: "Gulf War",
    yearFrom: "1990",
    yearTo: "1991",
    location: "Saudi Arabia",
    lat: 23.8859,
    lng: 45.0792,
    unit: "104th Field Hospital",
    story: "I was in the National Guard when I got deployed to Saudi Arabia. Suddenly I was in the middle of the desert with no idea what was coming. When the ground war started, our hospital tent filled up with casualties. I was a combat medic and saw things no young woman should see — but I never felt more purposeful in my life. The desert nights were so cold you could see your breath. We worked three shifts and collapsed. Then got up and did it all again."
  }
];

// Render stories into a container
function renderStories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  // Merge demo stories with any user-submitted stories
  const userStories = JSON.parse(localStorage.getItem('veteranStories') || '[]');
  const allStories = [...demoStories, ...userStories];

  allStories.forEach(s => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `
      <div class="meta">
        <span>📅 ${s.yearFrom || '?'}–${s.yearTo || '?'}</span>
        <span>⚔️ ${s.conflict || 'Unknown'}</span>
        <span>🎖️ ${s.branch || 'Unknown'}</span>
        ${s.location ? `<span>📍 ${s.location}</span>` : ''}
      </div>
      <h3 style="font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:4px;">${s.displayName || s.name}</h3>
      <p style="font-size:.9rem;color:var(--text-light);">${s.rank || ''} · ${s.unit || ''}</p>
      <blockquote>"${s.story || ''}"</blockquote>
      <p class="author">— ${s.name}${s.yearFrom ? ', ' + (s.yearFrom) + '–' + (s.yearTo || '?') : ''}</p>
    `;
    container.appendChild(card);
  });
}

// Filter stories by conflict
function filterStories(containerId, conflict) {
  const cards = document.getElementById(containerId).children;
  const userStories = JSON.parse(localStorage.getItem('veteranStories') || '[]');
  const allStories = [...demoStories, ...userStories];

  Array.from(cards).forEach((card, i) => {
    const story = allStories[i];
    if (!conflict || conflict === 'All' || story.conflict === conflict) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Active nav highlight
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.href === window.location.href);
  });
});
